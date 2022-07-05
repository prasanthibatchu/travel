import React,{useState,useEffect} from "react";
import { Header } from "./components/header";
import { Home } from "./components/body";
import { Footer } from "./components/footer";
import { Book } from "./components/book";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import {Signup} from './components/signup'
import {Signout} from './components/signout'
import {UserContext} from './components/context'
function App() {
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    var localdata = localStorage.getItem("Email");
    if (localdata != null) {
      setUserProfile({ user_email: localStorage.getItem("Email") });
    }
  }, []);
  return (
    <div className="page-container">
      <div className="content-wrap">
      <UserContext.Provider value={{ userProfile, setUserProfile }}>
     <Router> 
      <Header />
              <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/book" element={<Book />} />
                <Route path="/logout" element={<Signout />} />
              </Routes>
     
     </Router>
        
     
     </UserContext.Provider>
      
    </div>
    <Footer />
    </div>
  );
}

export default App;
