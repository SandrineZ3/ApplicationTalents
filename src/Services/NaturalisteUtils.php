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
        $tableauBonneReponse = explode(',', $enigme->getSolution());
        $tableauBonneReponse_trim = array_map('trim', $tableauBonneReponse);
        $tableauBonneReponse_trim_lower = array_change_key_case($tableauBonneReponse_trim, CASE_LOWER);

        // On cherche si la réponse donnée par l'user figure dans la string des solutions acceptées
        if (in_array(strtolower(trim($reponse)), $tableauBonneReponse_trim_lower)) {
            $pointsGagnes = $enigme->getLevelOfDifficulty()->getPoints();
            $currentScore = $user->getScoreNaturaliste();
            $user->setScoreNaturaliste($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }
}
