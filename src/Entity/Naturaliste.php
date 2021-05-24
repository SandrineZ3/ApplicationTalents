<?php

namespace App\Entity;

use App\Repository\NaturalisteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=NaturalisteRepository::class)
 */
class Naturaliste
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
    private $urlImage1;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $urlImage2;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $urlImage3;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $urlImage4;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $solution;

    /**
     * @ORM\ManyToOne(targetEntity=LevelOfDifficulty::class, inversedBy="naturalistes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $levelOfDifficulty;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrlImage1(): ?string
    {
        return $this->urlImage1;
    }

    public function setUrlImage1(string $urlImage1): self
    {
        $this->urlImage1 = $urlImage1;

        return $this;
    }

    public function getUrlImage2(): ?string
    {
        return $this->urlImage2;
    }

    public function setUrlImage2(string $urlImage2): self
    {
        $this->urlImage2 = $urlImage2;

        return $this;
    }

    public function getUrlImage3(): ?string
    {
        return $this->urlImage3;
    }

    public function setUrlImage3(string $urlImage3): self
    {
        $this->urlImage3 = $urlImage3;

        return $this;
    }

    public function getUrlImage4(): ?string
    {
        return $this->urlImage4;
    }

    public function setUrlImage4(string $urlImage4): self
    {
        $this->urlImage4 = $urlImage4;

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
