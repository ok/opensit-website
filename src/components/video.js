//@flow
import { Link } from "gatsby";
import React from "react";
import { getYtThumbnailUrl, getSlug } from "../components/helper.js"

type Props = {
  sessionId: string,
  sessionTitle: string,
  sessionUrl: string,
  hashtag: string,
  eventYear: number
};

const Player = (props: Props) => {
  const { sessionId, sessionTitle, sessionUrl, hashtag, eventYear } = props;

  return (
    <div className="card card-custom-style" key={sessionId}>
    <Link to={`/${getSlug(hashtag)}/${eventYear}/${ getSlug(sessionTitle) }`}>
      <img className="card-img-top session-video" src={ getYtThumbnailUrl(sessionUrl) } alt="Video thumbnail"/>
      <div className="card-body p-0 pt-2">
        <p className="card-text font-weight-normal text-dark">{sessionTitle}</p>
      </div>
    </Link>
    </div>
  )
}

export default { Player }