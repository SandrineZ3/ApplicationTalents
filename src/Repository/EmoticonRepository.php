<?php

namespace App\Repository;

use App\Entity\Emoticon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Emoticon|null find($id, $lockMode = null, $lockVersion = null)
 * @method Emoticon|null findOneBy(array $criteria, array $orderBy = null)
 * @method Emoticon[]    findAll()
 * @method Emoticon[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EmoticonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Emoticon::class);
    }

    // /**
    //  * @return Emoticon[] Returns an array of Emoticon objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Emoticon
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
