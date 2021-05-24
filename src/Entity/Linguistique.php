<?php

namespace App\Entity;

use App\Repository\LinguistiqueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LinguistiqueRepository::class)
 */
class Linguistique
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
    private $text;

    /**
     * @ORM\ManyToMany(targetEntity=Picto::class, inversedBy="linguistiques")
     */
    private $solution;

    /**
     * @ORM\ManyToOne(targetEntity=LevelOfDifficulty::class, inversedBy="linguistiques")
     * @ORM\JoinColumn(nullable=false)
     */
    private $levelOfDifficulty;

    public function __construct()
    {
        $this->solution = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    /**
     * @return Collection|Picto[]
     */
    public function getSolution(): Collection
    {
        return $this->solution;
    }

    public function addSolution(Picto $solution): self
    {
        if (!$this->solution->contains($solution)) {
            $this->solution[] = $solution;
        }

        return $this;
    }

    public function removeSolution(Picto $solution): self
    {
        $this->solution->removeElement($solution);

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
