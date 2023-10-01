import React from 'react'
import '../styles/navbar.css'
import logo from '../images/logo_and_text.png'


function Navbar_c() {
    return (
        <header>
            <nav className="container row navbar">
                <div className="container row flex-start">
                    {/* IZQUIERDA */}
                    <div>
                        <div className="menu-burger burger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div>
                        <img src={logo} className="" alt="logo" />
                    </div>
                </div>
                
            </nav>
        </header>
    );
}

const icon = document.querySelector('.menu-burger');
icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
});

export default Navbar_c;
