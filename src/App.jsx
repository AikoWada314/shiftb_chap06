import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Detail from './components/Detail/Detail';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:id" element={<Detail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
