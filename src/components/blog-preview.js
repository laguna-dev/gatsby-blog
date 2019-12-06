import React from "react"
import { Link, graphql,StaticQuery } from "gatsby"

import { rhythm } from "../utils/typography"

function BlogPreview() {

    return(
    <StaticQuery
    query={blogPreviewQuery}
    render={data => {
      const posts = data.allMdx.edges
      return (

<div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
    )
    }}
    />
    )
}

export default BlogPreview

export const blogPreviewQuery = graphql`
  query {
    allMdx(
        limit: 3
        sort: { fields: [frontmatter___date], order: DESC }
        ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`