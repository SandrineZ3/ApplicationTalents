<?php

namespace App\Repository;

use App\Entity\Naturaliste;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Naturaliste|null find($id, $lockMode = null, $lockVersion = null)
 * @method Naturaliste|null findOneBy(array $criteria, array $orderBy = null)
 * @method Naturaliste[]    findAll()
 * @method Naturaliste[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NaturalisteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Naturaliste::class);
    }

    // /**
    //  * @return Naturaliste[] Returns an array of Naturaliste objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Naturaliste
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
