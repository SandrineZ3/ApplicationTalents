<?php

namespace App\Controller;

use App\Entity\Linguistique;
use App\Entity\Picto;
use App\Form\LinguistiqueFormType;
use App\Repository\LevelOfDifficultyRepository;
use App\Repository\LinguistiqueRepository;
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

//    TODO: implémenter les méthodes CREATE/UPDATE/DELETE

    /**
     * @Route("admin/linguistique/create", name="linguistique_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager, Utils $utils): Response
    {
        $linguistique = new Linguistique();
        $linguistiqueForm = $this->createForm(linguistiqueFormType::class, $linguistique);
        $linguistiqueForm = $linguistiqueForm->handleRequest($request);

        if ($linguistiqueForm->isSubmitted() && $linguistiqueForm->isValid()) {
            $entityManager->persist($linguistique);
            $entityManager->flush();
//        $linguistique = new Linguistique();
//        $picto = new Picto();
//        $linguistiqueForm = $this->createForm(LinguistiqueFormType::class, $linguistique);
//        $linguistiqueForm = $linguistiqueForm->handleRequest($request);
//
//        if ($linguistiqueForm->isSubmitted() && $linguistiqueForm->isValid()) {
//            // On récupère les images transmises
//            $images = $linguistiqueForm->get('images')->getData();
//            // On boucle sur les images
//            foreach ($images as $image) {
//                // On génère un nouveau nom de fichier
//                $fichier = md5(uniqid()) . '.' . $image->guessExtension();
//                // On copie le fichier dans le dossier uploads
//                $image->move(
//                    $directoryImage = $this->getParameter('image_linguistique_directory'),
//                    $fichier
//                );
//                // On crée l'image dans la base de données
//                $picto->setUrlImage($utils->saveImageAndGenerateUrl($linguistiqueForm, 'picto', $directoryImage));
//            }
//            $entityManager->persist($picto);
//            $entityManager->flush();

            $this->addFlash('success', 'L\'énigme a bien été enregistrée');
            return $this->redirectToRoute('linguistique_create');
        }

        return $this->render('linguistique/create.html.twig', [
            'linguistiqueForm' => $linguistiqueForm->createView(),
        ]);
    }
}
