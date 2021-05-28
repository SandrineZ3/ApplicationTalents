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
                ['naturaliste', $user->getNaturalisteFinished()],
                ['visuoSpatiale', $user->getVisuoSpatialeFinished()],
                ['linguistique_pictos', $user->getLinguistiqueFinished()],
                ['mathematique', $user->getMathematiqueFinished()]
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
}
