import React from "react";
import PropTypes from "prop-types";
import TopAppBar from "../components/TopAppBar";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import SideDrawer from "../components/SideDrawer";
import "../prism-theme.css";
import "./index.scss";
const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  },
  content: {
    maxWidth: "100%",
    flexGrow: 1
  },
  main: {
    display: "flex",
    flexDirection: "columns",
    marginTop: "48px",
    alignItems: "stretch",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  left: {
    marginLeft: -240
  }
});

class Template extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  render() {
    const { children, classes } = this.props;
    const { mobileOpen } = this.state;

    const header = (
      <TopAppBar
        title="Ham's lecture notes"
        handleClick={() => {
          this.setState({ mobileOpen: true })
          console.log('clicked');
        }}
      />
    );
    const drawer = (
      <SideDrawer
        mobileOpen={mobileOpen}
        handleDrawerClose={this.handleDrawerClose}
      />
    );
    return (
      <div>
        {header}
        <div className={classes.main}>
          {drawer}
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
  route: PropTypes.object
};

export default withRoot(withStyles(styles)(Template));
