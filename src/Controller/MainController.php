<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\Utils;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="main")
     */
    public function main(): Response
    {
        return $this->render('main/main.html.twig');
    }

    /**
     * @Route("/introduction", name="introduction")
     */
    public function introduction(): Response
    {
        return $this->render('main/introduction.html.twig');
    }

    /**
     * @Route("/introductionEndScreen", name="introductionEndScreen")
     */
    public function introductionEndScreen(): Response
    {
        return $this->render('main/content/endScreenIntro.html.twig');
    }

    /**
     * @Route("/result", name="result")
     */
    public function result(UserRepository $userRepository, Utils $utils): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'result') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        return $this->render('main/result.html.twig', [
            'user' => $user
        ]);
    }
}
