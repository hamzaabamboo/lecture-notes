import React from "react";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import "../prism-theme.css";
import { Helmet } from "react-helmet";
import { get } from "lodash";
import { graphql } from "gatsby";
import SubjectCard from "../components/SubjectCard";
import { Typography } from "@material-ui/core";
import { navigateTo, withPrefix } from "gatsby-link";

const styles = theme => ({
  root: {
    width: "80%",
    margin: "0 auto",
    padding: "25px 0"
  }
});

class LectureList extends React.Component {
  render() {
    // const { subject } = this.props.pageContext;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const posts = this.props.data.allMarkdownRemark.edges;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug;
          const subject = get(node, "frontmatter.subject");
          return (
            <SubjectCard
              title={subject}
              key={node.fields.slug}
              onClick={() => navigateTo(withPrefix(node.fields.slug))}
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

export default withRoot(withStyles(styles)(LectureList));

export const pageQuery = graphql`
  query SubjectByName($subject: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { subject: { eq: $subject } } }
    ) {
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
