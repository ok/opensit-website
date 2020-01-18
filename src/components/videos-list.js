import React from "react"
import PropTypes from "prop-types"

import Video from "./video"

const VideoList = ({ event, hashtag }) => {
  var eventDate = new Date(event.date)
  event.year = eventDate.getFullYear()

  return (
    <div className="card-deck">
      {event.sessions.map(session => (
        <Video.Player
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