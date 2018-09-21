import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import rehypeReact from "rehype-react";
import Typography from "@material-ui/core/Typography";
import "katex/dist/katex.min.css";
import { withStyles, Grid, Paper } from "@material-ui/core";
import { graphql } from "gatsby";
import "../typography.css";
import "./content.scss";

const styles = theme => ({
  page: {
    width: "90%",
    margin: "0 auto",
    paddingTop: theme.spacing.unit * 5
  },
  paper: {
    padding: theme.spacing.unit * 3
  },
  p: {
    marginBottom: theme.spacing.unit
  },
  titles: {
    marginBottom: theme.spacing.unit * 1.5
  }
});

const H1 = ({ children, ...rest }) => (
  <Typography component="h1" variant="title">
    {children}
  </Typography>
);
const H2 = ({ children, ...rest }) => (
  <Typography component="h2" variant="title">
    {children}
  </Typography>
);
const H3 = ({ children, ...rest }) => (
  <Typography component="h3" variant="title">
    {children}
  </Typography>
);
const H4 = ({ children, ...rest }) => (
  <Typography component="h4" variant="title">
    {children}
  </Typography>
);
const H5 = ({ children, ...rest }) => (
  <Typography component="h5">{children}</Typography>
);
const H6 = ({ children, ...rest }) => (
  <Typography component="h6">{children}</Typography>
);
const P = ({ children, ...rest }) => (
  <Typography component="p">{children}</Typography>
);
const Li = ({ children, ...rest }) => (
  <Typography component="li">{children}</Typography>
);
const Ul = ({ children }) => <ul>{children}</ul>;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: withStyles(styles)(H1),
    h2: withStyles(styles)(H2),
    h3: withStyles(styles)(H3),
    h4: withStyles(styles)(H4),
    h5: withStyles(styles)(H5),
    h6: withStyles(styles)(H6),
    p: withStyles(styles)(P),
    ul: withStyles(styles)(Ul),
    li: withStyles(styles)(Li),
    strong: ({ children }) => <strong>{children}</strong>
  }
}).Compiler;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const { previous, next } = this.props.pageContext;
    const { classes } = this.props;

    return (
      <Grid container className={classes.page}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <Typography component="h1" variant="display3">
              {post.frontmatter.title}
            </Typography>
            <Typography component="p" variant="subheading">
              {post.frontmatter.subject} - {post.frontmatter.date}
            </Typography>
            <br />
            <div className="content">{renderAst(post.htmlAst)}</div>
            <hr />
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
        subject
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
