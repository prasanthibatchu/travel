import React from 'react'
import '../App.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import bora from '../assets/borabora.jpg'
import bora2 from '../assets/borabora2.jpg'
import mal from '../assets/maldives.jpg'

export const ImgCarousel=()=> {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={bora} alt='/' />
                    
                </div>
                <div>
                    <img src={bora2} alt='/' />
                   
                </div>
                <div>
                    <img src={mal} alt='/' />
                   
                </div>
            </Carousel>
        </div>


    )
}