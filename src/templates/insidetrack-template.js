import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Moment from 'moment';
import Video from "../components/video"
import { getDisplayUrl } from "../components/helper.js"

export default ({ pageContext: { insideTrack } }) => {
  insideTrack.events.forEach(event => {
    var eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <SEO title="Inside Track Event" />
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-0">
        <div className="row">
          <div className="col-sm-2 col-md-3 " style={{"marginBottom" : "1rem"}}>
            <div className="insideTrack-logo">
              <img src={insideTrack.logo.url} alt="inside track logo"></img>
            </div>
          </div>
          <div className="col-sm-10 col-md-9">
            <h2>{insideTrack.name}</h2>
            <span><a href={insideTrack.websiteUrl}>{getDisplayUrl(insideTrack.websiteUrl)}</a></span> |&nbsp; 
            <span><a href={`https://twitter.com/hashtag/${insideTrack.hashtag}`}>#{insideTrack.hashtag}</a></span>
          </div>
        </div>
      </nav>

      {insideTrack.events.map(event => (
      <div className="row mt-4" style={{"marginBottom" : "1rem"}} key={event.id}>
        <div className={"col-sm-12"}>
          <div  className="row mt-4 mb-2">
            <div className="ok-inside-track-date col-sm-12">
              <h5 className="">Date: {Moment(event.date).format('D MMM YYYY')}</h5>
            </div>
          </div>
          <div className="card-deck card-deck-custom-style">
          {event.sessions.map(session => (
          <Video.Player
            sessionId = {session.id}
            sessionTitle = {session.title}
            sessionUrl = {session.recordingUrl}
            hashtag = {insideTrack.hashtag}
            eventYear = {event.year}
          />
          ))}
          </div>
        </div>
      </div>
      ))}
    </Layout>
  )
}