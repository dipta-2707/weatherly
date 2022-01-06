import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../../Assets/logo-fav.png";

function Navbar(props) {
  return (
    <AppBar position="static" sx={{ background: "transparent" }}>
      <Container>
        <Toolbar>
          <img src={logo} alt="logo" width="65px" height="55px" />
          <Typography variant="h4">Weatherly</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
