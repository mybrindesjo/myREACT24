import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';
import './index.css';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Todos</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
