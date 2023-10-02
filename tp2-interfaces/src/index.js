import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar_c from './components/Navbar_c';
import Footer from './components/Footer';
import Card from './components/Card'

import gof_image from './images/god_of_war.png'

ReactDOM.createRoot(document.getElementById('header')).render(
    <Navbar_c />
);

ReactDOM.createRoot(document.getElementById('content')).render(
    <><><Card 
        img = {gof_image}
        name={'God of war: Ragnarok'}
        price={20.99}
        discount={50}
        /><Card /></><Card /></>
    
);

ReactDOM.createRoot(document.getElementById('footer')).render(
    <Footer />
);


