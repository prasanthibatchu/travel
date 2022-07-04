import React from 'react'
import { Videos } from "./video";
import { Destinations } from "./destinations";
import { Search } from "./search";
import { Selects } from "./select";
import { ImgCarousel } from "./carousel";
export const Home=()=>{
    return(
        <div>
        <Videos />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      </div>
    )
}