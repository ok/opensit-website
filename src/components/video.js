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
    <div className="card ok-card " key={sessionId}>
    <Link to={`/${getSlug(hashtag)}/${eventYear}/${ getSlug(sessionTitle) }`} key={sessionId}>
      <img className="card-img-top" src={ getYtThumbnailUrl(sessionUrl) } alt="Video thumbnail"/>
      <div className="card-body p-0 pt-1" key={sessionId}>
        <p className="card-text"><span className="text-muted font-weight-bolder">{sessionTitle}</span></p>
      </div>
    </Link>
    </div>
  )
}

export default { Player }