import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography
        component={Link}
        to="/"
        className={classes.heading}
        variant="h2"
        align="center"
      >
        Danielle Tyler
      </Typography>
    </AppBar>
  );
};

export default Navbar;
