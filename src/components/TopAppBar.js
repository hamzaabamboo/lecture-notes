import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";
import Link from "gatsby-link";

const styles = theme => ({
  root: {
    position: "relative",
    flexGrow: 1,
    zIndex: 9
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  title: {
    color: "white"
  }
});

const TopAppBar = props => {
  const { classes, title, handleClick } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Home"
            onClick={handleClick}
          >
            <ListIcon />
          </IconButton>
          <Link to="/" className={classes.title}>
            <Typography variant="title" component="span" color="inherit">
              {title}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopAppBar);
