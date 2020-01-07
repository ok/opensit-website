import React from "react"
import Moment from 'moment'
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { getSlug } from "../components/helper.js"

import Video from "../components/video"

const EventVideos = ({ event, hashtag, preview }) => {
  return (
  <>
    {/* show full header and all videos */}
    { preview === false && (
    <>
    <div>
      <h5>{ Moment(event.date).format('D MMM YYYY') }</h5>
    </div>
    <div className="card-deck">
      {event.sessions.map(session => (
        <Video.Player
          key = {session.id}
          sessionId = {session.id}
          sessionTitle = {session.title}
          sessionUrl = {session.recordingUrl}
          hashtag = {hashtag}
          eventYear = {event.year}
        />
      ))}
    </div>
    </>
    )}
    {/* or show just event date and some videos */}
    { preview === true && (
    <>
    <div className="event-header bg-white element-sticky">
      <div className="event-logo">
        <img src={event.insideTrack.logo.url} alt="inside track logo"></img>
      </div>
      <div className="event-title-wrapper">
        <div><h4 className="mb-0"><Link className={"text-dark"} to={`/${getSlug(event.insideTrack.hashtag)}`}>{event.insideTrack.name}</Link></h4></div>
        <div className="event-date text-muted">{Moment(event.date).format('D MMM YYYY')}</div>
      </div >
      <div className="ml-auto insideTrack-mobile-hidden">
      <span className="align-bottom"><Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}`}>View all</Link></span>
      </div>
    </div>
    <div className="card-deck">
      {event.sessions.map(session => (
        <Video.Player
          key = {session.id}
          sessionId = {session.id}
          sessionTitle = {session.title}
          sessionUrl = {session.recordingUrl}
          hashtag = {hashtag}
          eventYear = {event.year}
        />
      ))}
    </div>
    <div className="row mb-5 mt-n3 px-3 pt-0 insideTrack-desktop-hidden">
      <Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}`}>View all</Link>
    </div>
    </>
    )}
    </>
)}

EventVideos.propTypes = {
  events: PropTypes.object,
  hashtag: PropTypes.string,
  fullHeader: PropTypes.bool,
}

EventVideos.defaultProps = {
  fullHeader: false,
}

export default EventVideos