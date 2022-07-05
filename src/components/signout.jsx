import React,{ useContext, useEffect } from 'react'
import {Container,Box,Grid,Button} from '@mui/material'
import {UserContext} from './context'
export const Signout=()=>{
   
  const {userProfile,setUserProfile}=useContext(UserContext)
  useEffect(()=>{
      console.log(userProfile)
  },[])
    return(
        <div>
           <h1>Signup Form</h1>
            <Container maxWidth="sm">
          <Box m={10} p={8} sx={{ backgroundColor: "aliceblue" }}>
          {userProfile ? (
        <h3>user details are {"  " + userProfile && userProfile.user_email} </h3>
      ): (
        <p>no user logged in</p>
      )} 
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item>
                <a href='/login'>
              <Button variant='contained' type='submit' onClick={()=>{
                setUserProfile(null)
                localStorage.removeItem("Email")
                localStorage.removeItem("Password")
            }} >Logout</Button></a>
              </Grid>
              </Grid>
              </Box>
              </Container>
        </div>
    )
}