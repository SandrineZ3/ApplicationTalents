<?php

namespace App\Repository;

use App\Entity\Musicale;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Musicale|null find($id, $lockMode = null, $lockVersion = null)
 * @method Musicale|null findOneBy(array $criteria, array $orderBy = null)
 * @method Musicale[]    findAll()
 * @method Musicale[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MusicaleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Musicale::class);
    }

    // /**
    //  * @return Musicale[] Returns an array of Musicale objects
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
    public function findOneBySomeField($value): ?Musicale
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
