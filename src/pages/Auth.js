import React from "react";
import axios from "axios";

import "./Auth.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 4)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    flex: 1
  },
  formControl: {
    margin: theme.spacing(1)
  },
  button: {
    background: "rgba(120,81,169,0.5)",
    marginRight: "1rem"
  },
  typography: {
    display: "flex",
    justifyContent: "center"
  }
}));

const Auth = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false
  });
  const classes = useStyles();

  const handleChange = prop => e => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const setShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const submitHandler = async e => {
    e.preventDefault();

    let url = `${process.env.REACT_APP_API}users/login/`;
    let data = {
      email: values.email,
      password: values.password
    };

    const res = await axios.post(url, data);

    window.localStorage.setItem("token", res.data.token);
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.typography} variant="h2">
        Login
      </Typography>
      <form className="auth-form" onSubmit={submitHandler}>
        <div className="form-control">
          <FormControl fullWidth>
            <InputLabel>E-mail</InputLabel>
            <Input
              className={classes.input}
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange("email")}
            />
          </FormControl>
        </div>
        <div className="form-control">
          <FormControl fullWidth>
            <InputLabel>Password</InputLabel>
            <Input
              className={classes.input}
              type={values.showPassword ? "text" : "password"}
              id="password"
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={setShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="form-actions">
          <Button type="submit" className={classes.button}>
            Login
          </Button>
          <Button className={classes.button}>Register</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Auth;
