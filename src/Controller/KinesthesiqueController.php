<?php

namespace App\Controller;

use App\Entity\Kinesthesique;
use App\Form\KinesthesiqueFormType;
use App\Repository\KinesthesiqueRepository;
use App\Repository\UserRepository;
use App\Services\KinesthesiqueUtils;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class KinesthesiqueController extends AbstractController
{
    /**
     * @Route("/kinesthesique", name="kinesthesique")
     */
    public function show(Request $request,
                         EntityManagerInterface $entityManager,
                         KinesthesiqueUtils $kinesthesiqueUtils,
                         Utils $utils,
                         UserRepository $userRepository,
                         KinesthesiqueRepository $kinesthesiqueRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'kinesthesique') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        $tableauOfReponses = ['reponse1', 'reponse2', 'reponse3'];
        foreach ($tableauOfReponses as $index => $reponses) {
            if ($request->get($reponses)) {
                if ($index === 0) {
                    $user->setScoreKinesthesique(0);
                    $entityManager->flush();
                }

                $kinesthesiqueUtils->recordScore($request, $request->get($reponses), $kinesthesiqueRepository, $user, $entityManager);

                if ($index === 0 || $index === 1) {
                    $enigmeRandom = $index + 1;
                    $nomInput = $tableauOfReponses[$index + 1];

                    return new JsonResponse([
                        'content' => $this->renderView('kinesthesique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput'))
                    ]);
                }
                else {
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

        $enigmeRandom = $index + 1;
        $nomInput = 'reponse1';

        return $this->render('kinesthesique/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput,
        ]);
    }

    /**
     * @Route("admin/kinesthesique/create", name="kinesthesique_create")
     */
    public function create (Request $request,
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
