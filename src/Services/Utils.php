<?php

namespace App\Services;

use App\Repository\LevelOfDifficultyRepository;
use App\Repository\UserRepository;
use Symfony\Component\Security\Core\User\UserInterface;

class Utils
{
    public function progressCheck(UserInterface $appUser, UserRepository $userRepository): string
    {
        $user = $userRepository->find($appUser);
        $tableauOrdreJeux = [
            ['interpersonnelle', $user->getInterpersonnelleFinished()],
            ['naturaliste', $user->getNaturalisteFinished()],
            ['kinesthesique', $user->getKinesthesiqueFinished()],
            ['musicale', $user->getMusicaleFinished()],
            ['visuoSpatiale', $user->getVisuoSpatialeFinished()],
            ['mathematique', $user->getMathematiqueFinished()],
            ['linguistique', $user->getLinguistiqueFinished()],
            ['intrapersonnelle', $user->getIntrapersonnelleFinished()],
        ];
        $i = 0;
        while ($i < count($tableauOrdreJeux)) {
            if (!$tableauOrdreJeux[$i][1]) {
                return $tableauOrdreJeux[$i][0];
            }
            $i++;
        }
        return 'result';
    }

    public function nextEnigme(int $levelOfDifficultySuivant, $repository, LevelOfDifficultyRepository $levelOfDifficultyRepository)
    {
        $levelOfDifficulty = $levelOfDifficultyRepository->find($levelOfDifficultySuivant);
        $tableauEnigme = $repository->findBy(array('levelOfDifficulty' => $levelOfDifficulty), array('id' => 'ASC'), null, 0);
        $indexRandom = array_rand($tableauEnigme);
        return $tableauEnigme[$indexRandom];
    }

    public function saveImageAndGenerateUrl($form, string $name, string $directory): string {
        $image = $form->get($name)->getData();
        $urlImage = md5(uniqid()) . '.' . $image->guessExtension();
        $image->move($directory, $urlImage);
        return $urlImage;
    }
}
