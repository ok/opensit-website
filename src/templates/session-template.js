import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { getYtEmbedUrl } from "../components/yt-helper.js"

export default ({ pageContext: { session } }) => (
  <Layout>
    <SEO title="Session" />
    <h1>{session.title}</h1>
    <p>{session.speaker}</p>
    <Link to={`${session.event.path}`}>{session.event.insideTrack.name}</Link>
    <iframe width="560" height="315" src={session.recordingUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </Layout>
)