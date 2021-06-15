<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class KinesthesiqueController extends AbstractController
{
    /**
     * @Route("/kinesthesique", name="kinesthesique")
     */
    public function show(): Response
    {
        return $this->render('kinesthesique/show.html.twig');
    }
}
