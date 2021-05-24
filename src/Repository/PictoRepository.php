<?php

namespace App\Repository;

use App\Entity\Picto;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Picto|null find($id, $lockMode = null, $lockVersion = null)
 * @method Picto|null findOneBy(array $criteria, array $orderBy = null)
 * @method Picto[]    findAll()
 * @method Picto[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PictoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Picto::class);
    }

    // /**
    //  * @return Picto[] Returns an array of Picto objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Picto
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
