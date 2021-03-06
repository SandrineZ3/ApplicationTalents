<?php

namespace App\Controller;

use App\Entity\VisuoSpatiale;
use App\Form\VisuoSpatialeFormType;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\UserRepository;
use App\Repository\VisuoSpatialeRepository;
use App\Services\Utils;
use App\Services\VisuoSpatialeUtils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VisuoSpatialeController extends AbstractController
{
    /**
     * @Route("/visuoSpatiale/intro", name="visuoSpatiale_intro")
     */
    public function intro(Utils $utils, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'visuoSpatiale_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }

        return $this->render('visuoSpatiale/intro.html.twig');
    }

    /**
     * @Route("/visuoSpatiale", name="visuoSpatiale")
     */
    public function show(Request $request, EntityManagerInterface $entityManager, VisuoSpatialeUtils $visuoSpatialeUtils, Utils $utils, UserRepository $userRepository, LevelOfDifficultyRepository $levelOfDifficultyRepository, VisuoSpatialeRepository $visuoSpatialeRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'visuoSpatiale_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        $tableauOfDifficulty = ['reponseFacile', 'reponseMoyen', 'reponseDifficile'];
        foreach ($tableauOfDifficulty as $index => $difficulty) {
            if ($request->get($difficulty)) {
                if ($index === 0) {
                    $user->setScoreVisuoSpatiale(0);
                    $entityManager->flush();
                }

                $visuoSpatialeUtils->recordScore($request, $request->get($difficulty), $visuoSpatialeRepository, $user, $entityManager);

                if ($index === 0 || $index === 1) {
                    $enigmeRandom = $utils->nextEnigme($index + 2, $visuoSpatialeRepository, $levelOfDifficultyRepository);
                    $nomInput = $tableauOfDifficulty[$index + 1];
                    return new JsonResponse([
                        'content' => $this->renderView('visuoSpatiale/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput'))
                    ]);
                }
                else {
                    $user->setVisuoSpatialeFinished(true);
                    $entityManager->flush();

                    return new JsonResponse([
                        'content' => $this->renderView('visuoSpatiale/content/endScreen.html.twig')
                    ]);
                }
            }
        }
        if ($request->get('ajax')) {
            return new JsonResponse([
                'content' => 'error'
            ]);
        }

        $enigmeRandom = $utils->nextEnigme(1, $visuoSpatialeRepository, $levelOfDifficultyRepository);
        $nomInput = 'reponseFacile';

        return $this->render('visuoSpatiale/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput
        ]);
    }

    /**
     * @Route("admin/visuoSpatiale/create", name="visuoSpatiale_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager, Utils $utils): Response
    {
        $visuoSpatiale = new VisuoSpatiale();
        $visuoSpatialeForm = $this->createForm(VisuoSpatialeFormType::class, $visuoSpatiale);
        $visuoSpatialeForm = $visuoSpatialeForm->handleRequest($request);

        if ($visuoSpatialeForm->isSubmitted() && $visuoSpatialeForm->isValid()) {
            $directoryImage = $this->getParameter('image_visuoSpatiale_directory');
            $visuoSpatiale->setUrlImage($utils->saveImageAndGenerateUrl($visuoSpatialeForm, 'image', $directoryImage));

            $entityManager->persist($visuoSpatiale);
            $entityManager->flush();

            $this->addFlash('success', 'L\'??nigme a bien ??t?? enregistr??');
            return $this->redirectToRoute('admin_visuoSpatiale');
        }

        return $this->render('visuoSpatiale/create.html.twig', [
            'visuoSpatialeForm' => $visuoSpatialeForm->createView(),
        ]);
    }

    /**
     * @Route("admin/visuoSpatiale/{id}/update", name="visuoSpatiale_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, EntityManagerInterface $entityManager, Utils $utils, VisuoSpatialeRepository $visuoSpatialeRepository): Response
    {
        $visuoSpatiale = $visuoSpatialeRepository->find($id);
        if (!$visuoSpatiale) {
            $this->addFlash('error', 'L\'enigme recherch??e n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $visuoSpatialeForm = $this->createForm(VisuoSpatialeFormType::class, $visuoSpatiale, ['update' => true]);
        $visuoSpatialeForm = $visuoSpatialeForm->handleRequest($request);

        if ($visuoSpatialeForm->isSubmitted() && $visuoSpatialeForm->isValid()) {
            $directoryImage = $this->getParameter('image_visuoSpatiale_directory');

            if ($visuoSpatialeForm->get('image')->getData()) {
                unlink($directoryImage . '/' . $visuoSpatiale->getUrlImage());
                $visuoSpatiale->setUrlImage($utils->saveImageAndGenerateUrl($visuoSpatialeForm, 'image', $directoryImage));
            }

            $entityManager->flush();

            $this->addFlash('success', 'L\'??nigme a bien ??t?? mise ?? jour');
            return $this->redirectToRoute('admin_visuoSpatiale');
        }

        return $this->render('visuoSpatiale/update.html.twig', [
            'visuoSpatialeForm' => $visuoSpatialeForm->createView(),
            'visuoSpatiale' => $visuoSpatiale,
        ]);
    }

    /**
     * @Route("admin/visuoSpatiale/{id}/delete", name="visuoSpatiale_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, VisuoSpatialeRepository $visuoSpatialeRepository): Response
    {
        $visuoSpatiale = $visuoSpatialeRepository->find($id);
        if (!$visuoSpatiale) {
            $this->addFlash('error', 'L\'enigme recherch??e n\'existe pas');
            return $this->redirectToRoute('admin_visuoSpatiale');
        }

        $directoryImage = $this->getParameter('image_visuoSpatiale_directory');
        unlink($directoryImage . '/' . $visuoSpatiale->getUrlImage());

        $entityManager->remove($visuoSpatiale);
        $entityManager->flush();

        $this->addFlash('success', 'L\'??nigme a bien ??t?? supprim??e');
        return $this->redirectToRoute('admin_visuoSpatiale');
    }
}
