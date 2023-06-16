import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  title, author, itemId, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button
            type="button"
            onClick={() => dispatch(removeBook(itemId))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
