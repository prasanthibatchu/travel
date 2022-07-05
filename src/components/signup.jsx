import {
    Container,
    Box,
    Grid,
    Button    
  } from "@mui/material";
  import React, {  useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { ReusableTextField } from "./reusabletext";


 
  export const Signup = () => {
    const [user, setUsers] = useState({
      name: "",
      email: "",
      phno: "",
      pass: "",
      conpass: "",
    });
    const [err, setErr] = useState(0);
    let history=useNavigate()
    const validataion = () => {
      setErr(0);
      if (user.name === "") {
        setErr(1);
        alert("please enter name");
      } else if (!user.email.includes("@")) {
        setErr(2);
        alert("please enter email");
      } else if (user.phno.length !== 10) {
        setErr(3);
        alert("please enter phno");
      } else if (user.pass < 6) {
        setErr(4);
        alert("please enter password");
      } else if (user.conpass < 6) {
        setErr(5);
        alert("please confirm password");
      } else if (user.pass !== user.conpass) {
        alert("mismatch pass");
      } else {
       console.log(user)
       history('/login')
      }
    };
    
    const onChangeValue = (e) => {
      setUsers({ ...user, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
         <h1>Signup Form</h1>
        <Container maxWidth="sm">

          <Box m={10} p={8} sx={{ backgroundColor: "aliceblue" }}>
           
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item>
                <ReusableTextField
                  label="Name"
                  variant="outlined"
                  name="name"
                  val={user.name}
                  change={onChangeValue}
                  error={err === 1 && true}
                />
              </Grid>
              <Grid item>
                <ReusableTextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  val={user.email}
                  change={onChangeValue}
                  error={err === 2 && true}
                />
              </Grid>
              <Grid item>
                <ReusableTextField
                  label="Mobile Number"
                  variant="outlined"
                  name="phno"
                  val={user.phno}
                  change={onChangeValue}
                  error={err === 3 && true}
                />
              </Grid>
              <Grid item>
                <ReusableTextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="pass"
                  val={user.pass}
                  change={onChangeValue}
                  error={err === 4 && true}
                />
              </Grid>
              <Grid item>
                <ReusableTextField
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  name="conpass"
                  val={user.conpass}
                  change={onChangeValue}
                  error={err === 5 && true}
                />
              </Grid>
             
              <Grid item>
                <Button variant="contained" onClick={validataion}>
                  Submit
                </Button>
                <p>If you have account please <a href="/login">Login</a></p>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    );
  };