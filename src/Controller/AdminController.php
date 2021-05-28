<?php

namespace App\Controller;

use App\Entity\Emoticon;
use App\Form\EmoticonFormType;
use App\Repository\InterpersonnelleRepository;
use App\Repository\LinguistiqueRepository;
use App\Repository\MathematiqueRepository;
use App\Repository\NaturalisteRepository;
use App\Repository\VisuoSpatialeRepository;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin_dashboard")
     */
    public function dashboard(InterpersonnelleRepository $interpersonnelleRepository,
                              LinguistiqueRepository $linguistiqueRepository,
                              MathematiqueRepository $mathematiqueRepository,
                              NaturalisteRepository $naturalisteRepository,
                              VisuoSpatialeRepository $visuoSpatialeRepository): Response
    {
        $nbreEnigmeInterpersonnelle = $interpersonnelleRepository->count([]);
        $nbreEnigmeLinguistique = $linguistiqueRepository->count([]);
        $nbreEnigmeMathematique = $mathematiqueRepository->count([]);
        $nbreEnigmeNaturaliste = $naturalisteRepository->count([]);
        $nbreEnigmeVisuoSpatiale = $visuoSpatialeRepository->count([]);

        return $this->render('admin/dashboard.html.twig', [
            'nbreEnigmeInterpersonnelle' => $nbreEnigmeInterpersonnelle,
            'nbreEnigmeLinguistique' => $nbreEnigmeLinguistique,
            'nbreEnigmeMathematique' => $nbreEnigmeMathematique,
            'nbreEnigmeNaturaliste' => $nbreEnigmeNaturaliste,
            'nbreEnigmeVisuoSpatiale' => $nbreEnigmeVisuoSpatiale,
        ]);
    }

    /**
     * @Route("/admin/interpersonnelle", name="admin_interpersonnelle")
     */
    public function showAllInterpersonnelle(Request $request, EntityManagerInterface $entityManager, Utils $utils, InterpersonnelleRepository $interpersonnelleRepository): Response
    {
        $emoticon = new Emoticon();
        $emoticonForm = $this->createForm(EmoticonFormType::class, $emoticon);
        $emoticonForm = $emoticonForm->handleRequest($request);

        if ($emoticonForm->isSubmitted() && $emoticonForm->isValid()) {
            $directoryImage = $this->getParameter('image_emoticon_directory');
            $emoticon->setUrlImage($utils->saveImageAndGenerateUrl($emoticonForm, 'image', $directoryImage));

            $entityManager->persist($emoticon);
            $entityManager->flush();

            $this->addFlash('success', 'L\'émoticône a bien été enregistré');
            return $this->redirectToRoute('admin_interpersonnelle');
        }

        $tableauEnigmes = $interpersonnelleRepository->findAll();

        return $this->render('admin/interpersonnelle.html.twig', [
            'emoticonForm' => $emoticonForm->createView(),
            'tableauEnigmes' => $tableauEnigmes,
        ]);
    }

    /**
     * @Route("/admin/linguistique_pictos", name="admin_linguistique")
     */
    public function showAllLinguistique(LinguistiqueRepository $linguistiqueRepository): Response
    {
        $tableauEnigmes = $linguistiqueRepository->findAll();

        return $this->render('admin/linguistique.html.twig', [
            'tableauEnigmes' => $tableauEnigmes,
        ]);
    }

    /**
     * @Route("/admin/mathematique", name="admin_mathematique")
     */
    public function showAllMathematique(MathematiqueRepository $mathematiqueRepository): Response
    {
        $tableauEnigmes = $mathematiqueRepository->findAll();

        return $this->render('admin/mathematique.html.twig', [
            'tableauEnigmes' => $tableauEnigmes,
        ]);
    }

    /**
     * @Route("/admin/naturaliste", name="admin_naturaliste")
     */
    public function showAllNaturaliste(NaturalisteRepository $naturalisteRepository): Response
    {
        $tableauEnigmes = $naturalisteRepository->findAll();

        return $this->render('admin/naturaliste.html.twig', [
            'tableauEnigmes' => $tableauEnigmes,
        ]);
    }

    /**
     * @Route("/admin/visuoSpatiale", name="admin_visuoSpatiale")
     */
    public function showAllVisuoSpatiale(VisuoSpatialeRepository $visuoSpatialeRepository): Response
    {
        $tableauEnigmes = $visuoSpatialeRepository->findAll();

        return $this->render('admin/visuoSpatiale.html.twig', [
            'tableauEnigmes' => $tableauEnigmes,
        ]);
    }
}
