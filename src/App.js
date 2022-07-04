import React from 'react';
import {Header} from './components/header'
import { Videos } from './components/video';
import { Destinations } from './components/destinations';
import { Search } from './components/search';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  
    return (
      <div className="App">
        {/* <Router> */}
        <Header />
        {/* <Routes>
         
        </Routes> */}
       <Videos />
       <Destinations />
        {/* </Router> */}
       <Search />
      </div>
    );
  
}

export default App;
