<?php

namespace App\Controller;

use App\Entity\Linguistique;
use App\Entity\Picto;
use App\Form\LinguistiqueFormType;
use App\Form\PictoFormType;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\LinguistiqueRepository;
use App\Repository\PictoRepository;
use App\Repository\UserRepository;
use App\Services\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LinguistiqueController extends AbstractController
{
    /**
     * @Route("/linguistique", name="linguistique")
     */
    public function linguistique(LinguistiqueRepository $linguistiqueRepository,
                                 LevelOfDifficultyRepository $levelOfDifficultyRepository,
                                 Request $request,
                                 UserRepository $userRepository,
                                 EntityManagerInterface $entityManager): Response
    {
        $user = $userRepository->find($this->getUser());
        if ($user->getLinguistiqueFinished()) {
            return $this->redirectToRoute('main');
        }

        // 1 = NIVEAU FACILE
        $levelOfDifficulty = $levelOfDifficultyRepository->find(1);
        $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
        $indexRandom = array_rand($enigmes, 1);
        $enigmeRandom = $enigmes[$indexRandom];

        if ($request->get("reponseFacile")) {
            $user->setScoreLinguistique(0);
            $entityManager->flush();
            $reponse = $request->get("reponseFacile");
            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreLinguistique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreLinguistique($scoreCalcule);
                $entityManager->flush();
            }

            // 2 = NIVEAU MOYEN
            $levelOfDifficulty = $levelOfDifficultyRepository->find(2);
            $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseMoyen";
            // Réponse requete AJAX
            $finished = false;
            return new JsonResponse([
                'content' => $this->renderView('linguistique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'finished'))
            ]);
        }

        if ($request->get("reponseMoyen")) {
            $reponse = $request->get("reponseMoyen");
            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreLinguistique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreLinguistique($scoreCalcule);
                $entityManager->flush();
            }

            // 3 = NIVEAU DIFFICILE
            $levelOfDifficulty = $levelOfDifficultyRepository->find(3);
            $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
            $indexRandom = array_rand($enigmes, 1);
            $enigmeRandom = $enigmes[$indexRandom];
            $nomInput = "reponseDifficile";
            // Réponse AJAX
            $finished = false;
            return new JsonResponse([
                'content' => $this->renderView('linguistique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'finished'))
            ]);
        }

        if ($request->get("reponseDifficile")) {
            $reponse = $request->get("reponseDifficile");
            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));

            if ($reponse == $enigme->getSolution()) {
                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
                $user = $userRepository->find($this->getUser());
                $scoreTemp = $user->getScoreLinguistique();
                $scoreCalcule = $scoreTemp + $pointGagnes;
                $user->setScoreLinguistique($scoreCalcule);
                $entityManager->flush();
            }

            // Statut terminé
            $user->setLinguistiqueFinished(true);
            $entityManager->flush();

            // Réponse AJAX
            return new JsonResponse([
                'content' => $this->renderView('linguistique/content/endScreen.html.twig')
            ]);
        }

        return $this->render('linguistique/show.html.twig', [
            "enigmeRandom" => $enigmeRandom
        ]);
    }

    /**
     * @Route("admin/linguistique/create", name="linguistique_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager, Utils $utils, PictoRepository $pictoRepository): Response
    {
        $linguistique = new Linguistique();
        $linguistiqueForm = $this->createForm(linguistiqueFormType::class, $linguistique);
        $linguistiqueForm = $linguistiqueForm->handleRequest($request);

        $picto = new Picto();
        $pictoForm = $this->createForm(PictoFormType::class, $picto);
        $pictoForm = $pictoForm->handleRequest($request);

        if ($linguistiqueForm->isSubmitted() && $linguistiqueForm->isValid()) {
            $entityManager->persist($linguistique);
            $entityManager->flush();
            $this->addFlash('success', 'L\'énigme a bien été enregistrée');
            return $this->redirectToRoute('linguistique_create');
        }

        if ($pictoForm->isSubmitted() && $pictoForm->isValid()) {
            $directoryImage = $this->getParameter('image_linguistique_directory');
            $picto->setUrlImage($utils->saveImageAndGenerateUrl($pictoForm, 'image', $directoryImage));

            $entityManager->persist($picto);
            $entityManager->flush();

            $this->addFlash('success', 'Le pictogramme a bien été enregistré');
            return $this->redirectToRoute('linguistique_create');
        }

        return $this->render('linguistique/create.html.twig', [
            'linguistiqueForm' => $linguistiqueForm->createView(),
            'pictoForm' => $pictoForm->createView(),
        ]);
    }

    /**
     * @Route("admin/linguistique/{id}/update", name="linguistique_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, Utils $utils, EntityManagerInterface $entityManager, LinguistiqueRepository $linguistiqueRepository): Response
    {
        $linguistique = $linguistiqueRepository->find($id);
        if (!$linguistique) {
            $this->addFlash('error', 'L\'enigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $linguistiqueForm = $this->createForm(LinguistiqueFormType::class, $linguistique);
        $linguistiqueForm = $linguistiqueForm->handleRequest($request);

        if ($linguistiqueForm->isSubmitted() && $linguistiqueForm->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été mise à jour');
            return $this->redirectToRoute('linguistique_update', ["id" => $id]);
        }

        $picto = new Picto();
        $pictoForm = $this->createForm(PictoFormType::class, $picto);
        $pictoForm = $pictoForm->handleRequest($request);

        if ($pictoForm->isSubmitted() && $pictoForm->isValid()) {
            $directoryImage = $this->getParameter('image_linguistique_directory');
            $picto->setUrlImage($utils->saveImageAndGenerateUrl($pictoForm, 'image', $directoryImage));

            $entityManager->persist($picto);
            $entityManager->flush();

            $this->addFlash('success', 'Le pictogramme a bien été enregistré');
            return $this->redirectToRoute('linguistique_update');
        }

        return $this->render('linguistique/update.html.twig', [
            'linguistiqueForm' => $linguistiqueForm->createView(),
            'pictoForm' => $pictoForm->createView(),
            'linguistique' => $linguistique,
        ]);
    }

    /**
     * @Route("admin/linguistique/{id}/delete", name="linguistique_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, LinguistiqueRepository $linguistiqueRepository): Response
    {
        $linguistique = $linguistiqueRepository->find($id);
        if (!$linguistique) {
            $this->addFlash('error', 'L\'énigme recherchée n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $entityManager->remove($linguistique);
        $entityManager->flush();

        $this->addFlash('success', 'L\'énigme a bien été supprimée');
        return $this->redirectToRoute('main');
    }
}
