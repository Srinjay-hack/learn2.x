import './App.css';
import Navbar from './components/Navbar/navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/about';
import SignUp from './components/pages/signup';
import DashBoard from './components/pages/dashboard';
import Contact from './components/pages/contact';
import Reviews from './components/pages/review';
import Community from './components/pages/community';
import Courses from './components/pages/courses';
import Home from './components/pages/homepage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/dashboard' Component={DashBoard} />
        <Route path='/contact' Component={Contact} />
        <Route path='/sign-up' Component={SignUp} />
        <Route path='/reviews' Component={Reviews} />
        <Route path='/community' Component={Community} />
        <Route path='/courses' Component={Courses} />
      </Routes>
    </Router>
  );
}

export default App;
