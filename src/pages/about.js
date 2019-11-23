import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="OpenSIT: About" />
    <div className="insideTrack-container">
      <h1>OpenSIT</h1>
      <p>All SAP Inside Track recordings in a single place.</p>
    </div>
  </Layout>
)

export default AboutPage
