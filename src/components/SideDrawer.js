import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  Drawer,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";
import { navigate, graphql, StaticQuery } from "gatsby";
import { withPrefix } from "gatsby-link";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    zIndex: 1,
    position: "relative",
    width: drawerWidth,
    height: "100%",
    minHeight: "calc(100vh - 48px)"
  },
  fullHeight: {
    height: "100%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

const query = graphql`
  {
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
class SideDrawer extends React.Component {
  render() {
    const { classes, handleDrawerClose, mobileOpen, data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const subjects = Array.from(
      new Set(posts.map(e => e.node.frontmatter.subject))
    );
    const drawerContent = (
      <React.Fragment>
        <List>
          <ListItem
            component="a"
            button
            onClick={() => navigate(withPrefix("/"))}
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
          {subjects.map(e => (
            <ListItem
              key={e}
              component="a"
              button
              onClick={() =>
                navigate(withPrefix("/" + e.toLowerCase().replace(/\s/g, "-")))
              }
            >
              <ListItemText>{e}</ListItemText>
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css" className={classes.fullHeight}>
          <Drawer
            variant="permanent"
            className={classes.fullHeight}
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

const StyledDrawer = withStyles(styles, { withTheme: true })(SideDrawer);
export default ({ mobileOpen, handleDrawerClose }) => (
  <StaticQuery
    query={query}
    render={data => (
      <StyledDrawer
        data={data}
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
      />
    )}
  />
);
