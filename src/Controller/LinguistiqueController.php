<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LinguistiqueController extends AbstractController
{
    /**
     * @Route("/linguistique", name="linguistique")
     */
    public function linguistique(): Response
    {
        return $this->render('linguistique/linguistique.html.twig', [

        ]);
    }
}
