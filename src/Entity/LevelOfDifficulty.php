<?php

namespace App\Entity;

use App\Repository\LevelOfDifficultyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LevelOfDifficultyRepository::class)
 */
class LevelOfDifficulty
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
     * @ORM\Column(type="integer")
     */
    private $points;

    /**
     * @ORM\OneToMany(targetEntity=VisuoSpatiale::class, mappedBy="levelOfDifficulty")
     */
    private $visuoSpatiales;

    /**
     * @ORM\OneToMany(targetEntity=Naturaliste::class, mappedBy="levelOfDifficulty")
     */
    private $naturalistes;

    /**
     * @ORM\OneToMany(targetEntity=Mathematique::class, mappedBy="levelOfDifficulty")
     */
    private $mathematiques;

    /**
     * @ORM\OneToMany(targetEntity=Interpersonnelle::class, mappedBy="levelOfDifficulty")
     */
    private $interpersonnelles;

    /**
     * @ORM\OneToMany(targetEntity=Linguistique::class, mappedBy="levelOfDifficulty")
     */
    private $linguistiques;

    /**
     * @ORM\OneToMany(targetEntity=Musicale::class, mappedBy="levelOfDifficulty")
     */
    private $musicales;

    public function __construct()
    {
        $this->visuoSpatiales = new ArrayCollection();
        $this->naturalistes = new ArrayCollection();
        $this->mathematiques = new ArrayCollection();
        $this->interpersonnelles = new ArrayCollection();
        $this->linguistiques = new ArrayCollection();
        $this->musicales = new ArrayCollection();
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

    public function getPoints(): ?int
    {
        return $this->points;
    }

    public function setPoints(int $points): self
    {
        $this->points = $points;

        return $this;
    }

    /**
     * @return Collection|VisuoSpatiale[]
     */
    public function getVisuoSpatiales(): Collection
    {
        return $this->visuoSpatiales;
    }

    public function addVisuoSpatiale(VisuoSpatiale $visuoSpatiale): self
    {
        if (!$this->visuoSpatiales->contains($visuoSpatiale)) {
            $this->visuoSpatiales[] = $visuoSpatiale;
            $visuoSpatiale->setLevelOfDifficulty($this);
        }

        return $this;
    }

    public function removeVisuoSpatiale(VisuoSpatiale $visuoSpatiale): self
    {
        if ($this->visuoSpatiales->removeElement($visuoSpatiale)) {
            // set the owning side to null (unless already changed)
            if ($visuoSpatiale->getLevelOfDifficulty() === $this) {
                $visuoSpatiale->setLevelOfDifficulty(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Naturaliste[]
     */
    public function getNaturalistes(): Collection
    {
        return $this->naturalistes;
    }

    public function addNaturaliste(Naturaliste $naturaliste): self
    {
        if (!$this->naturalistes->contains($naturaliste)) {
            $this->naturalistes[] = $naturaliste;
            $naturaliste->setLevelOfDifficulty($this);
        }

        return $this;
    }

    public function removeNaturaliste(Naturaliste $naturaliste): self
    {
        if ($this->naturalistes->removeElement($naturaliste)) {
            // set the owning side to null (unless already changed)
            if ($naturaliste->getLevelOfDifficulty() === $this) {
                $naturaliste->setLevelOfDifficulty(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Mathematique[]
     */
    public function getMathematiques(): Collection
    {
        return $this->mathematiques;
    }

    public function addMathematique(Mathematique $mathematique): self
    {
        if (!$this->mathematiques->contains($mathematique)) {
            $this->mathematiques[] = $mathematique;
            $mathematique->setLevelOfDifficulty($this);
        }

        return $this;
    }

    public function removeMathematique(Mathematique $mathematique): self
    {
        if ($this->mathematiques->removeElement($mathematique)) {
            // set the owning side to null (unless already changed)
            if ($mathematique->getLevelOfDifficulty() === $this) {
                $mathematique->setLevelOfDifficulty(null);
            }
        }

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
            $interpersonnelle->setLevelOfDifficulty($this);
        }

        return $this;
    }

    public function removeInterpersonnelle(Interpersonnelle $interpersonnelle): self
    {
        if ($this->interpersonnelles->removeElement($interpersonnelle)) {
            // set the owning side to null (unless already changed)
            if ($interpersonnelle->getLevelOfDifficulty() === $this) {
                $interpersonnelle->setLevelOfDifficulty(null);
            }
        }

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
            $linguistique->setLevelOfDifficulty($this);
        }

        return $this;
    }

    public function removeLinguistique(Linguistique $linguistique): self
    {
        if ($this->linguistiques->removeElement($linguistique)) {
            // set the owning side to null (unless already changed)
            if ($linguistique->getLevelOfDifficulty() === $this) {
                $linguistique->setLevelOfDifficulty(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Musicale[]
     */
    public function getMusicales(): Collection
    {
        return $this->musicales;
    }

    public function addMusicale(Musicale $musicale): self
    {
        if (!$this->musicales->contains($musicale)) {
            $this->musicales[] = $musicale;
            $musicale->setLevelOfDifficulty($this);
        }

        return $this;
    }

    public function removeMusicale(Musicale $musicale): self
    {
        if ($this->musicales->removeElement($musicale)) {
            // set the owning side to null (unless already changed)
            if ($musicale->getLevelOfDifficulty() === $this) {
                $musicale->setLevelOfDifficulty(null);
            }
        }

        return $this;
    }
}
