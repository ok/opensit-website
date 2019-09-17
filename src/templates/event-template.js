import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Link } from "gatsby"

export default ({ pageContext: { event } }) => (
  <Layout>
    <SEO title="Inside Track Event" />
    <h1>{event.insideTrack.name} {event.year}</h1>
  </Layout>
)