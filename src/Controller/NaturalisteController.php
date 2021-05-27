<?php

namespace App\Controller;

use App\Entity\Naturaliste;
use App\Form\NaturalisteFormType;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\NaturalisteRepository;
use App\Repository\UserRepository;
use App\Services\NaturalisteUtils;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NaturalisteController extends AbstractController
{
    /**
     * @Route("/naturaliste", name="naturaliste")
     */
    public function show(Request $request, EntityManagerInterface $entityManager, NaturalisteUtils $naturalisteUtils, Utils $utils, UserRepository $userRepository, LevelOfDifficultyRepository $levelOfDifficultyRepository, NaturalisteRepository $naturalisteRepository): Response
    {
        $user = $userRepository->find($this->getUser());
        if ($user->getNaturalisteFinished()) {
            return $this->redirectToRoute('main');
        }

        $tableauReponse = ['reponseFacile', 'reponseMoyen', 'reponseDifficile'];
        foreach ($tableauReponse as $index => $reponseUser) {
            if ($request->get($reponseUser)) {
                if ($index === 0) {
                    $user->setScoreNaturaliste(0);
                    $entityManager->flush();
                }

                $naturalisteUtils->recordScore($request, $reponseUser, $naturalisteRepository, $user, $entityManager);

                if ($index === 0 || $index === 1) {
                    $enigmeRandom = $utils->nextEnigme($index + 2, $naturalisteRepository, $levelOfDifficultyRepository);
                    $nomInput = $tableauReponse[$index + 1];
                    return new JsonResponse([
                        'content' => $this->renderView('naturaliste/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput'))
                    ]);
                }
                else {
                    return new JsonResponse([
                        'content' => $this->renderView('naturaliste/content/endScreen.html.twig')
                    ]);
                }
            }
        }
        $enigmeRandom = $utils->nextEnigme(1, $naturalisteRepository, $levelOfDifficultyRepository);
        $nomInput = 'reponseFacile';

        return $this->render('naturaliste/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput
        ]);
    }

    /**
     * @Route("admin/naturaliste/create", name="naturaliste_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager, Utils $utils): Response
    {
        $naturaliste = new Naturaliste();
        $naturalisteForm = $this->createForm(NaturalisteFormType::class, $naturaliste);
        $naturalisteForm = $naturalisteForm->handleRequest($request);

        if ($naturalisteForm->isSubmitted() && $naturalisteForm->isValid()) {
            $directoryImage = $this->getParameter('image_naturaliste_directory');
            $naturaliste->setUrlImage1($utils->saveImageAndGenerateUrl($naturalisteForm, 'image1', $directoryImage));
            $naturaliste->setUrlImage2($utils->saveImageAndGenerateUrl($naturalisteForm, 'image2', $directoryImage));
            $naturaliste->setUrlImage3($utils->saveImageAndGenerateUrl($naturalisteForm, 'image3', $directoryImage));
            $naturaliste->setUrlImage4($utils->saveImageAndGenerateUrl($naturalisteForm, 'image4', $directoryImage));

            $entityManager->persist($naturaliste);
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été enregistré');
            return $this->redirectToRoute('admin_naturaliste');
        }

        return $this->render('naturaliste/create.html.twig', [
            'naturalisteForm' => $naturalisteForm->createView(),
        ]);
    }

    /**
     * @Route("admin/naturaliste/{id}/update", name="naturaliste_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, EntityManagerInterface $entityManager, Utils $utils, NaturalisteRepository $naturalisteRepository): Response
    {
        $naturaliste = $naturalisteRepository->find($id);
        if (!$naturaliste) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $naturalisteForm = $this->createForm(NaturalisteFormType::class, $naturaliste, ['update' => true]);
        $naturalisteForm = $naturalisteForm->handleRequest($request);

        if ($naturalisteForm->isSubmitted() && $naturalisteForm->isValid()) {
            $directoryImage = $this->getParameter('image_naturaliste_directory');

            if ($naturalisteForm->get('image1')->getData()) {
                unlink($directoryImage . '/' . $naturaliste->getUrlImage1());
                $naturaliste->setUrlImage1($utils->saveImageAndGenerateUrl($naturalisteForm, 'image1', $directoryImage));
            }
            if ($naturalisteForm->get('image2')->getData()) {
                unlink($directoryImage . '/' . $naturaliste->getUrlImage2());
                $naturaliste->setUrlImage2($utils->saveImageAndGenerateUrl($naturalisteForm, 'image2', $directoryImage));
            }
            if ($naturalisteForm->get('image3')->getData()) {
                unlink($directoryImage . '/' . $naturaliste->getUrlImage3());
                $naturaliste->setUrlImage3($utils->saveImageAndGenerateUrl($naturalisteForm, 'image3', $directoryImage));
            }
            if ($naturalisteForm->get('image4')->getData()) {
                unlink($directoryImage . '/' . $naturaliste->getUrlImage4());
                $naturaliste->setUrlImage4($utils->saveImageAndGenerateUrl($naturalisteForm, 'image4', $directoryImage));
            }

            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été mise à jour');
            return $this->redirectToRoute('admin_naturaliste');
        }

        return $this->render('naturaliste/update.html.twig', [
            'naturalisteForm' => $naturalisteForm->createView(),
        ]);
    }

    /**
     * @Route("admin/naturaliste/{id}/delete", name="naturaliste_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, NaturalisteRepository $naturalisteRepository): Response
    {
        $naturaliste = $naturalisteRepository->find($id);
        if (!$naturaliste) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $directoryImage = $this->getParameter('image_naturaliste_directory');
        unlink($directoryImage . '/' . $naturaliste->getUrlImage1());
        unlink($directoryImage . '/' . $naturaliste->getUrlImage2());
        unlink($directoryImage . '/' . $naturaliste->getUrlImage3());
        unlink($directoryImage . '/' . $naturaliste->getUrlImage4());

        $entityManager->remove($naturaliste);
        $entityManager->flush();

        $this->addFlash('success', 'L\'énigme a bien été supprimée');
        return $this->redirectToRoute('admin_naturaliste');
    }
}
