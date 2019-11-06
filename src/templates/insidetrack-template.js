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
      <div className="card-group">
        <div className="card col-sm-4 col-md-3 col-lg-2" style={{"marginBottom" : "1rem"}}>
          <div className="card-body">
            <img src={insideTrack.logo.url} alt="inside track logo"></img>
          </div>
        </div>
        <div className="card col-sm-8 col-md-9 col-lg-12" style={{"marginBottom" : "1rem"}}>
          <div className="card-body">
            <h2>{insideTrack.name}</h2>
            <p>website: <a href={insideTrack.websiteUrl}>{insideTrack.websiteUrl}</a></p>
            <p>hashtag: <a href={`https://twitter.com/hashtag/${insideTrack.hashtag}`}>#{insideTrack.hashtag}</a></p>
          </div>
        </div>
      </div>
     
      {insideTrack.events.map(event => (
      <div className="row" style={{"marginBottom" : "1rem"}} key={event.id}>
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