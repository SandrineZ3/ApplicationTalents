<?php

namespace App\Controller;

use App\Repository\InterpersonnelleRepository;
use App\Repository\KinesthesiqueRepository;
use App\Repository\LinguistiqueRepository;
use App\Repository\MathematiqueRepository;
use App\Repository\MusicaleRepository;
use App\Repository\NaturalisteRepository;
use App\Repository\UserRepository;
use App\Repository\VisuoSpatialeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin_dashboard")
     */
    public function dashboard(InterpersonnelleRepository $interpersonnelleRepository,
                              KinesthesiqueRepository $kinesthesiqueRepository,
                              LinguistiqueRepository $linguistiqueRepository,
                              MathematiqueRepository $mathematiqueRepository,
                              MusicaleRepository $musicaleRepository,
                              NaturalisteRepository $naturalisteRepository,
                              VisuoSpatialeRepository $visuoSpatialeRepository,
                              UserRepository $userRepository): Response
    {
        return $this->render('admin/dashboard.html.twig', [
            'nbreEnigmeInterpersonnelle' => $interpersonnelleRepository->count([]),
            'nbreEnigmeKinesthesique' => $kinesthesiqueRepository->count([]),
            'nbreEnigmeLinguistique' => $linguistiqueRepository->count([]),
            'nbreEnigmeMathematique' => $mathematiqueRepository->count([]),
            'nbreEnigmeMusicale' => $musicaleRepository->count([]),
            'nbreEnigmeNaturaliste' => $naturalisteRepository->count([]),
            'nbreEnigmeVisuoSpatiale' => $visuoSpatialeRepository->count([]),
            'tableauStats' => $userRepository->findStatsByDateEndIsNotNull()[0],
        ]);
    }

    /**
     * @Route("/admin/interpersonnelle", name="admin_interpersonnelle")
     */
    public function showAllInterpersonnelle(InterpersonnelleRepository $interpersonnelleRepository): Response
    {
        $tableauEnigmes = $interpersonnelleRepository->findAll();

        return $this->render('admin/interpersonnelle.html.twig', [
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
     * @Route("/admin/musicale", name="admin_musicale")
     */
    public function showAllMusicale(MusicaleRepository $musicaleRepository): Response
    {
        $tableauEnigmes = $musicaleRepository->findAll();

        return $this->render('admin/musicale.html.twig', [
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
