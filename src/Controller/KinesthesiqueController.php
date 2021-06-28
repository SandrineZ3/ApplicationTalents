<?php

namespace App\Controller;

use App\Entity\Kinesthesique;
use App\Form\KinesthesiqueFormType;
use App\Repository\KinesthesiqueRepository;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\UserRepository;
use App\Services\KinesthesiqueUtils;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class KinesthesiqueController extends AbstractController
{
    /**
     * @Route("/kinesthesique/intro", name="kinesthesique_intro")
     */
    public function intro(Utils $utils, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'kinesthesique_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }

        return $this->render('kinesthesique/intro.html.twig');
    }

    /**
     * @Route("/kinesthesique", name="kinesthesique")
     */
    public function show(Request $request,
                         EntityManagerInterface $entityManager,
                         KinesthesiqueUtils $kinesthesiqueUtils,
                         Utils $utils,
                         UserRepository $userRepository,
                         LevelOfDifficultyRepository $levelOfDifficultyRepository,
                         KinesthesiqueRepository $kinesthesiqueRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'kinesthesique_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        $tableauOfDifficulty = ['reponseFacile', 'reponseMoyen', 'reponseDifficile'];
        foreach ($tableauOfDifficulty as $index => $difficulty) {
            if ($request->get($difficulty)) {
                if ($index === 0) {
                    $user->setScoreKinesthesique(0);
                    $entityManager->flush();
                }

                $kinesthesiqueUtils->recordScore($request, $request->get($difficulty), $kinesthesiqueRepository, $user, $entityManager);

                if ($index === 0 || $index === 1) {
                    $enigmeRandom = $utils->nextEnigme($index + 2, $kinesthesiqueRepository, $levelOfDifficultyRepository);
                    $nomInput = $tableauOfDifficulty[$index + 1];
                    return new JsonResponse([
                        'content' => $this->renderView('kinesthesique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput'))
                    ]);
                } else {
                    $user->setKinesthesiqueFinished(true);
                    $entityManager->flush();

                    return new JsonResponse([
                        'content' => $this->renderView('kinesthesique/content/endScreen.html.twig')
                    ]);
                }
            }
        }
        if ($request->get('ajax')) {
            return new JsonResponse([
                'content' => 'error'
            ]);
        }

        $enigmeRandom = $utils->nextEnigme(1, $kinesthesiqueRepository, $levelOfDifficultyRepository);
        $nomInput = 'reponseFacile';

        return $this->render('kinesthesique/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput,
        ]);
    }

    /**
     * @Route("admin/kinesthesique/create", name="kinesthesique_create")
     */
    public function create(Request $request,
                           EntityManagerInterface $entityManager): Response
    {
        $kinesthesique = new Kinesthesique();
        $kinesthesiqueForm = $this->createForm(KinesthesiqueFormType::class, $kinesthesique);
        $kinesthesiqueForm = $kinesthesiqueForm->handleRequest($request);

        if ($kinesthesiqueForm->isSubmitted() && $kinesthesiqueForm->isValid()) {
            $entityManager->persist($kinesthesique);
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été enregistrée');
            return $this->redirectToRoute('admin_kinesthesique');
        }

        return $this->render('kinesthesique/create.html.twig', [
            'kinesthesiqueForm' => $kinesthesiqueForm->createView(),
        ]);
    }

    /**
     * @Route("admin/kinesthesique/{id}/update", name="kinesthesique_update", requirements={"id"="\d+"})
     */
    public function update(int $id,
                           Request $request,
                           EntityManagerInterface $entityManager,
                           KinesthesiqueRepository $kinesthesiqueRepository): Response
    {
        $kinesthesique = $kinesthesiqueRepository->find($id);
        if (!$kinesthesique) {
            $this->addFlash('error', 'L\'énigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $kinesthesiqueForm = $this->createForm(KinesthesiqueFormType::class, $kinesthesique);
        $kinesthesiqueForm = $kinesthesiqueForm->handleRequest($request);

        if ($kinesthesiqueForm->isSubmitted() && $kinesthesiqueForm->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été mise à jour');
            return $this->redirectToRoute('admin_kinesthesique');
        }

        return $this->render('kinesthesique/update.html.twig', [
            'kinesthesiqueForm' => $kinesthesiqueForm->createView(),
            'kinesthesique' => $kinesthesique,
        ]);
    }

    /**
     * @Route("admin/kinesthesique/{id}/delete", name="kinesthesique_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id,
                           EntityManagerInterface $entityManager,
                           KinesthesiqueRepository $kinesthesiqueRepository): Response
    {
        $kinesthesique = $kinesthesiqueRepository->find($id);
        if (!$kinesthesique) {
            $this->addFlash('error', 'L\'énigme recherchée n\'existe pas');
            return $this->redirectToRoute('admin_kinesthesique');
        }

        $entityManager->remove($kinesthesique);
        $entityManager->flush();

        $this->addFlash('success', 'L\'énigme a bien été supprimée');
        return $this->redirectToRoute('admin_kinesthesique');
    }
}
