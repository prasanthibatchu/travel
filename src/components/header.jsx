import React from "react";
import { AppBar, Toolbar, Grid,Button,ButtonGroup } from "@mui/material";
import logo from "../assets/logo.png";
import {  Link } from "react-router-dom";

export const Header = () => {
  return (

    <div className="navbar">
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
       
        <Toolbar>
          <a href="/">
            <img
              src={logo}
              height="100"
              width="150"
             
            />
          </a>
         
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <ButtonGroup>
              <Button variant="text" component={Link} to="/login" style={{color:"white"}}>
                <h3>Signup</h3>
              </Button>
              </ButtonGroup>
              </Grid>
        </Toolbar>
      </AppBar>
     
      </div>
      
    
    
  );
};
