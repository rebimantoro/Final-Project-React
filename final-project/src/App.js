import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
        <GlobalProvider>
        <Navbar/>
          <Routes>
            <Route  path='/' element={<Content />}  />
            <Route  path='/about' element={<About />}  />
            <Route  path='/login' element={<Login />}  />
            <Route  path='/register' element={<Register />}  />
          </Routes>
        <Footer/>
        </GlobalProvider>
      </BrowserRouter>
    </>
    
      
  );
}

export default App;

