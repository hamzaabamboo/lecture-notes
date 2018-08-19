import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import TopAppBar from "../components/TopAppBar";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header = <TopAppBar title="Ham's lecture notes" />;
    // if (location.pathname === "/") {
    //   header = (
    //     <h1>
    //       <Link to={"/"}>Ham's lecture notes</Link>
    //     </h1>
    //   );
    // } else {
    //   header = (
    //     <h3>
    //       <Link to={"/"}>Ham's lecture notes</Link>
    //     </h3>
    //   );
    // }
    return (
      <div>
        {header}
        {children()}
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
};

export default withRoot(withStyles(styles)(Template));
