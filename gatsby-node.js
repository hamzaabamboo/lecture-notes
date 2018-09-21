const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return Promise.all([
    createAllPages({ graphql, actions }, createPage),
    createAllSubjects({ graphql, actions }, createPage)
  ]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

const createAllSubjects = async (
  { graphql, actions },
  createPage
) => {
  const subjectList = path.resolve("./src/templates/subject-list.js");
  try {
    const result = await graphql(
      `
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
      `
    );
    if (result.errors) throw 400;
    const posts = result.data.allMarkdownRemark.edges;
    const subjects = new Set(posts.map(e => e.node.frontmatter.subject));
    subjects.forEach(subject => {
      if (subject)
        createPage({
          path: subject
            .toLowerCase()
            .split(" ")
            .join("-"),
          component: subjectList,
          context: {
            subject
          }
        });
    });
    return;
  } catch (error) {
    throw error;
  }
};

const createAllPages = ({ graphql }, createPage) => {
  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    subject
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next
            }
          });
        });
      })
    );
  });
};
