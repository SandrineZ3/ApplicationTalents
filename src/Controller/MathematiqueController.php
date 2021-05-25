<?php

namespace App\Controller;

use App\Entity\Mathematique;
use App\Form\MathematiqueFormType;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\MathematiqueRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MathematiqueController extends AbstractController
{
    /**
     * @Route("/mathematique", name="mathematique")
     */
    public function mathematique(MathematiqueRepository $mathematiqueRepository,
                                 LevelOfDifficultyRepository $levelOfDifficultyRepository,
                                 Request $request,
                                 UserRepository $userRepository,
                                 EntityManagerInterface $entityManager): Response
    {
        $user = $userRepository->find($this->getUser());
        if ($user->getMathematiqueFinished()) {
            return $this->redirectToRoute('main');
        }

        //Aller chercher les images en BDD et les filer à Twig pour affichage
        // 1 = NIVEAU FACILE
        $levelOfDifficulty = $levelOfDifficultyRepository->find(1);
        $enigmes = $mathematiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));

        // On récupère 1 énigme de maniere random dans tableau enigmes
        $indexRandom = array_rand($enigmes, 1);
        $enigmeRandom = $enigmes[$indexRandom];

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
            // On récupère une énigme de maniere random dans tableau enigmes
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseMoyen";

            // Réponse OBLIGATOIRE pour la requête AJAX qui contient un mini morceau de Twig
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
            // On récupère une énigme de maniere random dans tableau enigmes
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseDifficile";

            // Réponse OBLIGATOIRE pour la requête AJAX qui contient un mini morceau de Twig
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

            // On met les Maths en statut terminé
            $user->setMathematiqueFinished(true);
            $entityManager->flush();

            // Réponse OBLIGATOIRE pour la requête AJAX qui contient un mini morceau de Twig renvoyé
            return new JsonResponse([
                'content' => $this->renderView('mathematique/content/endScreen.html.twig')
            ]);
        }

        return $this->render('mathematique/show.html.twig', [
            "enigmeRandom" => $enigmeRandom
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

            $this->addFlash('success', 'L\'énigme a bien été enregistrée');
            return $this->redirectToRoute('mathematique_create');
        }

        return $this->render('mathematique/create.html.twig', [
            'mathematiqueForm' => $mathematiqueForm->createView(),
        ]);
    }

    /**
     * @Route("admin/mathematique/{id}/update", name="mathematique_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, EntityManagerInterface $entityManager, MathematiqueRepository $mathematiqueRepository): Response
    {
        $mathematique = $mathematiqueRepository->find($id);
        if (!$mathematique) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
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

            $this->addFlash('success', 'L\'énigme a bien été mise à jour');
            return $this->redirectToRoute('mathematique_update', ["id" => $id]);
        }

        return $this->render('mathematique/update.html.twig', [
            'mathematiqueForm' => $mathematiqueForm->createView(),
        ]);
    }

    /**
     * @Route("admin/mathematique/{id}/delete", name="mathematique_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, MathematiqueRepository $mathematiqueRepository): Response
    {
        $mathematique = $mathematiqueRepository->find($id);
        if (!$mathematique) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        unlink($this->getParameter('image_mathematique_directory') . '/' . $mathematique->getUrlImage());
        $entityManager->remove($mathematique);
        $entityManager->flush();

        $this->addFlash('success', 'L\'énigme a bien été supprimée');
        return $this->redirectToRoute('main');
    }
}

