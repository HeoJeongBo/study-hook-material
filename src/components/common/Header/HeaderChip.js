import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip, CssBaseline } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/TagFaces";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15px",
    paddingBottom: "15px"
  },
  chipRoot: {
    backgroundColor: "whitesmoke",
    color: "black",
    "&:hover": {
      backgroundColor: "red",
      color: "white"
    },
    "&:focus": {
      backgroundColor: "green"
    }
  }
}));

const HeaderChip = () => {
  const classes = useStyles();

  const [chipData, setChipData] = useState([
    { key: "0", label: "서울" },
    { key: "1", label: "부산" },
    { key: "2", label: "근교" },
    { key: "3", label: "통영" },
    { key: "4", label: "유럽" },
    { key: "5", label: "동남아" },
    { key: "6", label: "아시아" }
  ]);

  const handleDeleteChip = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      {/* <CssBaseline /> */}
      {chipData.map(data => (
        <Grid item key={data.key}>
          <Chip
            key={data.key}
            label={data.label}
            icon={<FaceIcon />}
            onDelete={handleDeleteChip(data)}
            clickable={true}
            classes={{
              root: classes.chipRoot
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HeaderChip;
