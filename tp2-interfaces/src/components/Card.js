import React from 'react'
import '../styles/card.css'

function Card({name, price, discount, img}) {
    return (
        <div className='card-regular'>
            <div>
                <img src={img} alt={name}/>
            </div>
            <div className='label'>
                <div className='info'>
                    <h3 className='text-baloo light-80'>{name}</h3>
                </div>
                <div className='container space-between'>
                    <div className='container column'>
                        <p className='p-baloo line-through light-60'>{price} US$</p>
                        <h3 className='h3-baloo'>{price} US$</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;