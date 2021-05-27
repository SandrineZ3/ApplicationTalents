<?php

namespace App\Controller;

use App\Entity\Emoticon;
use App\Entity\Interpersonnelle;
use App\Form\EmoticonFormType;
use App\Form\InterpersonnelleFormType;
use App\Repository\EmoticonRepository;
use App\Repository\InterpersonnelleRepository;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\UserRepository;
use App\Services\InterpersonnelleUtils;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InterpersonnelleController extends AbstractController
{
    /**
     * @Route("/interpersonnelle", name="interpersonnelle")
     */
    public function show(Request $request, EntityManagerInterface $entityManager, InterpersonnelleUtils $interpersonnelleUtils, Utils $utils, UserRepository $userRepository, LevelOfDifficultyRepository $levelOfDifficultyRepository, InterpersonnelleRepository $interpersonnelleRepository): Response
    {
        $user = $userRepository->find($this->getUser());
        if ($user->getInterpersonnelleFinished()) {
            return $this->redirectToRoute('main');
        }

        $tableauReponse = ['reponseFacile', 'reponseMoyen', 'reponseDifficile'];
        foreach ($tableauReponse as $index => $reponseUser) {
            if ($request->get($reponseUser)) {
                if ($index === 0) {
                    $user->setScoreInterpersonnelle(0);
                    $entityManager->flush();
                }

                $interpersonnelleUtils->recordScore($request, $reponseUser, $interpersonnelleRepository, $user, $entityManager);

                if ($index === 0 || $index === 1) {
                    $enigmeRandom = $utils->nextEnigme($index + 2, $interpersonnelleRepository, $levelOfDifficultyRepository);
                    $nomInput = $tableauReponse[$index + 1];
                    return new JsonResponse([
                        'content' => $this->renderView('interpersonnelle/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput'))
                    ]);
                }
                else {
                    return new JsonResponse([
                        'content' => $this->renderView('interpersonnelle/content/endScreen.html.twig')
                    ]);
                }
            }
        }
        $enigmeRandom = $utils->nextEnigme(1, $interpersonnelleRepository, $levelOfDifficultyRepository);
        $nomInput = 'reponseFacile';

        return $this->render('interpersonnelle/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput
        ]);
    }

    /**
     * @Route("admin/interpersonnelle/create", name="interpersonnelle_create")
     */
    public function create(Request $request, Utils $utils, EntityManagerInterface $entityManager, EmoticonRepository $emoticonRepository): Response
    {
        $interpersonnelle = new Interpersonnelle();
        $interpersonnelleForm = $this->createForm(InterpersonnelleFormType::class, $interpersonnelle);
        $interpersonnelleForm = $interpersonnelleForm->handleRequest($request);

        $emoticon = new Emoticon();
        $emoticonForm = $this->createForm(EmoticonFormType::class, $emoticon);
        $emoticonForm = $emoticonForm->handleRequest($request);

        if ($interpersonnelleForm->isSubmitted() && $interpersonnelleForm->isValid()) {
            $entityManager->persist($interpersonnelle);
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été enregistré');
            return $this->redirectToRoute('interpersonnelle_create');
        }

        if ($emoticonForm->isSubmitted() && $emoticonForm->isValid()) {
            $directoryImage = $this->getParameter('image_emoticon_directory');
            $emoticon->setUrlImage($utils->saveImageAndGenerateUrl($emoticonForm, 'image', $directoryImage));

            $entityManager->persist($emoticon);
            $entityManager->flush();

            $this->addFlash('success', 'L\'émoticône a bien été enregistré');
            return $this->redirectToRoute('interpersonnelle_create');
        }

        return $this->render('interpersonnelle/create.html.twig', [
            'interpersonnelleForm' => $interpersonnelleForm->createView(),
            'emoticonForm' => $emoticonForm->createView(),
        ]);
    }

    /**
     * @Route("admin/interpersonnelle/{id}/update", name="interpersonnelle_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, Utils $utils, EntityManagerInterface $entityManager, InterpersonnelleRepository $interpersonnelleRepository): Response
    {
        $interpersonnelle = $interpersonnelleRepository->find($id);
        if (!$interpersonnelle) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $interpersonnelleForm = $this->createForm(InterpersonnelleFormType::class, $interpersonnelle);
        $interpersonnelleForm = $interpersonnelleForm->handleRequest($request);

        if ($interpersonnelleForm->isSubmitted() && $interpersonnelleForm->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été mise à jour');
            return $this->redirectToRoute('interpersonnelle_update', ["id" => $id]);
        }

        $emoticon = new Emoticon();
        $emoticonForm = $this->createForm(EmoticonFormType::class, $emoticon);
        $emoticonForm = $emoticonForm->handleRequest($request);
        $tableauLabelEmoticon = ['enervé', 'surpris', 'enervé', 'surpris', 'enervé', 'surpris'];

        if ($emoticonForm->isSubmitted() && $emoticonForm->isValid()) {
            $directoryImage = $this->getParameter('image_emoticon_directory');
            $emoticon->setUrlImage($utils->saveImageAndGenerateUrl($emoticonForm, 'image', $directoryImage));

            $entityManager->persist($emoticon);
            $entityManager->flush();

            $this->addFlash('success', 'L\'émoticône a bien été enregistré');
            return $this->redirectToRoute('interpersonnelle_update');
        }

        return $this->render('interpersonnelle/update.html.twig', [
            'interpersonnelleForm' => $interpersonnelleForm->createView(),
            'emoticonForm' => $emoticonForm->createView(),
            'interpersonnelle' => $interpersonnelle,
            'tableauLabelEmoticon' => $tableauLabelEmoticon,
        ]);
    }

    /**
     * @Route("admin/interpersonnelle/{id}/delete", name="interpersonnelle_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, InterpersonnelleRepository $interpersonnelleRepository): Response
    {
        $interpersonnelle = $interpersonnelleRepository->find($id);
        if (!$interpersonnelle) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $entityManager->remove($interpersonnelle);
        $entityManager->flush();

        $this->addFlash('success', 'L\'énigme a bien été supprimée');
        return $this->redirectToRoute('main');
    }
}
