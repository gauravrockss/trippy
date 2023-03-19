import React from 'react';
import Home from './Pages/home';
import About from './Pages/About';
import Services from './Pages/services';
import Contact from './Pages/contact';
import Signup from './Pages/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/tour' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
