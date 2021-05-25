<?php

namespace App\Controller;

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
        if ($this->getUser() && $this->getUser()->getRoles() === ['ROLE_ADMIN']) {
            return $this->redirectToRoute('admin_dashboard');
        }
        return $this->render('main/main.html.twig');
    }
}
