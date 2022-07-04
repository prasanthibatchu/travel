import React from "react";
import bora from "../assets/borabora.jpg";
import bora2 from "../assets/borabora2.jpg";
import mal from "../assets/maldives.jpg";
import mal2 from "../assets/maldives2.jpg";
import key from "../assets/keywest.jpg";
import '../App.css'
export const Destinations = () => {
  return (
    <div name='destinations' className='destinations'>
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className="img-container">
          <img className='span-3 image-grid-row-2' src={bora} alt="/" />
          <img src={bora2} alt="/" />
          <img src={mal} alt="/" />
          <img src={mal2} alt="/" />
          <img src={key} alt="/" />
        </div>
      </div>
    </div>
  );
};
