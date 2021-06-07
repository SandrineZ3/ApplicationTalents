<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\MusicaleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class MusicaleUtils
{
    public function recordScore(Request $request, string $reponse, MusicaleRepository $musicaleRepository, User $user, EntityManagerInterface $entityManager): void
    {
        $enigme = $musicaleRepository->find($request->get("idEnigme"));

        if ($reponse === $enigme->getSolution()) {
            $pointsGagnes = $enigme->getLevelOfDifficulty()->getPoints();
            $currentScore = $user->getScoreMusicale();
            $user->setScoreMusicale($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }
}
