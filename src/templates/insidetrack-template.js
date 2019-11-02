import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Moment from 'moment';
import { Link } from "gatsby"
import { getYtThumbnailUrl, getSlug } from "../components/helper.js"

export default ({ pageContext: { insideTrack } }) => {
  insideTrack.events.forEach(event => {
    var eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <SEO title="Inside Track Event" />
      <div className="row">
        <div className="col-12">
          <h2>{insideTrack.name}</h2>
        </div>
      </div>
      {insideTrack.events.map(event => (
      <div className="row" style={{"marginBottom" : "1rem"}} key={event.id}>
        <div className="col-lg-3 col-md-12">
          <div className="card-group">
            <div className="card">
              <div className="card-body">Date: {Moment(event.date).format('D MMM YYYY')}</div>
            </div>
          </div>
        </div>
        <div className="card-deck col-lg-9 col-md-12">
        {event.sessions.map(session => (
        <Link to={`/${getSlug(insideTrack.hashtag)}/${event.year}/${ getSlug(session.title) }`} key={session.id}>
          <div className="card card-custom-style">
            <img className="card-img-top" src={ getYtThumbnailUrl(session.recordingUrl) } alt="Video thumbnail"/>
            <div className="card-body">
                <p className="card-text"><small className="text-muted">{session.title}</small></p>
            </div>
          </div>
        </Link>
        ))}
        </div>
      </div>
      ))}
    </Layout>
  )
}