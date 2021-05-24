<?php

namespace App\Controller;

use App\Entity\VisuoSpatiale;
use App\Form\VisuoSpatialeFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VisuoSpatialeController extends AbstractController
{
    /**
     * @Route("/visuoSpatiale", name="visuoSpatiale")
     */
    public function show(): Response
    {

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
        return $this->render('enigmes/visuoSpatiale/create.html.twig', [
            'visuoSpatialeForm' => $visuoSpatialeForm->createView(),
        ]);
    }

    /**
     * @Route("/visuoSpatiale/{id}/update", name="visuoSpatiale_update")
     */
    public function update(): Response
    {

    }

    /**
     * @Route("/visuoSpatiale/{id}/delete", name="visuoSpatiale_delete")
     */
    public function delete(): Response
    {

    }
}
