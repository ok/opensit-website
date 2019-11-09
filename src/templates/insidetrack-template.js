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
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top">
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-3" style={{"marginBottom" : "1rem"}}>
            <div className="insideTrack-logo">
              <img src={insideTrack.logo.url} alt="inside track logo"></img>
            </div>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-9">
            <div className="">
              <h2>{insideTrack.name}</h2>
              <div>website: <a href={insideTrack.websiteUrl}>{insideTrack.websiteUrl}</a></div>
              <div>hashtag: <a href={`https://twitter.com/hashtag/${insideTrack.hashtag}`}>#{insideTrack.hashtag}</a></div>
            </div>
          </div>
        </div>
      </nav>

      {insideTrack.events.map(event => (
      <div className="row mt-4" style={{"marginBottom" : "1rem"}} key={event.id}>
        <div className="ok-inside-track-date col-sm-12 col-md-3">
          <div className="card-group">
            <div className="card">
              <div className="card-body">Date: {Moment(event.date).format('D MMM YYYY')}</div>
            </div>
          </div>
        </div>
        <div className="card-deck col-sm-12 col-md-9">
          {event.sessions.map(session => (
          <div className="card ok-card card-custom-style">
            <Link to={`/${getSlug(insideTrack.hashtag)}/${event.year}/${ getSlug(session.title) }`} key={session.id}>
              <img className="card-img-top" src={ getYtThumbnailUrl(session.recordingUrl) } alt="Video thumbnail"/>
              <div className="card-body">
                  <p className="card-text"><small className="text-muted">{session.title}</small></p>
              </div>
            </Link>
          </div>
          ))}
        </div>
      </div>
      ))}
    </Layout>
  )
}