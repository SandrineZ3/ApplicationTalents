<?php

namespace App\Controller;

use App\Entity\Musicale;
use App\Form\MusicaleFormType;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\MusicaleRepository;
use App\Repository\UserRepository;
use App\Services\MusicaleUtils;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MusicaleController extends AbstractController
{
    /**
     * @Route("/musicale/intro", name="musicale_intro")
     */
    public function intro(Utils $utils, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'musicale_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }

        return $this->render('musicale/intro.html.twig');
    }

    /**
     * @Route("/musicale", name="musicale")
     */
    public function show(Request $request, EntityManagerInterface $entityManager, MusicaleUtils $musicaleUtils, Utils $utils, UserRepository $userRepository, LevelOfDifficultyRepository $levelOfDifficultyRepository, MusicaleRepository $musicaleRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'musicale_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        $tableauOfDifficulty = ['reponseFacile', 'reponseMoyen', 'reponseDifficile'];
        foreach ($tableauOfDifficulty as $index => $difficulty) {
            if ($request->get($difficulty)) {
                if ($index === 0) {
                    $user->setScoreMusicale(0);
                    $entityManager->flush();
                }

                $musicaleUtils->recordScore($request, $request->get($difficulty), $musicaleRepository, $user, $entityManager);

                if ($index === 0 || $index === 1) {
                    $enigmeRandom = $utils->nextEnigme($index + 2, $musicaleRepository, $levelOfDifficultyRepository);
                    $nomInput = $tableauOfDifficulty[$index + 1];
                    return new JsonResponse([
                        'content' => $this->renderView('musicale/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput'))
                    ]);
                }
                else {
                    $user->setMusicaleFinished(true);
                    $entityManager->flush();

                    return new JsonResponse([
                        'content' => $this->renderView('musicale/content/endScreen.html.twig')
                    ]);
                }
            }
        }
        $enigmeRandom = $utils->nextEnigme(1, $musicaleRepository, $levelOfDifficultyRepository);
        $nomInput = 'reponseFacile';

        return $this->render('musicale/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput,
        ]);
    }

    /**
     * @Route("admin/musicale/create", name="musicale_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $musicale = new Musicale();
        $musicaleForm = $this->createForm(MusicaleFormType::class, $musicale);
        $musicaleForm = $musicaleForm->handleRequest($request);

        if ($musicaleForm->isSubmitted() && $musicaleForm->isValid()) {
            $entityManager->persist($musicale);
            $entityManager->flush();

            $this->addFlash('success', 'L\'??nigme a bien ??t?? enregistr??e');
            return $this->redirectToRoute('admin_musicale');
        }

        return $this->render('musicale/create.html.twig', [
            'musicaleForm' => $musicaleForm->createView(),
            'musicale' => $musicale,
        ]);
    }

    /**
     * @Route("admin/musicale/{id}/update", name="musicale_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, EntityManagerInterface $entityManager, MusicaleRepository $musicaleRepository): Response
    {
        $musicale = $musicaleRepository->find($id);
        if (!$musicale) {
            $this->addFlash('error', 'L\'enigme recherch??e n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $musicaleForm = $this->createForm(MusicaleFormType::class, $musicale);
        $musicaleForm = $musicaleForm->handleRequest($request);

        if ($musicaleForm->isSubmitted() && $musicaleForm->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'L\'??nigme a bien ??t?? mise ?? jour');
            return $this->redirectToRoute('admin_musicale');
        }

        return $this->render('musicale/update.html.twig', [
            'musicaleForm' => $musicaleForm->createView(),
            'musicale' => $musicale,
        ]);
    }

    /**
     * @Route("admin/musicale/{id}/delete", name="musicale_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, MusicaleRepository $musicaleRepository): Response
    {
        $musicale = $musicaleRepository->find($id);
        if (!$musicale) {
            $this->addFlash('error', 'L\'enigme recherch??e n\'existe pas');
            return $this->redirectToRoute('admin_musicale');
        }

        $entityManager->remove($musicale);
        $entityManager->flush();

        $this->addFlash('success', 'L\'??nigme a bien ??t?? supprim??e');
        return $this->redirectToRoute('admin_musicale');
    }
}
