import React from "react";
import { Header } from "./components/header";
import { Home } from "./components/body";
import { Footer } from "./components/footer";

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/login";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
     
     <Router> 
      <Header />
              <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
              </Routes>
     
     </Router>
        
     
      
      
    </div>
    <Footer />
    </div>
  );
}

export default App;
