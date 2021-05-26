<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\InterpersonnelleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class InterpersonnelleUtils
{
    public function recordScore(Request $request, string $reponse, InterpersonnelleRepository $interpersonnelleRepository, User $user, EntityManagerInterface $entityManager): void
    {
        $enigme = $interpersonnelleRepository->find($request->get("idEnigme"));

        if ($reponse == $enigme->getSolution()) {
            $pointsGagnes = $enigme->getLevelOfDifficulty()->getPoints();
            $currentScore = $user->getScoreInterpersonnelle();
            $user->setScoreInterpersonnelle($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }
}
