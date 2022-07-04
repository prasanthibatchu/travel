import React from "react";
import "../App.css";
import Video from "../assets/maldivesVideo.mp4";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Videos = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First class Travel</h1>
        <h2>Top 1% Locations worldwide</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <Button>
              <SearchIcon />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
