import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Maindiv from "./components/main/maindiv";
import SignUp from './pages/auth/signUp';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maindiv />} />        {/* Landing Page Route */}
        <Route path="/signup" element={<SignUp />} />   {/* Sign-Up Page Route */}
      </Routes>      
      <Footer/>
      </Router>
  );
}

export default App;

