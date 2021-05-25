<?php

namespace App\Controller;

use App\Repository\LevelOfDifficultyRepository;
use App\Repository\MathematiqueRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MathematiqueController extends AbstractController
{
    /**
     * @Route("/mathematique", name="mathematique")
     */
    public function mathematique(MathematiqueRepository $mathematiqueRepository,
                           LevelOfDifficultyRepository $levelOfDifficultyRepository,
                           Request $request,
                           UserRepository $userRepository,
                           EntityManagerInterface $entityManager): Response
    {
        $user = $userRepository->find($this->getUser());

        if ($user->getMathematiqueFinished() == true ) {
            return $this->redirectToRoute('main');
        }

        //Aller chercher les images en BDD et les filer à Twig pour affichage
        // 1 = NIVEAU FACILE
        $levelOfDifficulty = $levelOfDifficultyRepository->find(1);
        $enigmes = $mathematiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));

        // On récupère 1 énigme de maniere random dans tableau enigmes
        $indexRandom = array_rand($enigmes, 1);
        $enigmeRandom = $enigmes[$indexRandom];



        if ($request->get("reponseFacile")) {
            $user->setScoreMathematique(0);
            $entityManager->flush();
            $reponse = $request->get("reponseFacile");
            $enigme = $mathematiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreMathematique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreMathematique($scoreCalcule);

                $entityManager->flush();
            }

            // 2 = NIVEAU MOYEN
            $levelOfDifficulty = $levelOfDifficultyRepository->find(2);
            $enigmes = $mathematiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
            // On récupère une énigme de maniere random dans tableau enigmes
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseMoyen";

            // Réponse OBLIGATOIRE pour la requête AJAX qui contient un mini morceau de Twig
            $finished = false;
            return new JsonResponse([
                'content' => $this->renderView('mathematique/content/reponse.html.twig', compact('enigmeRandom', 'nomInput', 'finished'))
            ]);
        }

        if ($request->get("reponseMoyen")) {
            $reponse = $request->get("reponseMoyen");
            $enigme = $mathematiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreMathematique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreMathematique($scoreCalcule);

                $entityManager->flush();
            }

            // 3 = NIVEAU DIFFICILE
            $levelOfDifficulty = $levelOfDifficultyRepository->find(3);
            $enigmes = $mathematiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
            // On récupère une énigme de maniere random dans tableau enigmes
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseDifficile";

            // Réponse OBLIGATOIRE pour la requête AJAX qui contient un mini morceau de Twig
            $finished = false;
            return new JsonResponse([
                'content' => $this->renderView('mathematique/content/reponse.html.twig', compact('enigmeRandom', 'nomInput', 'finished'))
            ]);
        }

        if ($request->get("reponseDifficile")) {
            $reponse = $request->get("reponseDifficile");
            $enigme = $mathematiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreMathematique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreMathematique($scoreCalcule);

                $entityManager->flush();
            }

            // On met les Maths en statut terminé
//            $entityManager->persist($user->setMathematiqueFinished(true));
            $user->setMathematiqueFinished(true);
            $entityManager->flush();

            // Réponse OBLIGATOIRE pour la requête AJAX qui contient un mini morceau de Twig renvoyé
            return new JsonResponse([
                'content' => $this->renderView('mathematique/content/injection.html.twig')
            ]);
        }

        return $this->render('mathematique/enigme.html.twig', [
            "enigmeRandom" => $enigmeRandom
        ]);
    }
}
