import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ffP4cJDY0PIKZreXPyA2/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Unable to get books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    await axios.post(API_URL, {
      item_id: newBook.itemId,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    });
    return newBook;
  } catch (error) {
    throw new Error('Unable to add the new book');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    throw new Error('Unable to remove the book');
  }
});

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        const newBook = action.payload;
        const bookProperties = {
          title: newBook.title,
          author: newBook.author,
          category: newBook.category,
        };
        return {
          ...state,
          [newBook.itemId]: [bookProperties],
        };
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const deletedBookId = action.payload;
        const updatedState = { ...state };
        const ids = Object.keys(updatedState);
        ids.forEach((bookId) => {
          if (bookId === deletedBookId.toString()) {
            delete updatedState[bookId];
          }
        });
        return updatedState;
      });
  },
});

export default booksSlice.reducer;
