import React, { useState,useContext,useEffect } from "react";
import {Container,Box,Grid,TextField,Button} from '@mui/material'
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context";
export const Login=()=>{
  const [user,setUser]=useState({email:"",pass:""})
  const [err,setErr]=useState(0)
  let history=useNavigate()
  const { setUserProfile } = useContext(UserContext);
  useEffect(() => {
    console.log(localStorage.getItem("Email"));
    setUserProfile({ user_email: localStorage.getItem("Email") });
  }, []);
  const Valid=()=>{
    if (localStorage.getItem("Email")) {
      console.log(localStorage.getItem("Email"));
      setUserProfile({ user_email: localStorage.getItem("Email") });
     alert("already user exist in system")
      history("/logout");
    } else {
    setErr(0)
    if(!user.email.includes("@")){
      setErr(1)
      alert("please enter ur mail id")
    }
    else if(user.pass.length < 6){
      setErr(2)
      alert("please enter correct password")
    }
    else{
      localStorage.getItem("Email")
          ? console.log(localStorage.getItem("Email"))
          : console.log("no user login");
        localStorage.setItem("Email", user.email);
        localStorage.setItem("Password", user.pass);

        setUserProfile({ user_email: user.email });
        // console.log(user_email);
       alert("user login successfully")
      history('/book')
      console.log(user)
    }
  }
  }
  const onChangeValue=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
 
    return(
        <div>
       <h1>Login Form</h1>
        <Container maxWidth="sm">
        
          <Box m={5} p={5} sx={{ backgroundColor: "aliceblue" }}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="stretch"
              mt={3}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={user.email}
                    error={err === 1 && true}
                    onChange={onChangeValue}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="password"
                    variant="outlined"
                    name="pass"
                    type="password"
                    value={user.pass}
                    error={err === 2 && true}
                    onChange={onChangeValue}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" onClick={Valid} >
                    Login
                  </Button>
                  <p>If you don't have account please <a href="/signup">signup</a></p>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    );
  };
    