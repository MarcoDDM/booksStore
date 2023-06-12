import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
