import React from 'react'
import logo from './images/logo_and_text.png'

function Navbar_c() {
    return (
        <header>
            <nav class="container row navbar">
                <div class="container row flex-start">
                    {/* IZQUIERDA */}
                    <div>
                        <div class="menu-burger burger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />  
                    </div>
                </div>
                <div class="container row flex-center">
                    {/* CENTRO */}
                    <div class="container search-bar">
                        <input type="text" placeholder="Buscar juego" />
                        <button class="unstyle container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M14.2939 12.5786H13.3905L13.0703 12.2699C14.191 10.9663 14.8656 9.27387 14.8656 7.43282C14.8656 3.32762 11.538 0 7.43282 0C3.32762 0 0 3.32762 0 7.43282C0 11.538 3.32762 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L12.5786 13.3905V14.2939L18.2962 20L20 18.2962L14.2939 12.5786ZM7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786Z" fill="black" fill-opacity="0.45"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="container row flex-end">
                    {/* DERECHA */}
                    <div class="container row">
                        <div>
                            <p class="p-baloo">-heart-</p>
                        </div>
                        <div>
                            <p class="p-baloo">favoritos-</p>
                        </div>
                    </div>
                    <div>
                        <p class="p-baloo">-cart-</p>
                    </div>
                    <div>
                        <p class="p-baloo">-user</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar_c;
