<?php

namespace App\Entity;

use App\Repository\EmoticonRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EmoticonRepository::class)
 */
class Emoticon
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
     * @ORM\OneToMany(targetEntity=Interpersonnelle::class, mappedBy="solution")
     */
    private $interpersonnelles;

    public function __construct()
    {
        $this->interpersonnelles = new ArrayCollection();
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
     * @return Collection|Interpersonnelle[]
     */
    public function getInterpersonnelles(): Collection
    {
        return $this->interpersonnelles;
    }

    public function addInterpersonnelle(Interpersonnelle $interpersonnelle): self
    {
        if (!$this->interpersonnelles->contains($interpersonnelle)) {
            $this->interpersonnelles[] = $interpersonnelle;
            $interpersonnelle->setSolution($this);
        }

        return $this;
    }

    public function removeInterpersonnelle(Interpersonnelle $interpersonnelle): self
    {
        if ($this->interpersonnelles->removeElement($interpersonnelle)) {
            // set the owning side to null (unless already changed)
            if ($interpersonnelle->getSolution() === $this) {
                $interpersonnelle->setSolution(null);
            }
        }

        return $this;
    }
}
