import React from 'react'
import '../styles/footer.css'
import game_controller_icon from '../icons/game_controller.svg'
import people_icon from '../icons/people.svg'
import bank_cards_icon from '../icons/bank_cards.svg'
import online_support_icon from '../icons/online _support.svg'
import instagram_icon from '../icons/instagram.svg'
import facebook_icon from '../icons/facebook.svg'
import youtube_icon from '../icons/youtube.svg'
import logo from '../images/logo_and_text.png'


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
                <img src={people_icon} className='pad-8' alt='people icon'/>
                <div>
                    <h3 className="text-baloo light-80">30,000,000+</h3>
                    <h3 className="p-baloo light-80">Usuarios</h3>
                </div>
            </div>
            <div className='container'>
                <img src={bank_cards_icon} className='pad-8' alt='bank cards icon'/>
                <div>
                    <h3 className="text-baloo light-80">200+</h3>
                    <h3 className="p-baloo light-80">Metodos de pago</h3>
                </div>
            </div>
            <div className='container'>
                <img src={online_support_icon} className='pad-8' alt='online support icon'/>
                <div>
                    <h3 className="text-baloo light-80">24/7</h3>
                    <h3 className="p-baloo light-80">Soporte técnico</h3>
                </div>
            </div>
        </section>

        <section className="container column pad-32">
            <div className="container column gap-32">
                <div className='container fill-width gap-40'>
                    <span className='container line'></span>
                    <div className='container gap-100'>
                        <img src={instagram_icon} className='pad-8' alt='instagram icon'/>
                        <img src={facebook_icon} className='pad-8' alt='facebook icon'/>
                        <img src={youtube_icon} className='pad-8' alt='youtube icon'/>
                    </div>
                    <span className='line'></span>
                </div>
                <div>
                    <img src={logo} className='' alt='logo pulpgames'/>
                </div>
                <div className="container gap-100 align-top">
                    <div className='container column gap-12 flex-start'>
                        <div className='container fill-width'>
                            <h3 className="h3-baloo light-80">Categorías</h3>
                        </div>
                        <div className='container gap-32'>
                            <ul className=''>
                                <li className='text-baloo'>Básquet</li>
                                <li className='text-baloo'>Aventura</li>
                                <li className='text-baloo'>Disparos</li>
                                <li className='text-baloo'>Acción</li>
                            </ul>
                            <ul className=''>
                                <li className='text-baloo'>Carreras</li>
                                <li className='text-baloo'>Cocina</li>
                                <li className='text-baloo'>Shoots</li>
                                <li className='text-baloo'>Cook</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container column gap-12'>
                        <div className='container fill-width'>
                            <h3 className="h3-baloo light-80">Información</h3>
                        </div>
                        <div className='container fill-width'>
                            <ul className=''>
                                <li className='text-baloo'>Sobre nosotros</li>
                                <li className='text-baloo'>Terminos & Condiciones</li>
                                <li className='text-baloo'>Política de privacidad</li>
                                <li className='text-baloo'>Política de reembolso de la tienda</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container column gap-12'>
                        <div className='container fill-width'>
                            <h3 className="h3-baloo light-80">Contactanos</h3>
                        </div>
                        <div className='container fill-width'>
                            <ul className=''>
                                <li className='text-baloo'>+54 249 4497213</li>
                                <li className='text-baloo'>info@pulpgames.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container column gap-12'>
                        <div className='container fill-width'>
                            <h3 className="h3-baloo light-80">Ayuda</h3>
                        </div>
                        <div className='container fill-width'>
                            <ul className=''>
                                <li className='text-baloo'>Resolución de problemas</li>
                                <li className='text-baloo'>Centro de seguridad</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container column pad-8'>
                    <h3 className="p-baloo light-60">Copyright © 2023 PulpGames, Inc. All rights reserved.</h3>
                    <h3 className="p-baloo light-60">All product names are trademarks of their respective companies.</h3>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;