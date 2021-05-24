<?php

namespace App\Entity;

use App\Repository\VisuoSpatialeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=VisuoSpatialeRepository::class)
 */
class VisuoSpatiale
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
     * @ORM\Column(type="string", length=1)
     */
    private $solution;

    /**
     * @ORM\ManyToOne(targetEntity=LevelOfDifficulty::class, inversedBy="visuoSpatiales")
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

    public function getSolution(): ?string
    {
        return $this->solution;
    }

    public function setSolution(string $solution): self
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
