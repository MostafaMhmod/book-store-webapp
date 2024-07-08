<?php

namespace App\Controller;

use App\Entity\Book;
use App\Repository\BookRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class BookController extends AbstractController
{
    private $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }


    #[Route('/api/books', methods: ['GET'])]
    public function getBooks(): JsonResponse
    {
        $books = $this->bookRepository->findAll();
        return $this->json($books);
    }

    #[Route('/api/books/search', methods: ['GET'])]
    public function searchBooks(Request $request): JsonResponse
    {
        $title = $request->query->get('title');
        $author = $request->query->get('author');

        $books = $this->bookRepository->searchBooks($title, $author);
        return $this->json($books);
    }


}
