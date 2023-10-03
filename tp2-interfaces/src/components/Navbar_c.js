import React, { useState } from "react";
import '../styles/navbar.css'
import search_icon from '../icons/search.svg'   
import heart_icon from '../icons/heart.svg'
import cart_icon from '../icons/cart.svg'

import logo from '../images/logo_and_text.png'



function Navbar_c() {
const [classState, setClassState] = useState("menu-burger burger-icon");
    const openMenu = () => {
        let cS = classState;
        cS = cS.includes("open") ? "menu-burger burger-icon" : "menu-burger burger-icon open";
        setClassState(cS);
    };
    return (
                    <nav className="container row navbar">
                <div className="container row flex-start">
                    {/* IZQUIERDA */}
                    <div>
                        <div className={classState} onClick={openMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={logo} className="" alt="logo" />
                        </a>
                    </div>
                </div>
                
<div className="container row flex-center">
                    {/* CENTRO */}
                    <div className="container search-bar">
                        <input type="text" placeholder="Buscar juego" />
                        <button className="unstyle container">
                            <img src={search_icon} alt="search"/>
                        </button>
                    </div>
                </div>

                <div className="container row flex-end">
                    {/* DERECHA */}
                    <div className="container row">
                        <div className="container row pad-4">
                            <img src={heart_icon} className="pad-4" alt="My colection" />
                            <h3 className="text-baloo semi-bold dark">Mis favoritos</h3>
                        </div>
                    </div>
                    <div>
                        <img src={cart_icon} className="pad-4" alt="My colection" />
                    </div>
                    <div>
                        <p className="p-baloo">-user</p>
                    </div>
                </div>
            </nav>
            );
}

export default Navbar_c;
