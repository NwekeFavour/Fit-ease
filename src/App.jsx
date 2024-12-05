/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import React from 'react';
import About from './pages/about';
import NotFound from './pages/notFound';
function App() {

  return (
    <>
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route 
          path='/'
          Component={Home}>
          </Route>
          <Route 
          path='/home'
          Component={Home}>
          </Route>
          <Route path='/about-us' Component={About}>

          </Route>
          <Route path='*' Component={NotFound}>
          </Route>
        </Routes>
      </Router>

    </>
  )

}

export default App
