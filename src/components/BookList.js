import React from 'react';
import Books from './Books';
import NewBookForm from './NewBookForm';

const BookList = () => {
  const books = [
    {
      id: 1,
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      genre: 'Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: '8%',
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
  ];

  return (
    <div>
      <div>
        {books.map((book) => (
          <Books
            key={book.id}
            genre={book.genre}
            title={book.title}
            author={book.author}
            progress={book.progress}
            chapter={book.chapter}
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
