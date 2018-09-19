import React from "react";
import PropTypes from "prop-types";
import TopAppBar from "../components/TopAppBar";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import "../prism-theme.css";
import SideDrawer from "../components/SideDrawer";
import push from "gatsby-link";
const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  },
  content: {
    flexGrow: 1
  },
  main: {
    display: "flex",
    flexDirection: "columns",
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
    const { children, classes, data } = this.props;
    const { mobileOpen } = this.state;
    const posts = data.allMarkdownRemark.edges;
    const subjects = Array.from(
      new Set(posts.map(e => e.node.frontmatter.subject))
    );
    const header = (
      <TopAppBar
        title="Ham's lecture notes"
        handleClick={() => this.setState({ mobileOpen: true })}
      />
    );
    const drawer = (
      <SideDrawer
        mobileOpen={mobileOpen}
        handleDrawerClose={this.handleDrawerClose}
        subjects={subjects}
      />
    );
    return (
      <div>
        {header}
        <div className={classes.main}>
          {drawer}
          <div className={classes.content}>{children()}</div>
        </div>
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

export const pageQuery = graphql`
  query getSubjects {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            subject
          }
        }
      }
    }
  }
`;
