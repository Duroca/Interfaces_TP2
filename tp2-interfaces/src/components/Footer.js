import React from 'react'
import '../styles/footer.css'
import game_controller_icon from '../icons/game_controller.svg'
import people_icon from '../icons/people.svg'
import bank_cards_icon from '../icons/bank_cards.svg'
import online_support_icon from '../icons/online _support.svg'



function Footer() {
  return (
    <div>
        <section className="container flex-center space-around pad-16">
            <div className='container'>
                <img src={game_controller_icon} className='pad-8' alt='game controller icon'/>
                <div>
                    <h3 className="text-baloo light-80">28,000</h3>
                    <h3 className="p-baloo light-80">Juegos</h3>
                </div>
            </div>
            <div className='container'>
                <img src={people_icon} className='pad-8' alt='game controller icon'/>
                <div>
                    <h3 className="text-baloo light-80">30,000,000+</h3>
                    <h3 className="p-baloo light-80">Usuarios</h3>
                </div>
            </div>
            <div className='container'>
                <img src={bank_cards_icon} className='pad-8' alt='game controller icon'/>
                <div>
                    <h3 className="text-baloo light-80">200+</h3>
                    <h3 className="p-baloo light-80">Metodos de pago</h3>
                </div>
            </div>
            <div className='container'>
                <img src={online_support_icon} className='pad-8' alt='game controller icon'/>
                <div>
                    <h3 className="text-baloo light-80">24/7</h3>
                    <h3 className="p-baloo light-80">Soporte técnico</h3>
                </div>
            </div>
        </section>

        <section className="container column">
            <div>
                <h3 className="h3-baloo">redes sociales</h3>
            </div>
            <div className="container column">
                <div>
                    <h1 className="h1-baloo">LOGO</h1>
                </div>
                <div className="container">
                    <p className="p-baloo">Política  de privacidad</p>
                    <p className="p-baloo">Terminos & Condiciones</p>
                </div>
                <p className="p-baloo">Copyright © 2023 PulpGames, Inc</p>
                <p className="p-baloo">All rights reserved.</p>
                <p class="p-baloo">All product names are trademarks of their respective companies.</p>
            </div>
        </section>
    </div>
  )
}

export default Footer;

