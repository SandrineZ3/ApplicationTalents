<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\LinguistiqueRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class LinguistiqueUtils
{
    public function recordScore(Request $request, string $reponse, LinguistiqueRepository $linguistiqueRepository, User $user, EntityManagerInterface $entityManager): void
    {
        $enigme = $linguistiqueRepository->find($request->get("idEnigme"));

        $solution = '';
        foreach ($enigme->getSolution() as $element) {
            $solution .= $element->getId() . ';';
        }

        $reponseArray = explode(';', $reponse);
        sort($reponseArray);
        $solutionArray = explode(';', $solution);
        sort($solutionArray);

        if ($reponseArray === $solutionArray) {
            $pointsGagnes = $enigme->getLevelOfDifficulty()->getPoints();
            $currentScore = $user->getScoreLinguistique();
            $user->setScoreLinguistique($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }
}
