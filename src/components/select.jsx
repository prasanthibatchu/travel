import React from 'react'
import '../App.css'
import bora from "../assets/borabora.jpg";
import bora2 from "../assets/borabora2.jpg";
import mal from "../assets/maldives.jpg";
import mal2 from "../assets/maldives2.jpg";
import mal3 from "../assets/maldives3.jpg";
import key from "../assets/keywest.jpg";
import {SelectsImg} from './selectimg'

export const Selects=()=> {
    return (
        <div name='views' className='selects'>
            <div className='container'>
            <SelectsImg bgImg={bora} text='Bora Bora' />
                <SelectsImg bgImg={bora2} text='Emerald Bay' />
                <SelectsImg bgImg={mal} text='Maldives' />
                <SelectsImg bgImg={mal2} text='Grenada' />
                <SelectsImg bgImg={mal3} text='Barbados' />
                <SelectsImg bgImg={key} text='Key West' />
            </div>

        </div>
    )
}