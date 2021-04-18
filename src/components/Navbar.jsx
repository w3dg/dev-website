import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ margin: 0, background: "#0B0B0B38" }}>
        <Toolbar id="toolbar">
          <Typography variant="h4" id="title" className={classes.title}>
            DG
          </Typography>
          <div id="buttons">
            <Button id="nav-btn" color="inherit">
              <a href="/">home</a>
            </Button>
            <Button id="nav-btn" color="inherit">
              <a href="/youtube">youtube</a>
            </Button>
            <Button id="nav-btn" color="inherit">
              <a href="/twitch">twitch</a>
            </Button>
            <Button id="nav-btn" color="inherit">
              <a href="/github">github</a>
            </Button>
            <Button id="nav-btn" color="inherit">
              <a href="/twitter">twitter</a>
            </Button>
            <Button id="nav-btn" color="inherit">
              <a href="/instagram">instagram</a>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
