<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\Utils;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
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
     * @Route("/result", name="result")
     */
    public function result(EntityManagerInterface $entityManager, UserRepository $userRepository, Utils $utils): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'result') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        $user->setDateEnd(new DateTime());
        $entityManager->flush();

        return $this->render('main/result.html.twig', [
            'user' => $user
        ]);
    }
}
