import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import BlogPreview from "../components/blog-preview"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Laguna Dev"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        
        <h1>
          Hello World{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to An enthusiastic look to tech and change</p>
        <p>This is a WIP website made by Miguel Laguna, aiming to be a digital CV and a place to share my knowlegde and curiosity about software development in its current state</p>
        <Link to="/blog/">
          <Button marginTop="35px">Hey im the Blog</Button>
        </Link>
        <BlogPreview/>
      </Layout>
    )
  }
}

export default IndexPage
