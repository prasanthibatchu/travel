import React from "react";
import { AppBar, Toolbar, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const Header = () => {
  return (
    
      <div  className="navbar">
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
        <Toolbar>
        <h3>Hello...</h3>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <SearchIcon />
            <PersonOutlineIcon />
          </Grid>
        </Toolbar>
      </AppBar>
      </div>
    
   
   
  );
};
