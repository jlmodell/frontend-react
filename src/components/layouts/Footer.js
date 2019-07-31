import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#7851A9"
  },
  grow: {
    flexGrow: 1
  },
  typography: {
    fontSize: 12
  },
  copyrightIcon: {
    fontSize: 12
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <Typography className={classes.typography}>
            <CopyrightIcon className={classes.copyrightIcon} /> 2019{" "}
            <b>Busse Hospital Disposables</b>
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Footer;
