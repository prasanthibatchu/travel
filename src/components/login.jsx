import React from "react";
import {Container,Box,Grid,TextField,Button} from '@mui/material'
export const Login=()=>{
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
                    // value={user.email}
                    // error={err === 1 && true}
                    // onChange={onChangeValue}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="password"
                    variant="outlined"
                    name="pass"
                    type="password"
                    // value={user.pass}
                    // error={err === 2 && true}
                    // onChange={onChangeValue}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" >
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
    