<?php

namespace App\Entity;

use App\Repository\InterpersonnelleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=InterpersonnelleRepository::class)
 */
class Interpersonnelle
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
    private $urlVideo;

    /**
     * @ORM\ManyToOne(targetEntity=Emoticon::class, inversedBy="interpersonnelles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $solution;

    /**
     * @ORM\ManyToOne(targetEntity=LevelOfDifficulty::class, inversedBy="interpersonnelles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $levelOfDifficulty;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrlVideo(): ?string
    {
        return $this->urlVideo;
    }

    public function setUrlVideo(string $urlVideo): self
    {
        $this->urlVideo = $urlVideo;

        return $this;
    }

    public function getSolution(): ?Emoticon
    {
        return $this->solution;
    }

    public function setSolution(?Emoticon $solution): self
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
