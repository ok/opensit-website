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
    <div className="card card-custom-style mb-4" key={sessionId}>
    <Link to={`/${getSlug(hashtag)}/${eventYear}/${ getSlug(sessionTitle) }`} key={sessionId}>
      <img className="card-img-top" src={ getYtThumbnailUrl(sessionUrl) } alt="Video thumbnail"/>
      <div className="card-body p-0 pt-1" key={sessionId}>
        <p className="card-text text-muted">{sessionTitle}</p>
      </div>
    </Link>
    </div>
  )
}

export default { Player }