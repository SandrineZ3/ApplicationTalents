<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MathematiqueController extends AbstractController
{
    /**
     * @Route("/mathematique", name="mathematique_enigme")
     */
    public function enigme(): Response
    {
        return $this->render('mathematique/enigme.html.twig', [

        ]);
    }
}
