import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check our latest articles</Link>
      </p>
      <p>
        <Link to="/">Go to Homepage</Link>
      </p>
    </Layout>
  )
}

export default NotFound
