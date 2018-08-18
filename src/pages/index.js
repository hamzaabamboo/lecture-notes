import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import { withStyles } from "@material-ui/core";
import Bio from "../components/Bio";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug;
          const subject = get(node, "frontmatter.subject");
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                  {title + " - " + subject}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
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
