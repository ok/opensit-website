import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { getYtEmbedUrl, getSlug } from "../components/helper.js"

export default ({ pageContext: { session } }) => {
  const sessionDate = new Date(session.event.date)
  session.event.year = sessionDate.getFullYear()
  session.event.path = `/${getSlug(session.event.insideTrack.hashtag)}`

  return (
    <Layout>
      <SEO title="Session" />
      <div className="row">
        <div className="col-sm-12">
          <h1>{session.title}</h1>
          <p>{session.speaker} at <Link to={`${session.event.path}`}>{session.event.insideTrack.name} {session.event.year}</Link></p>
          <iframe title={session.title} width="560" height="315" src={getYtEmbedUrl(session.recordingUrl)} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div>
            {session.topics.map((item, index) => (
              <span className="badge badge-primary">{item} </span>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  )
}