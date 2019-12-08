import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import testImage from "resource/login_background.jpg";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: 10,
    width: 600
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    padding: 10
  },
  date: {
    padding: 16
  },
  cover: {
    width: 200
  }
}));

const List = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch({ type: "SAGA_ROUTE", payload: { path: "/" } });
    // dispatch(push('/')); push : connected-react-router
  };

  return (
    <Card className={classes.card} onClick={handleCardClick}>
      <div className={classes.details}>
        <CardContent>
          <Typography component="h5" variant="h5">
            첫번째 카드
          </Typography>
          <Typography variant="subtitle1">부가설명</Typography>
        </CardContent>
        <div className={classes.date}>
          <Typography>2019-10-12</Typography>
        </div>
      </div>
      <CardMedia className={classes.cover} image={testImage} title="카드 이미지" />
    </Card>
  );
};

export default List;
