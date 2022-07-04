import React from 'react'
import '../App.css'

export const SelectsImg=({bgImg, text})=> {
    return (
        <div className='selects-location'>
            <img src={bgImg} alt='/' />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}