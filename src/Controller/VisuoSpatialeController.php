<?php

namespace App\Controller;

use App\Entity\VisuoSpatiale;
use App\Form\VisuoSpatialeFormType;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\UserRepository;
use App\Repository\VisuoSpatialeRepository;
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
     * @Route("/visuoSpatiale", name="visuoSpatiale")
     */
    public function show(Request $request, EntityManagerInterface $entityManager, VisuoSpatialeUtils $visuoSpatialeUtils, UserRepository $userRepository, LevelOfDifficultyRepository $levelOfDifficultyRepository, VisuoSpatialeRepository $visuoSpatialeRepository): Response
    {
        $user = $userRepository->find($this->getUser());
        if ($user->getVisuoSpatialeFinished()) {
            return $this->redirectToRoute('main');
        }

        if ($reponse = $request->get('reponseFacile')) {
            $user->setScoreVisuoSpatiale(0);
            $entityManager->flush();

            $visuoSpatialeUtils->recordScore($request, $reponse, $visuoSpatialeRepository, $user, $entityManager);

            $enigmeRandom = $visuoSpatialeUtils->nextEnigme(2, $visuoSpatialeRepository, $levelOfDifficultyRepository);
            $nomInput = 'reponseMoyen';

            return new JsonResponse([
                'content' => $this->renderView('visuoSpatiale/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput'))
            ]);
        }
        else if ($reponse = $request->get("reponseMoyen")) {
            $visuoSpatialeUtils->recordScore($request, $reponse, $visuoSpatialeRepository, $user, $entityManager);

            $enigmeRandom = $visuoSpatialeUtils->nextEnigme(3, $visuoSpatialeRepository, $levelOfDifficultyRepository);
            $nomInput = 'reponseDifficile';

            return new JsonResponse([
                'content' => $this->renderView('visuoSpatiale/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput'))
            ]);
        }
        else if ($reponse = $request->get("reponseDifficile")) {
            $visuoSpatialeUtils->recordScore($request, $reponse, $visuoSpatialeRepository, $user, $entityManager);

            return new JsonResponse([
                'content' => 'FIN DU JEU'
            ]);
        }
        else {
            $enigmeRandom = $visuoSpatialeUtils->nextEnigme(1, $visuoSpatialeRepository, $levelOfDifficultyRepository);
            $nomInput = 'reponseFacile';
        }

        return $this->render('visuoSpatiale/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput
        ]);
    }

    /**
     * @Route("/visuoSpatiale/create", name="visuoSpatiale_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $visuoSpatiale = new VisuoSpatiale();
        $visuoSpatialeForm = $this->createForm(VisuoSpatialeFormType::class, $visuoSpatiale);
        $visuoSpatialeForm = $visuoSpatialeForm->handleRequest($request);

        if ($visuoSpatialeForm->isSubmitted() && $visuoSpatialeForm->isValid()) {
            $image = $visuoSpatialeForm->get('image')->getData();
            $urlImage = md5(uniqid()) . '.' . $image->guessExtension();
            $image->move($this->getParameter('image_visuoSpatiale_directory'), $urlImage);
            $visuoSpatiale->setUrlImage($urlImage);

            $entityManager->persist($visuoSpatiale);
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été enregistré');
            return $this->redirectToRoute('visuoSpatiale_create');
        }

        return $this->render('visuoSpatiale/create.html.twig', [
            'visuoSpatialeForm' => $visuoSpatialeForm->createView(),
        ]);
    }

    /**
     * @Route("/visuoSpatiale/{id}/update", name="visuoSpatiale_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, EntityManagerInterface $entityManager, VisuoSpatialeRepository $visuoSpatialeRepository): Response
    {
        $visuoSpatiale = $visuoSpatialeRepository->find($id);
        if (!$visuoSpatiale) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $visuoSpatialeForm = $this->createForm(VisuoSpatialeFormType::class, $visuoSpatiale, ['update' => true]);
        $visuoSpatialeForm = $visuoSpatialeForm->handleRequest($request);

        if ($visuoSpatialeForm->isSubmitted() && $visuoSpatialeForm->isValid()) {

            if ($visuoSpatialeForm->get('image')->getData()) {
                unlink($this->getParameter('image_visuoSpatiale_directory') . '/' . $visuoSpatiale->getUrlImage());
                $image = $visuoSpatialeForm->get('image')->getData();
                $urlImage = md5(uniqid()) . '.' . $image->guessExtension();
                $image->move($this->getParameter('image_visuoSpatiale_directory'), $urlImage);
                $visuoSpatiale->setUrlImage($urlImage);
            }

            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été mise à jour');
            return $this->redirectToRoute('visuoSpatiale_update', ["id" => $id]);
        }

        return $this->render('visuoSpatiale/update.html.twig', [
            'visuoSpatialeForm' => $visuoSpatialeForm->createView(),
        ]);
    }

    /**
     * @Route("/visuoSpatiale/{id}/delete", name="visuoSpatiale_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, VisuoSpatialeRepository $visuoSpatialeRepository): Response
    {
        $visuoSpatiale = $visuoSpatialeRepository->find($id);
        if (!$visuoSpatiale) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        unlink($this->getParameter('image_visuoSpatiale_directory') . '/' . $visuoSpatiale->getUrlImage());
        $entityManager->remove($visuoSpatiale);
        $entityManager->flush();

        $this->addFlash('success', 'L\'énigme a bien été supprimée');
        return $this->redirectToRoute('main');
    }
}
