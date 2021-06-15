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
    public function show(Request $request, EntityManagerInterface $entityManager, InterpersonnelleUtils $interpersonnelleUtils, Utils $utils, UserRepository $userRepository, LevelOfDifficultyRepository $levelOfDifficultyRepository, InterpersonnelleRepository $interpersonnelleRepository, EmoticonRepository $emoticonRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'interpersonnelle') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        $tableauOfDifficulty = ['reponseFacile', 'reponseMoyen', 'reponseDifficile'];
        foreach ($tableauOfDifficulty as $index => $difficulty) {
            if ($request->get($difficulty)) {
                if ($index === 0) {
                    $user->setScoreInterpersonnelle(0);
                    $entityManager->flush();
                }

                $interpersonnelleUtils->recordScore($request, $request->get($difficulty), $interpersonnelleRepository, $user, $entityManager);

                if ($index === 0 || $index === 1) {
                    $enigmeRandom = $utils->nextEnigme($index + 2, $interpersonnelleRepository, $levelOfDifficultyRepository);
                    $nomInput = $tableauOfDifficulty[$index + 1];
                    $tableauChoixEmoticon = $emoticonRepository->findAll();
                    return new JsonResponse([
                        'content' => $this->renderView('interpersonnelle/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'tableauChoixEmoticon'))
                    ]);
                }
                else {
                    $user->setInterpersonnelleFinished(true);
                    $entityManager->flush();

                    return new JsonResponse([
                        'content' => $this->renderView('interpersonnelle/content/endScreen.html.twig')
                    ]);
                }
            }
        }
        if ($request->get('ajax')) {
            return new JsonResponse([
                'content' => 'error'
            ]);
        }

        $enigmeRandom = $utils->nextEnigme(1, $interpersonnelleRepository, $levelOfDifficultyRepository);
        $nomInput = 'reponseFacile';
        $tableauChoixEmoticon = $emoticonRepository->findAll();

        return $this->render('interpersonnelle/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput,
            'tableauChoixEmoticon' => $tableauChoixEmoticon
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

        if ($interpersonnelleForm->isSubmitted() && $interpersonnelleForm->isValid()) {
            $entityManager->persist($interpersonnelle);
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été enregistré');
            return $this->redirectToRoute('admin_interpersonnelle');
        }

        $emoticon = new Emoticon();
        $emoticonForm = $this->createForm(EmoticonFormType::class, $emoticon);
        $emoticonForm = $emoticonForm->handleRequest($request);

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
            'tableauEmoticon' => $emoticonRepository->findAll(),
        ]);
    }

    /**
     * @Route("admin/interpersonnelle/{id}/update", name="interpersonnelle_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, Utils $utils, EntityManagerInterface $entityManager, InterpersonnelleRepository $interpersonnelleRepository, EmoticonRepository $emoticonRepository): Response
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
            return $this->redirectToRoute('admin_interpersonnelle');
        }

        $emoticon = new Emoticon();
        $emoticonForm = $this->createForm(EmoticonFormType::class, $emoticon);
        $emoticonForm = $emoticonForm->handleRequest($request);

        if ($emoticonForm->isSubmitted() && $emoticonForm->isValid()) {
            $directoryImage = $this->getParameter('image_emoticon_directory');
            $emoticon->setUrlImage($utils->saveImageAndGenerateUrl($emoticonForm, 'image', $directoryImage));

            $entityManager->persist($emoticon);
            $entityManager->flush();

            $this->addFlash('success', 'L\'émoticône a bien été enregistré');
            return $this->redirectToRoute('interpersonnelle_update', ['id' => $id]);
        }

        return $this->render('interpersonnelle/update.html.twig', [
            'interpersonnelleForm' => $interpersonnelleForm->createView(),
            'emoticonForm' => $emoticonForm->createView(),
            'interpersonnelle' => $interpersonnelle,
            'tableauEmoticon' => $emoticonRepository->findAll(),
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
            return $this->redirectToRoute('admin_interpersonnelle');
        }

        $entityManager->remove($interpersonnelle);
        $entityManager->flush();

        $this->addFlash('success', 'L\'énigme a bien été supprimée');
        return $this->redirectToRoute('admin_interpersonnelle');
    }

    /**
     * @Route("admin/emoticon/{id}/delete", name="emoticon_delete", requirements={"id"="\d+"})
     */
    public function deleteEmoticon(int $id, EntityManagerInterface $entityManager, InterpersonnelleRepository $interpersonnelleRepository, EmoticonRepository $emoticonRepository): Response
    {
        $emoticon = $emoticonRepository->find($id);
        if (!$emoticon) {
            $this->addFlash('error', 'L\'émoticone recherché n\'existe pas');
            return $this->redirectToRoute('admin_interpersonnelle');
        }

        if ($interpersonnelleRepository->findOneBy(['solution' => $emoticon])) {
            $this->addFlash('error', 'L\'émoticone que vous cherchez à supprimer est rattaché à une énigme');
            return $this->redirectToRoute('admin_interpersonnelle');
        }

        $entityManager->remove($emoticon);
        $entityManager->flush();

        $this->addFlash('success', 'L\'émoticone a bien été supprimée');
        return $this->redirectToRoute('admin_interpersonnelle');
    }
}
