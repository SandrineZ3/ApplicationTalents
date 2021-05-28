<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="main")
     */
    public function main(UserRepository $userRepository): Response
    {
        if ($this->getUser() && $this->getUser()->getRoles() === ['ROLE_ADMIN']) {
            return $this->redirectToRoute('admin_dashboard');
        }
        if ($this->getUser() && $this->getUser()->getRoles() === ['ROLE_USER']) {
            $user = $userRepository->find($this->getUser());
            $tableauOrdreJeux = [
//                ['kinesthesique', $user->getKinesthesiqueFinished()],
//                ['musicale', $user->getMusicaleFinished()],
                ['interpersonnelle', $user->getInterpersonnelleFinished()],
                ['naturaliste', $user->getNaturalisteFinished()],
                ['visuoSpatiale', $user->getVisuoSpatialeFinished()],
                ['linguistique', $user->getLinguistiqueFinished()],
                ['mathematique', $user->getMathematiqueFinished()],
                ['intrapersonnelle', $user->getIntrapersonnelleFinished()],
                ['result', 0],
            ];
            $i = 0;
            while ($i < count($tableauOrdreJeux)) {
                if (!$tableauOrdreJeux[$i][1]) {
                    return $this->redirectToRoute($tableauOrdreJeux[$i][0]);
                }
                $i++;
            }
        }
        return $this->render('main/main.html.twig');
    }

    /**
     * @Route("/result", name="result")
     */
    public function result(UserRepository $userRepository): Response
    {
        $user = $userRepository->find($this->getUser());
        if (!$user->getIntrapersonnelleFinished()) {
            return $this->redirectToRoute('main');
        }

        return $this->render('main/result.html.twig', [
            'user' => $user
        ]);
    }
}
