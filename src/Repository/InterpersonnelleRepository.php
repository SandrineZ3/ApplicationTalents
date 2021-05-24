<?php

namespace App\Repository;

use App\Entity\Interpersonnelle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Interpersonnelle|null find($id, $lockMode = null, $lockVersion = null)
 * @method Interpersonnelle|null findOneBy(array $criteria, array $orderBy = null)
 * @method Interpersonnelle[]    findAll()
 * @method Interpersonnelle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InterpersonnelleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Interpersonnelle::class);
    }

    // /**
    //  * @return Interpersonnelle[] Returns an array of Interpersonnelle objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Interpersonnelle
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
