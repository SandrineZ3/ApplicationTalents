<?php


namespace App\Services;


use App\Entity\User;
use App\Repository\KinesthesiqueRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class KinesthesiqueUtils
{
    public function recordScore(Request $request,
                                string $reponse,
                                KinesthesiqueRepository $kinesthesiqueRepository,
                                User $user,
                                EntityManagerInterface $entityManager): void
    {
        $enigme = $kinesthesiqueRepository->find($request->get("idEnigme"));

        if ($reponse == $enigme->getSolution()) {
            $pointsGagnes = 20;
            $currentScore = $user->getScoreKinesthesique();
            $user->setScoreKinesthesique($currentScore + $pointsGagnes);
            $entityManager->flush();
        }
    }
}
