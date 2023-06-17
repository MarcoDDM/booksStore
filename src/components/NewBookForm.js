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

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
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
    <div className="form-container">
      <h2 className="form-title">
        ADD A NEW BOOK
      </h2>
      <form className="add-form" onSubmit={handleAdd}>
        <label className="grow-3" htmlFor="bookTitle">
          <input className="input-control input-title" type="text" id="bookTitle" placeholder="Title" value={title} onChange={handleTitleChange} required />
        </label>
        <select className="input-category" id="categories">
          <option className="cat" value="Category">Category</option>
          <option className="cat" value="Action">Action</option>
          <option className="cat" value="Fiction">Fiction</option>
          <option className="cat" value="Horror">Horror</option>
          <option className="cat" value="Kids">Kids</option>
          <option className="cat" value="Learning">Learning</option>
          <option className="cat" value="Sci-Fi">Sci-Fi</option>
        </select>
        <button className="input-control input-send" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBookForm;
