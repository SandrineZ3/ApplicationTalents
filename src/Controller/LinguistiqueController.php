<?php

namespace App\Controller;

use App\Repository\LevelOfDifficultyRepository;
use App\Repository\LinguistiqueRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LinguistiqueController extends AbstractController
{
    /**
     * @Route("/linguistique", name="linguistique")
     */
    public function linguistique(LinguistiqueRepository $linguistiqueRepository,
                                 LevelOfDifficultyRepository $levelOfDifficultyRepository,
                                 Request $request,
                                 UserRepository $userRepository,
                                 EntityManagerInterface $entityManager): Response
    {
        $user = $userRepository->find($this->getUser());

        if ($user->getLinguistiqueFinished()) {
            return $this->redirectToRoute('main');
        }

        // Aller chercher la phrase en BDD et la passer à Twig pour affichage
        // Récupérer un tableau d'énigmes uniquement dans le niveau facile
        // 1 = NIVEAU FACILE
        $levelOfDifficulty = $levelOfDifficultyRepository->find(1);
        $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty"=>$levelOfDifficulty), array("id" => "ASC"));

        // On récupère 1 énigme de maniere random dans tableau enigmes
        $indexRandom = array_rand($enigmes, 1);
        $enigmeRandom = $enigmes[$indexRandom];

//        if ($request->get("reponseFacile"))


        return $this->render('linguistique/linguistique.html.twig', [
            "enigmeRandom" => $enigmeRandom
        ]);
    }
}
