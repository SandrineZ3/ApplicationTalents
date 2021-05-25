<?php

namespace App\Services;

use App\Entity\User;
use App\Entity\VisuoSpatiale;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\VisuoSpatialeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class VisuoSpatialeUtils
{
    public function recordScore(Request $request, string $reponse, VisuoSpatialeRepository $visuoSpatialeRepository, User $user, EntityManagerInterface $entityManager): void
    {
        $enigme = $visuoSpatialeRepository->find($request->get("idEnigme"));

        if ($reponse == $enigme->getSolution()) {
            $pointsGagnes = $enigme->getLevelOfDifficulty()->getPoints();
            $currentScore = $user->getScoreVisuoSpatiale();
            $user->setScoreVisuoSpatiale($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }

    public function nextEnigme(int $levelOfDifficultySuivant, VisuoSpatialeRepository $visuoSpatialeRepository, LevelOfDifficultyRepository $levelOfDifficultyRepository): VisuoSpatiale
    {
        $levelOfDifficulty = $levelOfDifficultyRepository->find($levelOfDifficultySuivant);
        $tableauEnigme = $visuoSpatialeRepository->findBy(array('levelOfDifficulty' => $levelOfDifficulty), array('id' => 'ASC'), null, 0);
        $indexRandom = array_rand($tableauEnigme);

        return $tableauEnigme[$indexRandom];
    }
}
