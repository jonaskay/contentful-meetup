import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPost from "../components/blog-post"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center text-5xl">Blog</h1>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <BlogPost data={node} />
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          author
          heading
          slug
          leadParagraph {
            leadParagraph
          }
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default IndexPage
