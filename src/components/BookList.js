import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import NewBookForm from './NewBookForm';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div>
        {books.map((book) => (
          <Books
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <div>
        <NewBookForm />
      </div>
    </div>
  );
};

export default BookList;
