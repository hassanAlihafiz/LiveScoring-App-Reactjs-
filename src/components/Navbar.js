import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const Navbar = () => {
  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Live Score</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
