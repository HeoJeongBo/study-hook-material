import React, { useState, useEffect } from "react";
import { Grid, CssBaseline, Avatar, Typography, Box } from "@material-ui/core";
import LockOutlined from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import LoginBgImage from "resource/login_background.jpg";
import LoginForm from "./LoginForm";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Your Website
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${LoginBgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(0.25)"
  },
  signinContainer: {
    backgroundColor: "grey"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white"
  },
  avartar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  defaultTypo: {
    color: "white"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// #90caf9

const Login = () => {
  const styles = useStyles();

  return (
    <Grid container component="main" className={styles.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} className={styles.signinContainer}>
        <div className={styles.paper}>
          <Avatar className={styles.avartar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" className={styles.defaultTypo}>
            개인의 여행일지
          </Typography>
          <LoginForm />
          <Grid container>
            <Grid item xs>
              ID / 비밀번호 찾기
            </Grid>
            <Grid item>회원가입</Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
