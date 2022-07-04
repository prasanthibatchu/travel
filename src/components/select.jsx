import React from 'react'
import '../App.css'
import bora from "../assets/borabora.jpg";
import bora2 from "../assets/borabora2.jpg";
import mal from "../assets/maldives.jpg";
import mal2 from "../assets/maldives2.jpg";
import mal3 from "../assets/maldives3.jpg";
import key from "../assets/keywest.jpg";
import {SelectsImg} from './selectimg'

const selects = [
    {
        alt : "Bora Bora",
        link: "https://www.google.com/maps/place/Bora+Bora/@-16.504424,-151.7386491,13z/data=!3m1!4b1!4m5!3m4!1s0x76bdbd188a4a98ab:0x160a089e92d5ce61!8m2!3d-16.5004126!4d-151.7414904",
        image : require('../assets/borabora.jpg'),
    },
    {
        alt : "Emerald Bay",
        link: "https://www.google.com/maps/place/Emerald+Maldives+Resort+%26+Spa/@5.4945511,72.879764,17z/data=!3m1!4b1!4m8!3m7!1s0x3b6b02b93009c3e1:0x49985f381cfa6f0d!5m2!4m1!1i2!8m2!3d5.4945511!4d72.8819527",
        image : bora2,
    },
    {
        alt : "Maldives",
        link: "https://www.google.com/maps/place/Maldives+airport+company/@4.2164651,73.5342871,12.63z/data=!4m5!3m4!1s0x3b3f81e837e7d9a7:0x43a656551f46a56b!8m2!3d4.1887877!4d73.5274103",
        image : mal,
    },
     {
        alt : "Grenada",
        link: "https://www.google.com/maps/place/Grenada/@12.2596604,-61.8704888,10z/data=!3m1!4b1!4m5!3m4!1s0x8c381789f4877bd1:0x36d8c7015a1f4f8e!8m2!3d12.1165!4d-61.679",
        image : mal2,
    },
    {
        alt : "Barbados",
        link: "https://www.google.com/maps/place/Barbados/@13.193887,-59.543198,3a,82.7y,90t/data=!3m8!1e2!3m6!1shttp:%2F%2Ft3.gstatic.com%2Fimages%3Fq%3Dtbn:ANd9GcQxpRaZkJp-BmRETqdwOspLecUiJ-Lu5CzvOReK8VWVvo8gyCZ5!2e7!3e27!6s%2F%2Flh6.googleusercontent.com%2Fproxy%2FbBgl-fUgG5yOoh3kw64zJ4OiJxwCl5tfdj3FjRTSE0xkFoHYU4P_4PQwA0k8OZZEkBfad8TuHuNE0TFoGayMFW4-RgMItDJ1UvJyMrwjYSX3zaPiv4aX8bqcLGAkbMld1yQm4is--IMhv59HC1swhnY7EBQJUg%3Dw203-h122-k-no!7i1080!8i652!4m5!3m4!1s0x8c43f1fbae321aa3:0xeec51b38cf4362b!8m2!3d13.193887!4d-59.543198",
        image : mal3,
    },
    {
        alt : "Key West",
        link: "https://www.google.com/maps/place/Key+West/@24.5583708,-81.7802566,14z/data=!3m1!4b1!4m5!3m4!1s0x88d1b6c5c6f19319:0xe9ab35bc36eeed55!8m2!3d24.5554183!4d-81.7841722",
        image : key,
    },
]

export const Selects=()=> {
    return (
        <div name='views' className='selects'>
            <div className='container'>
            {selects.map(item => {
                    return <a href={item.link} target="_blank">
                    <SelectsImg bgImg={item.image} text={item.alt} /></a>
                
                })}
            {/* <a href="https://www.google.com/maps/place/Bora+Bora/@-16.504424,-151.7386491,13z/data=!3m1!4b1!4m5!3m4!1s0x76bdbd188a4a98ab:0x160a089e92d5ce61!8m2!3d-16.5004126!4d-151.7414904">
                <SelectsImg bgImg={bora} text='Bora Bora' /></a>
            <a href="https://www.google.com/maps/place/Emerald+Maldives+Resort+%26+Spa/@5.4945511,72.879764,17z/data=!3m1!4b1!4m8!3m7!1s0x3b6b02b93009c3e1:0x49985f381cfa6f0d!5m2!4m1!1i2!8m2!3d5.4945511!4d72.8819527">
                <SelectsImg bgImg={bora2} text='Emerald Bay' /></a>
            <a href="https://www.google.com/maps/place/Maldives+airport+company/@4.2164651,73.5342871,12.63z/data=!4m5!3m4!1s0x3b3f81e837e7d9a7:0x43a656551f46a56b!8m2!3d4.1887877!4d73.5274103">
                <SelectsImg bgImg={mal} text='Maldives' /></a>
                <a href="https://www.google.com/maps/place/Grenada/@12.2596604,-61.8704888,10z/data=!3m1!4b1!4m5!3m4!1s0x8c381789f4877bd1:0x36d8c7015a1f4f8e!8m2!3d12.1165!4d-61.679">

                <SelectsImg bgImg={mal2} text='Grenada' style={{height:"100%"}} /></a>
                <a href="https://www.google.com/maps/place/Barbados/@13.193887,-59.543198,3a,82.7y,90t/data=!3m8!1e2!3m6!1shttp:%2F%2Ft3.gstatic.com%2Fimages%3Fq%3Dtbn:ANd9GcQxpRaZkJp-BmRETqdwOspLecUiJ-Lu5CzvOReK8VWVvo8gyCZ5!2e7!3e27!6s%2F%2Flh6.googleusercontent.com%2Fproxy%2FbBgl-fUgG5yOoh3kw64zJ4OiJxwCl5tfdj3FjRTSE0xkFoHYU4P_4PQwA0k8OZZEkBfad8TuHuNE0TFoGayMFW4-RgMItDJ1UvJyMrwjYSX3zaPiv4aX8bqcLGAkbMld1yQm4is--IMhv59HC1swhnY7EBQJUg%3Dw203-h122-k-no!7i1080!8i652!4m5!3m4!1s0x8c43f1fbae321aa3:0xeec51b38cf4362b!8m2!3d13.193887!4d-59.543198"> 
                <SelectsImg bgImg={mal3} text='Barbados' /></a>
                <a href="https://www.google.com/maps/place/Key+West/@24.5583708,-81.7802566,14z/data=!3m1!4b1!4m5!3m4!1s0x88d1b6c5c6f19319:0xe9ab35bc36eeed55!8m2!3d24.5554183!4d-81.7841722">   
                <SelectsImg bgImg={key} text='Key West' /></a> */}
            </div>

        </div>
    )
}