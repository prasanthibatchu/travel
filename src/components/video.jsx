import React from 'react'
import "../App.css"
import Video from '../assets/maldivesVideo.mp4'

export const Videos=()=>{
    return(
        <div className='hero'>
            <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4' />
            </video>
        </div>
    )
}