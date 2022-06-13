import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../../Assets/logo-fav.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar(props) {
  return (
    <AppBar position="static" sx={{ background: "transparent" }}>
      <Container>
        <Toolbar>
          <img src={logo} alt="logo" width="65px" height="55px" />
          
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >Weatherly</Typography>
          <Typography variant="body2" align="right" >Made by Dipta <a href="https://github.com/dipta-2707" target="_blank"><GitHubIcon sx={{color:"#171515"}}></GitHubIcon></a><a href="https://www.linkedin.com/in/dipta-das-254a42183/" target="_blank"><LinkedInIcon sx={{color:"#0072b1"}}></LinkedInIcon></a></Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
