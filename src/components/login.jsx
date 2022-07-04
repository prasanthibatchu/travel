import React, { useState } from "react";
import {Container,Box,Grid,TextField,Button} from '@mui/material'
import { useNavigate } from "react-router-dom";

export const Login=()=>{
  const [user,setUser]=useState({email:"",pass:""})
  const [err,setErr]=useState(0)
  let history=useNavigate()
  const Valid=()=>{
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
      history('/')
      console.log(user)
    }
  }
  const onChangeValue=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
 
    return(
        <div style={{backgroundImage:"url('https://robbreport.com/wp-content/uploads/2019/09/vommuli-island-med-1.jpg?w=1000')",backgroundSize: "cover",height: "100vh", marginTop:'-70px',}}>
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
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    );
  };
    