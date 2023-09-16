import './App.css';
import Navbar from './components/Navbar/navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/about';
import SignUp from './components/pages/signup';
import DashBoard from './components/pages/dashboard';
import Contact from './components/pages/contact';
import Review from './components/pages/review';
import Courses from './components/pages/courses';
import Community from './components/pages/community';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/about' Component={About} />
        <Route path='/dashboard' Component={DashBoard} />
        <Route path='/contact' Component={Contact} />
        <Route path='/sign-up' Component={SignUp} /> 
        <Route path='/reviews' Component={Review} />
        <Route path='/courses' Component={Courses} />
        <Route path='/community' Component={Community} />
      </Routes>
    </Router>
  );
}

export default App;
