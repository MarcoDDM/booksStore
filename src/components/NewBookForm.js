import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newBook = {
      itemId: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleAdd}>
      <label htmlFor="bookTitle">
        Title
        <input type="text" id="bookTitle" placeholder="Title" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label htmlFor="bookAuthor">
        Author
        <input type="text" id="bookAuthor" placeholder="Author" value={author} onChange={handleAuthorChange} />
      </label>
      <br />
      <label htmlFor="bookCategory">
        Category
        <select id="bookCategory" value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddForm;
