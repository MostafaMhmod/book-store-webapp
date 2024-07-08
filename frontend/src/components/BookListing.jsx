const BookListing = ({ book }) => {
  
  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-xl font-bold'>{book.title}</div>
          <div className='text-gray-600 my-2'>{book.author}</div>

        </div>

        <h3 className='text-indigo-500 mb-2'>{new Date(book.publishedDate).toLocaleDateString()}</h3>

      </div>
    </div>
  );
};
export default BookListing;
