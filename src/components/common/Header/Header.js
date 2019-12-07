import React from "react";
import { useScrollTrigger, CssBaseline, AppBar, Toolbar, Typography, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, fade } from "@material-ui/core/styles";
import HeaderChip from "./HeaderChip";

const headerStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "whitesmoke",
    color: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  search: {
    position: "relative",
    borderRadius: "10px",
    border: "1px solid black",
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const Header = props => {
  const classes = headerStyle();

  return (
    <div>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.root}>
          <Toolbar>
            <IconButton edge="start" color="inherit" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Traveler
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon color="disabled" />
              </div>
              <InputBase
                placeholder="검색"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <HeaderChip />
    </div>
  );
};

export default Header;
