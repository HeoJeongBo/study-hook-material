import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";

const useStylesTextField = makeStyles(theme => ({
  root: {
    "& $notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.23)"
    },
    "&:hover $notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.23)"
    },
    "&$focused $notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.23)"
    }
  },
  focused: {},
  notchedOutline: {},
  labelRoot: {
    color: "rgba(0, 0, 0, 0.87)",
    "&$focused": {
      color: "whitesmoke"
    }
  },
  intputRoot: {},
  submit: {
    margin: theme.spacing(2, 0, 2)
  }
}));

const validate = values => {
  const errors = {};
  if (!values.userId) {
    errors.userId = "userId Required";
  } else if (values.userId !== "test") {
    errors.userId = "test 아님";
  }

  if (!values.password) {
    errors.password = "password Required";
  } else if (values.password !== "test") {
    errors.password = "test 아님";
  }
  return errors;
};

const LoginForm = () => {
  const textFieldStyle = useStylesTextField();
  const dispatch = useDispatch();

  const loginFormik = useFormik({
    initialValues: {
      userId: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      dispatch({ type: "SAGA_LOGIN", payload: values });
    }
  });

  return (
    <form onSubmit={loginFormik.handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        id="userId"
        label="ID"
        autoFocus
        fullWidth
        autoComplete="userId"
        onChange={loginFormik.handleChange}
        value={loginFormik.values.userId}
        error={Boolean(loginFormik.touched.userId && loginFormik.errors.userId)}
        helperText={loginFormik.touched.userId && loginFormik.errors.userId}
        InputLabelProps={{
          classes: {
            root: textFieldStyle.labelRoot,
            focused: textFieldStyle.focused
          }
        }}
        InputProps={{
          classes: {
            root: textFieldStyle.root,
            focused: textFieldStyle.focused,
            notchedOutline: textFieldStyle.notchedOutline
          }
        }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="password"
        label="Password"
        type="password"
        fullWidth
        onChange={loginFormik.handleChange}
        value={loginFormik.values.password}
        error={Boolean(loginFormik.touched.password && loginFormik.errors.password)}
        helperText={loginFormik.touched.password && loginFormik.errors.password}
        InputLabelProps={{
          classes: {
            root: textFieldStyle.labelRoot,
            focused: textFieldStyle.focused
          }
        }}
        InputProps={{
          classes: {
            root: textFieldStyle.root,
            focused: textFieldStyle.focused,
            notchedOutline: textFieldStyle.notchedOutline
          }
        }}
      />
      <Button type="submit" fullWidth variant="contained" color="primary" className={textFieldStyle.submit}>
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
