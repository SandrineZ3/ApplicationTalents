<?php

namespace App\Controller;

use App\Entity\Mathematique;
use App\Form\MathematiqueFormType;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\MathematiqueRepository;
use App\Repository\UserRepository;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MathematiqueController extends AbstractController
{
    /**
     * @Route("/mathematique/intro", name="mathematique_intro")
     */
    public function intro(Utils $utils, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'mathematique_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }

        return $this->render('mathematique/intro.html.twig');
    }

    /**
     * @Route("/mathematique", name="mathematique")
     */
    public function mathematique(MathematiqueRepository $mathematiqueRepository,
                                 LevelOfDifficultyRepository $levelOfDifficultyRepository,
                                 Request $request,
                                 UserRepository $userRepository,
                                 EntityManagerInterface $entityManager,
                                 Utils $utils): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'mathematique_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        //Aller chercher les images en BDD et les filer ?? Twig pour affichage
        // 1 = NIVEAU FACILE
        $levelOfDifficulty = $levelOfDifficultyRepository->find(1);
        $enigmes = $mathematiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));

        // On r??cup??re 1 ??nigme de maniere random dans tableau enigmes
        $indexRandom = array_rand($enigmes, 1);
        $enigmeRandom = $enigmes[$indexRandom];
        $nomInput = "reponseFacile";

        if ($request->get("reponseFacile")) {
            $user->setScoreMathematique(0);
            $entityManager->flush();
            $reponse = $request->get("reponseFacile");
            $enigme = $mathematiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreMathematique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreMathematique($scoreCalcule);

                $entityManager->flush();
            }

            // 2 = NIVEAU MOYEN
            $levelOfDifficulty = $levelOfDifficultyRepository->find(2);
            $enigmes = $mathematiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
            // On r??cup??re une ??nigme de maniere random dans tableau enigmes
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseMoyen";

            // R??ponse OBLIGATOIRE pour la requ??te AJAX qui contient un mini morceau de Twig
            $finished = false;
            return new JsonResponse([
                'content' => $this->renderView('mathematique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'finished'))
            ]);
        }

        if ($request->get("reponseMoyen")) {
            $reponse = $request->get("reponseMoyen");
            $enigme = $mathematiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreMathematique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreMathematique($scoreCalcule);

                $entityManager->flush();
            }

            // 3 = NIVEAU DIFFICILE
            $levelOfDifficulty = $levelOfDifficultyRepository->find(3);
            $enigmes = $mathematiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
            // On r??cup??re une ??nigme de maniere random dans tableau enigmes
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseDifficile";

            // R??ponse OBLIGATOIRE pour la requ??te AJAX qui contient un mini morceau de Twig
            $finished = false;
            return new JsonResponse([
                'content' => $this->renderView('mathematique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'finished'))
            ]);
        }

        if ($request->get("reponseDifficile")) {
            $reponse = $request->get("reponseDifficile");
            $enigme = $mathematiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreMathematique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreMathematique($scoreCalcule);

                $entityManager->flush();
            }

            // On met les Maths en statut termin??
            $user->setMathematiqueFinished(true);
            $entityManager->flush();

            // R??ponse OBLIGATOIRE pour la requ??te AJAX qui contient un mini morceau de Twig renvoy??
            return new JsonResponse([
                'content' => $this->renderView('mathematique/content/endScreen.html.twig')
            ]);
        }

        return $this->render('mathematique/show.html.twig', [
            "enigmeRandom" => $enigmeRandom,
            "nomInput" => $nomInput
        ]);
    }

    /**
     * @Route("admin/mathematique/create", name="mathematique_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $mathematique = new Mathematique();
        $mathematiqueForm = $this->createForm(MathematiqueFormType::class, $mathematique);
        $mathematiqueForm = $mathematiqueForm->handleRequest($request);

        if ($mathematiqueForm->isSubmitted() && $mathematiqueForm->isValid()) {
            $image = $mathematiqueForm->get('image')->getData();
            $urlImage = md5(uniqid()) . '.' . $image->guessExtension();
            $image->move($this->getParameter('image_mathematique_directory'), $urlImage);
            $mathematique->setUrlImage($urlImage);

            $entityManager->persist($mathematique);
            $entityManager->flush();

            $this->addFlash('success', 'L\'??nigme a bien ??t?? enregistr??e');
            return $this->redirectToRoute('mathematique_create');
        }

        return $this->render('mathematique/create.html.twig', [
            'mathematiqueForm' => $mathematiqueForm->createView(),
            'mathematique' => $mathematique,
        ]);
    }

    /**
     * @Route("admin/mathematique/{id}/update", name="mathematique_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, EntityManagerInterface $entityManager, MathematiqueRepository $mathematiqueRepository): Response
    {

        $mathematique = $mathematiqueRepository->find($id);
        if (!$mathematique) {
            $this->addFlash('error', 'L\'enigme recherch??e n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $mathematiqueForm = $this->createForm(MathematiqueFormType::class, $mathematique, ['update' => true]);
        $mathematiqueForm = $mathematiqueForm->handleRequest($request);

        if ($mathematiqueForm->isSubmitted() && $mathematiqueForm->isValid()) {

            if ($mathematiqueForm->get('image')->getData()) {
                unlink($this->getParameter('image_mathematique_directory') . '/' . $mathematique->getUrlImage());
                $image = $mathematiqueForm->get('image')->getData();
                $urlImage = md5(uniqid()) . '.' . $image->guessExtension();
                $image->move($this->getParameter('image_mathematique_directory'), $urlImage);
                $mathematique->setUrlImage($urlImage);
            }

            $entityManager->flush();

            $this->addFlash('success', 'L\'??nigme a bien ??t?? mise ?? jour');
            return $this->redirectToRoute('mathematique_update', ["id" => $id]);
        }

        return $this->render('mathematique/update.html.twig', [
            'mathematiqueForm' => $mathematiqueForm->createView(),
            'mathematique' => $mathematique,
        ]);
    }

    /**
     * @Route("admin/mathematique/{id}/delete", name="mathematique_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, MathematiqueRepository $mathematiqueRepository): Response
    {
        $mathematique = $mathematiqueRepository->find($id);
        if (!$mathematique) {
            $this->addFlash('error', 'L\'enigme recherch??e n\'existe pas');
            return $this->redirectToRoute('main');
        }

        unlink($this->getParameter('image_mathematique_directory') . '/' . $mathematique->getUrlImage());
        $entityManager->remove($mathematique);
        $entityManager->flush();

        $this->addFlash('success', 'L\'??nigme a bien ??t?? supprim??e');
        return $this->redirectToRoute('main');
    }
}

