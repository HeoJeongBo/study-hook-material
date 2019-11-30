import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

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

const LoginForm = () => {
  const [formValue, setForm] = useState({ userId: "", password: "" });
  const textFieldStyle = useStylesTextField();
  const dispatch = useDispatch();

  //   const { location, action } = useSelector(state => {
  //     const { location, action } = state.router;
  //     return {
  //       location,
  //       action
  //     };
  //   }); // useSelector, useDispatch

  const handleChange = e => {
    setForm({ ...formValue, [e.target.id]: e.target.value });
  };

  const onClickSubmit = () => {
    dispatch({ type: "SAGA_LOGIN", payload: formValue });
  };

  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        id="userId"
        label="ID"
        autoFocus
        fullWidth
        autoComplete="userId"
        onChange={handleChange}
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
        onChange={handleChange}
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={textFieldStyle.submit}
        onClick={onClickSubmit}
      >
        Log In
      </Button>
    </>
  );
};

export default LoginForm;
