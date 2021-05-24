<?php

namespace App\Repository;

use App\Entity\VisuoSpatiale;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method VisuoSpatiale|null find($id, $lockMode = null, $lockVersion = null)
 * @method VisuoSpatiale|null findOneBy(array $criteria, array $orderBy = null)
 * @method VisuoSpatiale[]    findAll()
 * @method VisuoSpatiale[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VisuoSpatialeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VisuoSpatiale::class);
    }

    // /**
    //  * @return VisuoSpatiale[] Returns an array of VisuoSpatiale objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VisuoSpatiale
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
