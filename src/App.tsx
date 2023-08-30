import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthPage from './Components/AuthPage';
import Profile from './Components/Profile';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () =>{
  return(
    <AuthPage />
    // <Profile />

  )
}

export default App