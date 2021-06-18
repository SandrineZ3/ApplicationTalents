<?php

namespace App\Repository;

use App\Entity\Linguistique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Linguistique|null find($id, $lockMode = null, $lockVersion = null)
 * @method Linguistique|null findOneBy(array $criteria, array $orderBy = null)
 * @method Linguistique[]    findAll()
 * @method Linguistique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LinguistiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Linguistique::class);
    }

    public function findByPicto($idPicto)
    {
        return $this->createQueryBuilder('l')
            ->select('l', 's')
            ->leftJoin('l.solution', 's')
            ->andWhere('s.id = :idPicto')
            ->setParameter('idPicto', $idPicto)
            ->setMaxResults(1)
            ->getQuery()
            ->getResult()
            ;
    }

    /*
    public function findOneBySomeField($value): ?Linguistique
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
