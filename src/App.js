import './App.css';
import Navbar from './components/Navbar/navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/about';
import SignUp from './components/pages/signup';
import DashBoard from './components/pages/dashboard';
import Contact from './components/pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/about' element={About} />
        <Route path='/dashboard' element={DashBoard} />
        <Route path='/contact' element={Contact} />
        <Route path='/sign-up' element={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
