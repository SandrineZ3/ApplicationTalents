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
            $uniqueNameImage = md5(uniqid());
            $brainImageURL = 'brainResultsArchives/'. $uniqueNameImage . '.png';
            file_put_contents($brainImageURL, base64_decode($dataImage[1]));
            return new JsonResponse([
                'uniqueNameImage' => $uniqueNameImage,
                'baliseMetaReseauxSociaux' => 'http://www.rdvnomade.fr/' . $brainImageURL,
            ]);
        }

        return $this->render('main/result.html.twig', [
            'user' => $user
        ]);
    }

    /**
     * @Route("/result/{nameImage}", name="resultLinkSocialNetworks")
     */
    public function resultLinkSocialNetworks(string $nameImage): Response
    {
//       Permet de partager l'image du résultat du visiteur sur les réseaux sociaux
        return $this->render('main/resultLinkSocialNetworks.html.twig', [
            'urlPage' => 'http://rdvnomade.fr/result/'.$nameImage,
            'urlImage' => 'http://rdvnomade.fr/brainResultsArchives/'.$nameImage.'.png'
        ]);
    }
}
