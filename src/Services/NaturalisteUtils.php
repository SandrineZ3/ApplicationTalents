<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\NaturalisteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class NaturalisteUtils
{
    public function recordScore(Request $request, int $reponse, NaturalisteRepository $naturalisteRepository, User $user, EntityManagerInterface $entityManager): void
    {
        $enigme = $naturalisteRepository->find($request->get("idEnigme"));

        if ($reponse == $enigme->getSolution()) {
            $pointsGagnes = $enigme->getLevelOfDifficulty()->getPoints();
            $currentScore = $user->getScoreNaturaliste();
            $user->setScoreNaturaliste($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }
}
