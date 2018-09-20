import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Divider,
  List,
  Drawer,
  IconButton,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { navigateTo, withPrefix } from "gatsby-link";

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

class SideDrawer extends React.Component {
  render() {
    const { classes, handleDrawerClose, subjects, mobileOpen } = this.props;
    const drawerContent = (
      <React.Fragment>
        <List>
          <ListItem
            component="a"
            button
            onClick={() => navigateTo(withPrefix("/"))}
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
          {subjects.map(e => (
            <ListItem
              key={e}
              component="a"
              button
              onClick={() =>
                navigateTo(
                  withPrefix("/" + e.toLowerCase().replace(/\s/g, "-"))
                )
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
export default withStyles(styles)(SideDrawer);
