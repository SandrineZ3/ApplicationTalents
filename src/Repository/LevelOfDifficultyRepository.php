<?php

namespace App\Repository;

use App\Entity\LevelOfDifficulty;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LevelOfDifficulty|null find($id, $lockMode = null, $lockVersion = null)
 * @method LevelOfDifficulty|null findOneBy(array $criteria, array $orderBy = null)
 * @method LevelOfDifficulty[]    findAll()
 * @method LevelOfDifficulty[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LevelOfDifficultyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LevelOfDifficulty::class);
    }

    // /**
    //  * @return LevelOfDifficulty[] Returns an array of LevelOfDifficulty objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LevelOfDifficulty
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
