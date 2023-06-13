import { combineReducers } from 'redux';
import booksReducer from './books/booksSlice';

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
