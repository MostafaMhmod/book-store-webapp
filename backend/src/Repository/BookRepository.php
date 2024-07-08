<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }

    public function searchBooks($title = '', $author = '')
    {
        $qb = $this->createQueryBuilder('b');

        if ($title) {
            $qb->andWhere('b.title LIKE :title')
               ->setParameter('title', '%' . $title . '%');
        }

        if ($author) {
            $qb->andWhere('b.author LIKE :author')
               ->setParameter('author', '%' . $author . '%');
        }

        return $qb->getQuery()->getResult();
    }
}
