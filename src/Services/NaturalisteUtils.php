<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\NaturalisteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class NaturalisteUtils
{
    public function recordScore(Request $request, string $reponse, NaturalisteRepository $naturalisteRepository, User $user, EntityManagerInterface $entityManager): void
    {
        $enigme = $naturalisteRepository->find($request->get("idEnigme"));

        // On cherche si la réponse donnée par l'user figure dans la string des solutions acceptées
        if (strpos($enigme->getSolution(), $reponse) !== false) {
            $pointsGagnes = $enigme->getLevelOfDifficulty()->getPoints();
            $currentScore = $user->getScoreNaturaliste();
            $user->setScoreNaturaliste($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }
}
