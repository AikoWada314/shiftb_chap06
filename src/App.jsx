import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
