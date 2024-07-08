# Book store webapp 

## Requirements
- PHP 7.4+
- Composer
- Symfony CLI
- Node.js
- MySQL

## Setup Instructions

### Backend (Symfony)
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `composer install` to install dependencies.
4. Set up the database in the `.env` file and populate the database using the `store.sql` file provided in the main directory.
5. Run `php bin/console doctrine:database:create` to create the database.
6. Run `php bin/console doctrine:migrations:migrate` to create the schema.
7. Run `php bin/console doctrine:fixtures:load` to load sample data.
8. Start the server with `symfony server:start`.

### Frontend (React)
1. Navigate to the `frontend` directory.
2. Run `yarn` to install dependencies.
3. Start the development server with `yarn dev`.

### API Endpoints
- `GET /api/books` - List all books
- `GET /api/books/search` - Search for books by title or author

### Features
- View list of books
- Search for books by title or author
- Pagination for book list
- Responsive layout

## Sample Data
The sample data is included in the `store.sql` file.
