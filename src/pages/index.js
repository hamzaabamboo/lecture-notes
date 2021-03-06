import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { withStyles } from "@material-ui/core";
import Bio from "../components/Bio";
import Typography from "@material-ui/core/Typography";
import SubjectCard from "../components/SubjectCard";
import { withPrefix } from "gatsby-link";
import { graphql, navigate } from "gatsby";

const styles = theme => ({
  root: {
    width: "90%",
    margin: "0 auto",
    paddingTop: theme.spacing.unit
  }
});

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Helmet>
          <title>{siteTitle}</title>
          <meta description="Lecture notes for ice" />
        </Helmet>
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug;
          const subject = get(node, "frontmatter.subject");
          return (
            <SubjectCard
              title={subject}
              key={node.fields.slug}
              onClick={() => navigate(withPrefix(node.fields.slug))}
            >
              <Typography variant="headline" component="h3">
                {title}
              </Typography>
              <Typography component="small">{node.frontmatter.date}</Typography>
              <Typography
                component="p"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
            </SubjectCard>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(BlogIndex);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            subject
          }
        }
      }
    }
  }
`;
