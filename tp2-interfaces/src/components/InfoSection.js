import React from 'react'
import '../styles/info-section.css'

function InfoSection({icon, title, content}) {
    return (
        <div className='conteiner column gap-12 pad-32'>
            <div className='container column gap-12'>
                <div className='container gap-8 fill-width'>
                    <img src={icon}/>
                    <h2 className='h2-baloo'>{title}</h2>
                </div>
                <span className='container line'></span>
            </div>
            <div className='container'>
                {content}
            </div>
        </div>
    )
}

export default InfoSection;