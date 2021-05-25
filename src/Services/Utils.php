<?php

namespace App\Services;

class Utils
{
    public function saveImageAndGenerateUrl($naturalisteForm, string $name, string $directory): string {
        $image = $naturalisteForm->get($name)->getData();
        $urlImage = md5(uniqid()) . '.' . $image->guessExtension();
        $image->move($directory, $urlImage);
        return $urlImage;
    }
}
