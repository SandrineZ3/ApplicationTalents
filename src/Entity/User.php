<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(fields={"username"}, message="There is already an account with this username")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = ['ROLE_USER'];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="boolean")
     */
    private $admin = false;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateStart;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateEnd;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $scoreVisuoSpatiale;

    /**
     * @ORM\Column(type="boolean")
     */
    private $visuoSpatialeFinished = false;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $scoreNaturaliste;

    /**
     * @ORM\Column(type="boolean")
     */
    private $naturalisteFinished = false;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $scoreMathematique;

    /**
     * @ORM\Column(type="boolean")
     */
    private $mathematiqueFinished = false;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $scoreInterpersonnelle;

    /**
     * @ORM\Column(type="boolean")
     */
    private $interpersonnelleFinished = false;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $scoreLinguistique;

    /**
     * @ORM\Column(type="boolean")
     */
    private $linguistiqueFinished = false;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $scoreKinesthesique;

    /**
     * @ORM\Column(type="boolean")
     */
    private $kinesthesiqueFinished = false;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $scoreMusicale;

    /**
     * @ORM\Column(type="boolean")
     */
    private $musicaleFinished = false;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $scoreIntrapersonnelle;

    /**
     * @ORM\Column(type="boolean")
     */
    private $intrapersonnelleFinished = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getAdmin(): ?bool
    {
        return $this->admin;
    }

    public function setAdmin(bool $admin): self
    {
        $this->admin = $admin;

        return $this;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->dateStart;
    }

    public function setDateStart(?\DateTimeInterface $dateStart): self
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->dateEnd;
    }

    public function setDateEnd(?\DateTimeInterface $dateEnd): self
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    public function getScoreVisuoSpatiale(): ?int
    {
        return $this->scoreVisuoSpatiale;
    }

    public function setScoreVisuoSpatiale(?int $scoreVisuoSpatiale): self
    {
        $this->scoreVisuoSpatiale = $scoreVisuoSpatiale;

        return $this;
    }

    public function getVisuoSpatialeFinished(): ?bool
    {
        return $this->visuoSpatialeFinished;
    }

    public function setVisuoSpatialeFinished(bool $visuoSpatialeFinished): self
    {
        $this->visuoSpatialeFinished = $visuoSpatialeFinished;

        return $this;
    }

    public function getScoreNaturaliste(): ?int
    {
        return $this->scoreNaturaliste;
    }

    public function setScoreNaturaliste(?int $scoreNaturaliste): self
    {
        $this->scoreNaturaliste = $scoreNaturaliste;

        return $this;
    }

    public function getNaturalisteFinished(): ?bool
    {
        return $this->naturalisteFinished;
    }

    public function setNaturalisteFinished(bool $naturalisteFinished): self
    {
        $this->naturalisteFinished = $naturalisteFinished;

        return $this;
    }

    public function getScoreMathematique(): ?int
    {
        return $this->scoreMathematique;
    }

    public function setScoreMathematique(?int $scoreMathematique): self
    {
        $this->scoreMathematique = $scoreMathematique;

        return $this;
    }

    public function getMathematiqueFinished(): ?bool
    {
        return $this->mathematiqueFinished;
    }

    public function setMathematiqueFinished(bool $mathematiqueFinished): self
    {
        $this->mathematiqueFinished = $mathematiqueFinished;

        return $this;
    }

    public function getScoreInterpersonnelle(): ?int
    {
        return $this->scoreInterpersonnelle;
    }

    public function setScoreInterpersonnelle(?int $scoreInterpersonnelle): self
    {
        $this->scoreInterpersonnelle = $scoreInterpersonnelle;

        return $this;
    }

    public function getInterpersonnelleFinished(): ?bool
    {
        return $this->interpersonnelleFinished;
    }

    public function setInterpersonnelleFinished(bool $interpersonnelleFinished): self
    {
        $this->interpersonnelleFinished = $interpersonnelleFinished;

        return $this;
    }

    public function getScoreLinguistique(): ?int
    {
        return $this->scoreLinguistique;
    }

    public function setScoreLinguistique(?int $scoreLinguistique): self
    {
        $this->scoreLinguistique = $scoreLinguistique;

        return $this;
    }

    public function getLinguistiqueFinished(): ?bool
    {
        return $this->linguistiqueFinished;
    }

    public function setLinguistiqueFinished(bool $linguistiqueFinished): self
    {
        $this->linguistiqueFinished = $linguistiqueFinished;

        return $this;
    }

    public function getScoreKinesthesique(): ?int
    {
        return $this->scoreKinesthesique;
    }

    public function setScoreKinesthesique(?int $scoreKinesthesique): self
    {
        $this->scoreKinesthesique = $scoreKinesthesique;

        return $this;
    }

    public function getKinesthesiqueFinished(): ?bool
    {
        return $this->kinesthesiqueFinished;
    }

    public function setKinesthesiqueFinished(bool $kinesthesiqueFinished): self
    {
        $this->kinesthesiqueFinished = $kinesthesiqueFinished;

        return $this;
    }

    public function getScoreMusicale(): ?int
    {
        return $this->scoreMusicale;
    }

    public function setScoreMusicale(?int $scoreMusicale): self
    {
        $this->scoreMusicale = $scoreMusicale;

        return $this;
    }

    public function getMusicaleFinished(): ?bool
    {
        return $this->musicaleFinished;
    }

    public function setMusicaleFinished(bool $musicaleFinished): self
    {
        $this->musicaleFinished = $musicaleFinished;

        return $this;
    }

    public function getScoreIntrapersonnelle(): ?int
    {
        return $this->scoreIntrapersonnelle;
    }

    public function setScoreIntrapersonnelle(?int $scoreIntrapersonnelle): self
    {
        $this->scoreIntrapersonnelle = $scoreIntrapersonnelle;

        return $this;
    }

    public function getIntrapersonnelleFinished(): ?bool
    {
        return $this->intrapersonnelleFinished;
    }

    public function setIntrapersonnelleFinished(bool $intrapersonnelleFinished): self
    {
        $this->intrapersonnelleFinished = $intrapersonnelleFinished;

        return $this;
    }
}
