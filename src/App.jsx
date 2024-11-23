import React, { lazy, Suspense} from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Product from "./components/Product.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import './app.css';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
