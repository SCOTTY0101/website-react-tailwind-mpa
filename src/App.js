import React from 'react';
import './App.css';
import Navbar from './components/nav.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.js'
import Blog from './pages/blog.js'
import Div from './pages/divPage.js'


function App() {
  return (

    <>
    <Navbar />
      <Router>
          <Routes>
              <Route path='/' exact element={ <Home />} />
              <Route path='/blog' element={ <Blog />} />
              <Route path='/div' element={ <Div /> } />
          </Routes> 
      </Router> 
    </>

  );
}

export default App;
