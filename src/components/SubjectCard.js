import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const SubjectCard = props => {
  const { classes, title, children, onClick } = props;
  return (
    <div className={classes.pos} onClick={onClick}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
          {children}
        </CardContent>
        <CardActions />
      </Card>
    </div>
  );
};

SubjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubjectCard);
