import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar_c from './components/Navbar_c';
import Footer from './components/Footer';
import Card1 from './components/Card1';
import InfoSection from './components/InfoSection';
import questionIcon from './icons/question.svg'
import MultimediaCarousel from './components/MultimediaCarousel'


import gof_image from './images/god_of_war.png';

ReactDOM.createRoot(document.getElementById('header')).render(
    <Navbar_c />
);

ReactDOM.createRoot(document.getElementById('content')).render(
    <><><Card1 
        img = {gof_image}
        name={'God of war: Ragnarok'}
        price={20.99}
        discount={50}
        /><Card1 /></><Card1 /></>
);

ReactDOM.createRoot(document.getElementById('infoSection')).render(
    <><><InfoSection
            icon={questionIcon}
            title={'Como jugar'}
            content={<div>
                <p className='h3-baloo'>Elige tu color: En el 4 en línea, hay dos jugadores, cada uno representado por un color: rojo y amarillo. 
                    ¡Elige tu favorito y comienza la partida!

                    Turno de juego: Los jugadores se turnan para colocar una ficha en la columna que elijan. 
                    Las fichas caen hasta el punto más bajo posible en esa columna.

                    ¡Estrategia es la clave! Piensa cuidadosamente dónde colocar tu ficha. 
                    ¿Vas a bloquear a tu oponente o vas a enfocarte en tu propia estrategia?

                    Mantén la vista en el tablero: Observa atentamente las movidas de tu oponente. 
                    ¡No querrás dejar una oportunidad de ganar pasar!

                    ¡Celebra la victoria! Si logras conectar cuatro fichas antes que tu oponente, ¡felicidades! ¡Eres el campeón del 4 en línea!</p>
            </div>} />
        <InfoSection 
            icon={questionIcon}
            title={'Contendio del juego'}
            content={<MultimediaCarousel />}
        /></>
        <InfoSection 

        /></>

);

ReactDOM.createRoot(document.getElementById('footer')).render(
    <Footer />
);
