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
use App\Services\LinguistiqueUtils;
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
     * @Route("/linguistique/intro", name="linguistique_intro")
     */
    public function intro(Utils $utils, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'linguistique_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }

        return $this->render('linguistique/intro.html.twig');
    }

    /**
     * @Route("/linguistique", name="linguistique")
     */
    public function linguistique(LinguistiqueRepository $linguistiqueRepository,
                                 PictoRepository $pictoRepository,
                                 LevelOfDifficultyRepository $levelOfDifficultyRepository,
                                 Request $request,
                                 UserRepository $userRepository,
                                 EntityManagerInterface $entityManager,
                                 Utils $utils,
                                 LinguistiqueUtils $linguistiqueUtils): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('main');
        }
        if ($this->getUser()->getRoles() === ['ROLE_USER'] && $utils->progressCheck($this->getUser(), $userRepository) !== 'linguistique_intro') {
            return $this->redirectToRoute($utils->progressCheck($this->getUser(), $userRepository));
        }
        $user = $userRepository->find($this->getUser());

        $tableauOfDifficulty = ['reponseFacile', 'reponseMoyen', 'reponseDifficile'];
        foreach ($tableauOfDifficulty as $index => $difficulty) {
            if ($request->get($difficulty)) {
                if ($index === 0) {
                    $user->setScoreLinguistique(0);
                    $entityManager->flush();
                }

                $linguistiqueUtils->recordScore($request, $request->get($difficulty), $linguistiqueRepository, $user, $entityManager);

                if ($index === 0 || $index === 1) {
                    $enigmeRandom = $utils->nextEnigme($index + 2, $linguistiqueRepository, $levelOfDifficultyRepository);
                    $nomInput = $tableauOfDifficulty[$index + 1];
                    $allPictos = $pictoRepository->findAll();
                    return new JsonResponse([
                        'content' => $this->renderView('linguistique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'allPictos'))
                    ]);
                }
                else {
                    $user->setLinguistiqueFinished(true);
                    $entityManager->flush();

                    return new JsonResponse([
                        'content' => $this->renderView('linguistique/content/endScreen.html.twig')
                    ]);
                }
            }
        }
        if ($request->get('ajax')) {
            return new JsonResponse([
                'content' => 'error'
            ]);
        }

        $enigmeRandom = $utils->nextEnigme(1, $linguistiqueRepository, $levelOfDifficultyRepository);
        $nomInput = 'reponseFacile';
        $allPictos = $pictoRepository->findAll();

        return $this->render('linguistique/show.html.twig', [
            'enigmeRandom' => $enigmeRandom,
            'nomInput' => $nomInput,
            'allPictos' => $allPictos
        ]);

        // 1 = NIVEAU FACILE
//        $levelOfDifficulty = $levelOfDifficultyRepository->find(1);
//        $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
//        $indexRandom = array_rand($enigmes, 1);
//        $enigmeRandom = $enigmes[$indexRandom];
//        $nomInput = "reponseFacile";
//
//        if ($request->get("reponseFacile")) {
//            $user->setScoreLinguistique(0);
//            $entityManager->flush();
//            $reponse = $request->get("reponseFacile");
//            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));
//
//            $solution = $enigme->getSolution();
//            $tableauId = [];
//            foreach ($solution as $element) {
//                $tableauId[] = $element->getId();
//            }
//
////            if ($tableauId === $reponse) {
////                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
////                $user = $userRepository->find($this->getUser());
////                $scoreTemp = $user->getScoreLinguistique();
////                $scoreCalcule = $scoreTemp + $pointGagnes;
////                $user->setScoreLinguistique($scoreCalcule);
////
////                $entityManager->flush();
////            }
//
//            $linguistiqueUtils->recordScore();
//
//            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));
//            $testSolution = '';
//            foreach ($enigme->getSolution() as $element) {
//                $testSolution .= $element->getId() . '-';
//            }
//            $test = false;
//            if ($reponse === $testSolution) {
//                $test = true;
//            }
//
//            // 2 = NIVEAU MOYEN
//            $levelOfDifficulty = $levelOfDifficultyRepository->find(2);
//            $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
//            $indexRandom = array_rand($enigmes, 1);
//            $enigmeRandom = $enigmes[$indexRandom];
//            $nomInput = "reponseMoyen";
//            // Réponse requete AJAX
//            return new JsonResponse([
//                'content' => $test
//            ]);
//        }
//
//        if ($request->get("reponseMoyen")) {
//            $reponse = $request->get("reponseMoyen");
//            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));
//
//            if ($reponse == $enigme->getSolution()) {
//                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
//                $user = $userRepository->find($this->getUser());
//                $scoreTemp = $user->getScoreLinguistique();
//                $scoreCalcule = $scoreTemp + $pointGagnes;
//                $user->setScoreLinguistique($scoreCalcule);
//                $entityManager->flush();
//            }
//
//            // 3 = NIVEAU DIFFICILE
//            $levelOfDifficulty = $levelOfDifficultyRepository->find(3);
//            $enigmes = $linguistiqueRepository->findBy(array("levelOfDifficulty" => $levelOfDifficulty), array("id" => "ASC"));
//            $indexRandom = array_rand($enigmes, 1);
//            $enigmeRandom = $enigmes[$indexRandom];
//            $nomInput = "reponseDifficile";
//            // Réponse AJAX
//            return new JsonResponse([
//                'content' => $this->renderView('linguistique/content/formEnigme.html.twig', compact('enigmeRandom', 'nomInput', 'allPictos'))
//            ]);
//        }
//
//        if ($request->get("reponseDifficile")) {
//            $reponse = $request->get("reponseDifficile");
//            $enigme = $linguistiqueRepository->find($request->get("idEnigme"));
//
//            if ($reponse == $enigme->getSolution()) {
//                $pointGagnes = $enigme->getLevelOfDifficulty()->getPoints();
//                $user = $userRepository->find($this->getUser());
//                $scoreTemp = $user->getScoreLinguistique();
//                $scoreCalcule = $scoreTemp + $pointGagnes;
//                $user->setScoreLinguistique($scoreCalcule);
//                $entityManager->flush();
//            }
//
//            // Statut terminé
//            $user->setLinguistiqueFinished(true);
//            $entityManager->flush();
//
//            // Réponse AJAX
//            return new JsonResponse([
//                'content' => $this->renderView('linguistique/content/endScreen.html.twig')
//            ]);
//        }
//
//        return $this->render('linguistique/show.html.twig', [
//            "enigmeRandom" => $enigmeRandom,
//            "allPictos" => $allPictos,
//            "nomInput" => $nomInput,
//        ]);
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
            return $this->redirectToRoute('admin_linguistique');
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
            'allPictos' => $pictoRepository->findAll(),
        ]);
    }

    /**
     * @Route("admin/linguistique/{id}/update", name="linguistique_update", requirements={"id"="\d+"})
     */
    public function update(int $id, Request $request, Utils $utils, EntityManagerInterface $entityManager, LinguistiqueRepository $linguistiqueRepository, PictoRepository $pictoRepository): Response
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
            return $this->redirectToRoute('admin_linguistique', ["id" => $id]);
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
            return $this->redirectToRoute('linguistique_update', ['id' => $id]);
        }

        return $this->render('linguistique/update.html.twig', [
            'linguistiqueForm' => $linguistiqueForm->createView(),
            'pictoForm' => $pictoForm->createView(),
            'linguistique' => $linguistique,
            'allPictos' => $pictoRepository->findAll(),
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
        return $this->redirectToRoute('admin_linguistique');
    }

    /**
     * @Route("admin/picto/{id}/delete", name="picto_delete", requirements={"id"="\d+"})
     */
    public function deletePicto(int $id, EntityManagerInterface $entityManager, LinguistiqueRepository $linguistiqueRepository, PictoRepository $pictoRepository): Response
    {
        $picto = $pictoRepository->find($id);
        if (!$picto) {
            $this->addFlash('error', 'Le pictogramme recherché n\'existe pas');
            return $this->redirectToRoute('admin_linguistique');
        }

        if ($linguistiqueRepository->findByPicto($picto->getId())) {
            $this->addFlash('error', 'Le pictogramme que vous cherchez à supprimer est rattaché à une énigme');
            return $this->redirectToRoute('admin_linguistique');
        }

        $directoryImage = $this->getParameter('image_linguistique_directory');
        unlink($directoryImage . '/' . $picto->getUrlImage());
        $entityManager->remove($picto);
        $entityManager->flush();

        $this->addFlash('success', 'Le pictogramme a bien été supprimé');
        return $this->redirectToRoute('admin_linguistique');
    }
}
