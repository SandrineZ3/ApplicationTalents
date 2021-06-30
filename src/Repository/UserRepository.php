<?php

namespace App\Repository;

use App\Entity\User;
use App\Services\SearchUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    private $paginator;

    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, User::class);
        $this->paginator = $paginator;
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newEncodedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    public function findStatsByDateEndIsNotNull(): array
    {
        return $this->createQueryBuilder('u')
            ->select('SUM(u.scoreInterpersonnelle)',
                'SUM(u.scoreIntrapersonnelle)',
                'SUM(u.scoreKinesthesique)',
                'SUM(u.scoreLinguistique)',
                'SUM(u.scoreMathematique)',
                'SUM(u.scoreMusicale)',
                'SUM(u.scoreNaturaliste)',
                'SUM(u.scoreVisuoSpatiale)')
            ->andWhere('u.dateEnd is not NULL')
            ->getQuery()
            ->getSingleResult()
            ;
    }

    public function findSearchUserPaginate(SearchUser $searchUser, int $nbreResultat): PaginationInterface
    {
        $query = $this->getSearchQueryUser($searchUser)->getQuery();
        return $this->paginator->paginate($query, $searchUser->page, $nbreResultat);
    }

    private function getSearchQueryUser(SearchUser $searchUser): QueryBuilder
    {
        $query = $this
            ->createQueryBuilder('u')
            ->select('u');

        if (!empty($searchUser->keyword)) {
            $query = $query
                ->where($query->expr()->orX(
                    $query->expr()->like('u.id', ':keyword'),
                    $query->expr()->like('u.username', ':keyword')
                ))
                ->setParameter('keyword', "%$searchUser->keyword%");
        }

        $query = $query
            ->orderBy('u.id', 'ASC');

        return $query;
    }
}
