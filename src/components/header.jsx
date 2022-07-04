import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    
      <div  className="navbar">
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
        <Toolbar>
        <a href="/">
            <img src={logo} alt="maldivas" width="150" height="100"/>
          </a>
      
        </Toolbar>
      </AppBar>
      </div>
    
   
   
  );
};
