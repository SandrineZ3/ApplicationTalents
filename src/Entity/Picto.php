<?php

namespace App\Entity;

use App\Repository\PictoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PictoRepository::class)
 */
class Picto
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $label;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $urlImage;

    /**
     * @ORM\ManyToMany(targetEntity=Linguistique::class, mappedBy="solution")
     */
    private $linguistiques;

    public function __construct()
    {
        $this->linguistiques = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
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

    /**
     * @return Collection|Linguistique[]
     */
    public function getLinguistiques(): Collection
    {
        return $this->linguistiques;
    }

    public function addLinguistique(Linguistique $linguistique): self
    {
        if (!$this->linguistiques->contains($linguistique)) {
            $this->linguistiques[] = $linguistique;
            $linguistique->addSolution($this);
        }

        return $this;
    }

    public function removeLinguistique(Linguistique $linguistique): self
    {
        if ($this->linguistiques->removeElement($linguistique)) {
            $linguistique->removeSolution($this);
        }

        return $this;
    }
}
