import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import NewBookForm from './NewBookForm';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const booksObject = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const books = Object.values(booksObject);

  return (
    <div>
      <div>
        {books.map((bookArray) => bookArray.map((book) => (
          <Books
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            onRemove={handleRemove}
          />
        )))}
      </div>
      <div>
        <NewBookForm />
      </div>
    </div>
  );
};

export default BookList;
