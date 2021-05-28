<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\InterpersonnelleUtils;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IntrapersonnelleController extends AbstractController
{
    /**
     * @Route("/intrapersonnelle", name="intrapersonnelle")
     */
    public function show(Request $request, EntityManagerInterface $entityManager, InterpersonnelleUtils $interpersonnelleUtils, Utils $utils, UserRepository $userRepository): Response
    {
        $user = $userRepository->find($this->getUser());
        if ($user->getIntrapersonnelleFinished()) {
            return $this->redirectToRoute('main');
        }

        if ($request->get('formIntrapersonnelle')) {
            $scoreTotal =
                $user->getScoreInterpersonnelle() +
                $user->getScoreKinesthesique() +
                $user->getScoreLinguistique() +
                $user->getScoreMathematique() +
                $user->getScoreMusicale() +
                $user->getScoreNaturaliste() +
                $user->getScoreVisuoSpatiale();

            $scoreTotalAutonotation =
                $request->get('interpersonnelle') +
                $request->get('kinesthesique') +
                $request->get('linguistique') +
                $request->get('mathematique') +
                $request->get('musciale') +
                $request->get('naturaliste') +
                $request->get('visuoSpatiale');

            $user->setScoreIntrapersonnelle(60 - abs(($scoreTotal / 7) - ($scoreTotalAutonotation * 60 / 28)));
            $user->setIntrapersonnelleFinished(true);
            $entityManager->flush();

            return $this->redirectToRoute('main');
        }

        return $this->render('intrapersonnelle/show.html.twig');
    }
}
