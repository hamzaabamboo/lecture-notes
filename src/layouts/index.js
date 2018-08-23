import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import TopAppBar from "../components/TopAppBar";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import "prismjs/themes/prism-twilight.css";
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
