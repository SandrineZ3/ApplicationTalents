<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\Utils;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IntrapersonnelleController extends AbstractController
{
    /**
     * @Route("/intrapersonnelle/intro", name="intrapersonnelle_intro")
     */
    public function intro(Utils $utils, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'intrapersonnelle_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }

        return $this->render('intrapersonnelle/intro.html.twig');
    }

    /**
     * @Route("/intrapersonnelle", name="intrapersonnelle")
     */
    public function show(Request $request, EntityManagerInterface $entityManager, Utils $utils, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'intrapersonnelle_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

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
                $request->get('musicale') +
                $request->get('naturaliste') +
                $request->get('visuoSpatiale');

            $user->setScoreIntrapersonnelle(60 - abs(($scoreTotal / 7) - ($scoreTotalAutonotation * 60 / 28)));
            $user->setIntrapersonnelleFinished(true);
            $user->setDateEnd(new DateTime());
            $entityManager->flush();

            return $this->redirectToRoute('result_intro');
        }

        return $this->render('intrapersonnelle/show.html.twig');
    }
}
