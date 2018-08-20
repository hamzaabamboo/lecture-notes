import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import rehypeReact from "rehype-react";
import Bio from "../components/Bio";
import Typography from "@material-ui/core/Typography";
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
    padding: theme.spacing.unit * 3
  }
});

const H1 = ({ children, ...rest }) => (
  <Typography component="h1" variant="display1" {...rest}>
    {children}
  </Typography>
);
const H2 = ({ children, ...rest }) => (
  <Typography component="h2" variant="title" {...rest}>
    {children}
  </Typography>
);
const H3 = ({ children, ...rest }) => (
  <Typography component="h3" variant="title" {...rest}>
    {children}
  </Typography>
);
const H4 = ({ children, ...rest }) => (
  <Typography component="h4" variant="title" {...rest}>
    {children}
  </Typography>
);
const H5 = ({ children, ...rest }) => (
  <Typography component="h5" {...rest}>
    {children}
  </Typography>
);
const H6 = ({ children, ...rest }) => (
  <Typography component="h6" {...rest}>
    {children}
  </Typography>
);
const P = ({ children, ...rest }) => (
  <Typography component="p" {...rest}>
    {children}
  </Typography>
);
const Li = ({ children, ...rest }) => (
  <Typography component="li" {...rest}>
    {children}
  </Typography>
);
const Ul = ({ children, ...rest }) => (
  <Typography component="ul" {...rest}>
    {children}
  </Typography>
);

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    ul: Ul,
    li: Li
  }
}).Compiler;

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
            <Typography component="h1" variant="display3">
              {post.frontmatter.title}
            </Typography>
            <Typography component="p" variant="subheading">
              {post.frontmatter.date}
            </Typography>
            <br />
            {renderAst(post.htmlAst)}
            <hr />
            <Bio />

            <ul>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.subject} -{" "}
                    {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.subject} - {next.frontmatter.title} →
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
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY") 
      }
    }
  }
`;  
