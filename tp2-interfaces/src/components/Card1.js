import React from 'react'
import '../styles/card.css'
import heart_icon from '../icons/heart_white.svg'


function Card1({name, price, discount, img}) {
    return (
        <div className='card-regular'>
            <div className='inside-border'></div>
            <div className='like'>
                <img src={heart_icon} />
            </div>
            <div className='img-container'>
                <img src={img} alt={name}/>
            </div>
            <div className='label space-between'>
                <div className='info'>
                    {name ? (
                        <h3 className='h3-baloo light-80 semi-bold'>{name}</h3>
                    ) : (
                        <h3 className='h3-baloo light-80 semi-bold'>"CARD TITLE"</h3>
                    )}
                    <div className='container space-between align-end'>
                        <div className='container column align-start'>
                            {discount &&
                                <p className='p-10-baloo line-through light-60'>{price} US$</p>
                            }
                            {price ? (
                                <h3 className='text-baloo not-bold light-80'>{(price * (discount / 100)).toFixed(2)} US$</h3>
                            ) : (
                                <h3 className='text-baloo not-bold light-80'>Gratis</h3>
                            )}
                            
                        </div>
                        {discount &&
                            <div className='discount-label'>
                                <p className='p-baloo'>-{discount}%</p>
                            </div>
                        }
                    </div>
                </div>
                <button className='button-class'>
                    {price ? (
                        <p className='text-baloo light-80'>Agregar al carrito</p>
                    ) : (
                        <p className='text-baloo light-80'>Jugar</p>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Card1;