<?php

namespace App\Repository;

use App\Entity\Mathematique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Mathematique|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mathematique|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mathematique[]    findAll()
 * @method Mathematique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MathematiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mathematique::class);
    }

    // /**
    //  * @return Mathematique[] Returns an array of Mathematique objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Mathematique
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
