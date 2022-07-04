import React from "react";
import { Header } from "./components/header";
import { Videos } from "./components/video";
import { Destinations } from "./components/destinations";
import { Search } from "./components/search";
import { Selects } from "./components/select";
import { Footer } from "./components/footer";
import {ImgCarousel} from './components/carousel'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Videos />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
