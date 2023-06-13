import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import NewBookForm from './NewBookForm';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const bookElements = [];

  // Iterate over the book IDs
  Object.keys(books).forEach((id) => {
    // Iterate over the book objects for each ID
    books[id].forEach((book) => {
      bookElements.push(
        <Books
          key={id}
          id={id}
          title={book.title}
          author={book.author}
          onRemove={handleRemove}
        />,
      );
    });
  });

  return (
    <div>
      <div>{bookElements}</div>
      <div>
        <NewBookForm />
      </div>
    </div>
  );
};

export default BookList;
