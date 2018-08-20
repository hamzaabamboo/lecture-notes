import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";

import Bio from "../components/Bio";

import "katex/dist/katex.min.css";
import { withStyles, Grid, Paper } from "@material-ui/core";

import "../typography.css";

const styles = theme => ({
  root: {
    width: "80%",
    margin: "0 auto",
    paddingTop: theme.spacing.unit * 5
  },
  paper: {
    padding: theme.spacing.unit
  }
});
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const { previous, next } = this.props.pathContext;
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <Bio />

            <ul>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
