<?php

namespace App\Controller;

use App\Repository\LevelOfDifficultyRepository;
use App\Repository\LinguistiqueRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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

        // 1 = NIVEAU FACILE
        $levelOfDifficulty = $levelOfDifficultyRepository->find(1);
        $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
        $indexRandom = array_rand($enigmes, 1);
        $enigmeRandom = $enigmes[$indexRandom];

        if ($request->get("reponseFacile")) {
            $user->setScoreLinguistique(0);
            $entityManager->flush();
            $reponse = $request->get("reponseFacile");
            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreLinguistique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreLinguistique($scoreCalcule);
                $entityManager->flush();
            }

            // 2 = NIVEAU MOYEN
            $levelOfDifficulty = $levelOfDifficultyRepository->find(2);
            $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseMoyen";
            // Réponse requete AJAX
            $finished = false;
            return new JsonResponse([
                'content' => $this->renderView('linguistique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'finished'))
            ]);
        }

        if ($request->get("reponseMoyen")) {
            $reponse = $request->get("reponseMoyen");
            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreLinguistique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreLinguistique($scoreCalcule);
                $entityManager->flush();
            }

            // 3 = NIVEAU DIFFICILE
            $levelOfDifficulty = $levelOfDifficultyRepository->find(3);
            $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseDifficile";
            // Réponse AJAX
            $finished = false;
            return new JsonResponse([
                'content' => $this->renderView('linguistique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'finished'))
            ]);
        }

        if ($request->get("reponseDifficile")) {
            $reponse = $request->get("reponseDifficile");
            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreLinguistique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreLinguistique($scoreCalcule);
                $entityManager->flush();
            }

            // Statut terminé
            $user->setLinguistiqueFinished(true);
            $entityManager->flush();

            // Réponse AJAX
            return new JsonResponse([
                'content' => $this->renderView('linguistique/content/endScreen.html.twig')
            ]);
        }

        return $this->render('linguistique/show.html.twig', [
            "enigmeRandom" => $enigmeRandom
        ]);
    }

//    TODO: implémenter les méthodes CREATE/UPDATE/DELETE
}
