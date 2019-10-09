/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulLandingPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulLandingPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/landing-page.js`),
      context: { slug: node.slug },
    })
  })
}

exports.sourceNodes = ({ actions }) => {}
