import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"
import BlogPost from "../components/blog-post"

const renderHighlight = highlight => {
  const components = {
    ContentfulProduct: Product,
    ContentfulBlogPost: BlogPost,
  }
  const HighlightComponent = components[highlight.__typename]
  return <HighlightComponent data={highlight} />
}

export default ({ data }) => {
  const landingPage = data.contentfulLandingPage

  return (
    <Layout>
      <SEO title={landingPage.title} />
      <h1 className="text-center text-5xl">{landingPage.title}</h1>
      {landingPage.highlights.map(highlight => renderHighlight(highlight))}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulLandingPage(slug: { eq: $slug }) {
      title
      highlights {
        __typename
        ... on ContentfulBlogPost {
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
        ... on ContentfulProduct {
          name
          slug
          price
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
