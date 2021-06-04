<?php

namespace App\Entity;

use App\Repository\MusicaleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MusicaleRepository::class)
 */
class Musicale
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $numberOfRows = 3;

    /**
     * @ORM\Column(type="integer")
     */
    private $numberOfColumns = 6;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $solution;

    /**
     * @ORM\ManyToOne(targetEntity=LevelOfDifficulty::class, inversedBy="musicals")
     * @ORM\JoinColumn(nullable=false)
     */
    private $levelOfDifficulty;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumberOfRows(): ?int
    {
        return $this->numberOfRows;
    }

    public function setNumberOfRows(int $numberOfRows): self
    {
        $this->numberOfRows = $numberOfRows;

        return $this;
    }

    public function getNumberOfColumns(): ?int
    {
        return $this->numberOfColumns;
    }

    public function setNumberOfColumns(int $numberOfColumns): self
    {
        $this->numberOfColumns = $numberOfColumns;

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
