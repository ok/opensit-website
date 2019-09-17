import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default ({ pageContext: { session } }) => (
  <Layout>
    <SEO title="Session" />
    <h1>{session.title}</h1>
    <p>{session.speaker}</p>
    <Link to={`${session.event.path}`}>{session.event.insideTrack.name}</Link>
    <p>{session.recordingUrl}</p>
  </Layout>
)