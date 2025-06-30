import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Camera from './page/Camera';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </>
  );
}