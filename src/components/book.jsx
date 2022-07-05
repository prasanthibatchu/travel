import React,{useContext} from "react";
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Button
} from "@mui/material";
import { red } from "@mui/material/colors";
import mal from '../assets/maldives.jpg'
import bora from '../assets/borabora.jpg'
import key from '../assets/keywest.jpg'
import { UserContext } from "./context";
export const Book = () => {
    const { userProfile, setUserProfile } = useContext(UserContext);
  return (
    <div>
      <h1>BOOK NOW</h1>
      {userProfile ? (
        <React.Fragment>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <a href="https://www.makemytrip.com/" target="_blank">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>P</Avatar>}
                title="Prasanthi"
              />
              <CardMedia
                component="img"
                height="194"
                img
                src={mal}
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Button variant="contained">BOOK NOW</Button>
              </CardContent>
            </Card></a>
            <a href="https://www.makemytrip.com/" target="_blank">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>P</Avatar>}
                title="Prasanthi"
              />
              <CardMedia
                component="img"
                height="194"
                img
                src={bora}
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Button variant="contained">BOOK NOW</Button>
              </CardContent>
            </Card></a>
            <a href="https://www.makemytrip.com/" target="_blank">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>P</Avatar>}
                title="Prasanthi"
              />
              <CardMedia
                component="img"
                height="194"
                img
                src={key}
                alt="Prasanthi"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Button variant="contained">BOOK NOW</Button>
              </CardContent>
            </Card></a>
          </Grid>
          <br />
          
          <Grid>
            <a href="/logout">
            <Button variant="contained">Signout</Button></a>
          </Grid>
         
        </React.Fragment>
     ) : (
        <p>no user logged in</p>
      )}
    </div>
  );
};