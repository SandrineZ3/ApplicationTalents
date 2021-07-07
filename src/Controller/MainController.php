<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\Utils;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
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
     * @Route("/intro", name="intro")
     */
    public function intro(EntityManagerInterface $entityManager, Utils $utils, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());
        $user->setDateStart(new DateTime());
        $entityManager->flush();

        return $this->render('main/intro.html.twig');
    }

    /**
     * @Route("/result", name="result")
     */
    public function result(UserRepository $userRepository, Utils $utils, Request $request): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'result') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        if ($request->get('ajax')) {
            $dataImage = explode(',', $request->getContent());
            $brainImageURL = 'brainResultsArchives/'.md5(uniqid()) . '.png';
            file_put_contents($brainImageURL, base64_decode($dataImage[1]));
            return new JsonResponse([
                'content' => '<img src="' . $brainImageURL . '" alt="image résultats" width="100%">',
                'baliseMetaReseauxSociaux' => 'http://www.rdvnomade.fr/'.$brainImageURL,
            ]);
        }

        return $this->render('main/result.html.twig', [
            'user' => $user
        ]);


    }


}
