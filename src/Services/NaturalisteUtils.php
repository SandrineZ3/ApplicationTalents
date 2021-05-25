<?php

namespace App\Services;

use App\Entity\Naturaliste;
use App\Entity\User;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\NaturalisteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class NaturalisteUtils
{
    public function recordScore(Request $request, string $reponse, NaturalisteRepository $naturalisteRepository, User $user, EntityManagerInterface $entityManager): void
    {
        $enigme = $naturalisteRepository->find($request->get("idEnigme"));

        // On cherche si la réponse donnée par l'user figure dans la string des solutions acceptées
        if (strpos($enigme->getSolution(), $reponse) >= 0) {
            $pointsGagnes = $enigme->getLevelOfDifficulty()->getPoints();
            $currentScore = $user->getScoreNaturaliste();
            $user->setScoreNaturaliste($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }

    public function nextEnigme(int $levelOfDifficultySuivant, NaturalisteRepository $naturalisteRepository, LevelOfDifficultyRepository $levelOfDifficultyRepository): Naturaliste
    {
        $levelOfDifficulty = $levelOfDifficultyRepository->find($levelOfDifficultySuivant);
        $tableauEnigme = $naturalisteRepository->findBy(array('levelOfDifficulty' => $levelOfDifficulty), array('id' => 'ASC'), null, 0);
        $indexRandom = array_rand($tableauEnigme);

        return $tableauEnigme[$indexRandom];
    }
}
