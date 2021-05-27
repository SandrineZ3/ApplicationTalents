<?php

namespace App\Services;

use App\Repository\LevelOfDifficultyRepository;

class Utils
{
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
