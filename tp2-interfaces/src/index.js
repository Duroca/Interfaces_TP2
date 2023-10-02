import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar_c from './components/Navbar_c';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('header')).render(
    <Navbar_c />
);

ReactDOM.createRoot(document.getElementById('footer')).render(
    <Footer />
);


