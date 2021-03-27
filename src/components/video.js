import { Link } from "gatsby";
import React from "react";
import { getYtThumbnailUrl, getSlug } from "../components/helper.js";

const Player = ({ sessionId, sessionTitle, sessionUrl, hashtag, eventYear }) => {
  return (
    <div className="card card-custom-style" key={sessionId}>
    <Link to={`/${getSlug(hashtag)}/${eventYear}/${ getSlug(sessionTitle) }`}>
      <img className="card-img-top session-video" src={ getYtThumbnailUrl(sessionUrl) } alt="Video thumbnail"/>
      <div className="card-body p-0 pt-1">
        <p className="card-text font-weight-normal text-dark">{sessionTitle}</p>
      </div>
    </Link>
    </div>
  )
}

export default Player