<?php

namespace App\Entity;

use App\Repository\MathematiqueRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MathematiqueRepository::class)
 */
class Mathematique
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $urlImage;

    /**
     * @ORM\Column(type="integer")
     */
    private $solution;

    /**
     * @ORM\ManyToOne(targetEntity=LevelOfDifficulty::class, inversedBy="mathematiques")
     * @ORM\JoinColumn(nullable=false)
     */
    private $levelOfDifficulty;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrlImage(): ?string
    {
        return $this->urlImage;
    }

    public function setUrlImage(string $urlImage): self
    {
        $this->urlImage = $urlImage;

        return $this;
    }

    public function getSolution(): ?int
    {
        return $this->solution;
    }

    public function setSolution(int $solution): self
    {
        $this->solution = $solution;

        return $this;
    }

    public function getLevelOfDifficulty(): ?LevelOfDifficulty
    {
        return $this->levelOfDifficulty;
    }

    public function setLevelOfDifficulty(?LevelOfDifficulty $levelOfDifficulty): self
    {
        $this->levelOfDifficulty = $levelOfDifficulty;

        return $this;
    }
}
