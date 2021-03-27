import React from "react"
import PropTypes from "prop-types"
import Player from "./video"

const VideoList = ({ event, hashtag, limit=undefined }) => {
  var eventDate = new Date(event.date)
  event.year = eventDate.getFullYear()

  return (
    <div className="card-deck">
      {event.sessions.slice(0, limit).map((session, i) => (
        <Player
          key = { session.id }
          sessionId = { session.id }
          sessionTitle = { session.title }
          sessionUrl = { session.recordingUrl }
          hashtag = { hashtag }
          eventYear = { event.year }
        />
      ))}
    </div>
)}

VideoList.propTypes = {
  events: PropTypes.object,
  hashtag: PropTypes.string,
}

export default VideoList