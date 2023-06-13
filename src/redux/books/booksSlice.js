import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'ffP4cJDY0PIKZreXPyA2'; // Reemplaza con tu ID de app real

const initialState = [];

// Acción para obtener los libros
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/apps/${APP_ID}/books`);
    return response.data;
  } catch (error) {
    throw new Error('No se pudo obtener la lista de libros.');
  }
});

// Acción para agregar un libro
export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(`${API_BASE_URL}/apps/${APP_ID}/books`, {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return book;
  } catch (error) {
    throw new Error('No se pudo agregar el libro.');
  }
});

// Acción para eliminar un libro
export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/apps/${APP_ID}/books/${id}`);
    return id;
  } catch (error) {
    throw new Error('No se pudo eliminar el libro.');
  }
});

// Slice para el estado de los libros
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled,
        (state, action) => state.filter((book) => book.id !== action.payload));
  },
});

export default booksSlice.reducer;
