<?php

namespace App\Services;

use App\Entity\User;
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
}
