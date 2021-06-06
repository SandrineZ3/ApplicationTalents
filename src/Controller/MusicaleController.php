<?php

namespace App\Controller;

use App\Entity\Musicale;
use App\Form\MusicaleFormType;
use App\Repository\MusicaleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MusicaleController extends AbstractController
{
    /**
     * @Route("/musicale", name="musicale")
     */
    public function show(): Response
    {
        return $this->render('musicale/show.html.twig');
    }

    /**
     * @Route("admin/musicale/create", name="musicale_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $musicale = new Musicale();
        $musicaleForm = $this->createForm(MusicaleFormType::class, $musicale);
        $musicaleForm = $musicaleForm->handleRequest($request);

        if ($musicaleForm->isSubmitted() && $musicaleForm->isValid()) {
            $entityManager->persist($musicale);
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été enregistrée');
            return $this->redirectToRoute('admin_musicale');
        }

        return $this->render('musicale/create.html.twig', [
            'musicaleForm' => $musicaleForm->createView(),
            'musicale' => $musicale,
        ]);
    }

    /**
     * @Route("admin/musicale/{id}/update", name="musicale_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, EntityManagerInterface $entityManager, MusicaleRepository $musicaleRepository): Response
    {
        $musicale = $musicaleRepository->find($id);
        if (!$musicale) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $musicaleForm = $this->createForm(MusicaleFormType::class, $musicale);
        $musicaleForm = $musicaleForm->handleRequest($request);

        if ($musicaleForm->isSubmitted() && $musicaleForm->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été mise à jour');
            return $this->redirectToRoute('admin_musicale');
        }

        return $this->render('musicale/update.html.twig', [
            'musicaleForm' => $musicaleForm->createView(),
            'musicale' => $musicale,
        ]);
    }

    /**
     * @Route("admin/musicale/{id}/delete", name="musicale_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, MusicaleRepository $musicaleRepository): Response
    {
        $musicale = $musicaleRepository->find($id);
        if (!$musicale) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $entityManager->remove($musicale);
        $entityManager->flush();

        $this->addFlash('success', 'L\'énigme a bien été supprimée');
        return $this->redirectToRoute('admin_musicale');
    }
}
