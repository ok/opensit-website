import React from "react"
import { FaTwitter, FaYoutube, FaLink } from 'react-icons/fa';
import { IconContext } from "react-icons";

const InsideTrackHeader = ({ insideTrack }) => {

  return (
    <div className="bg-white insideTrack-identity insideTrack-container element-sticky">
      <div className="insideTrack-logoWrapper">
        <img src={insideTrack.logo.url} alt="inside track logo"></img>
      </div>
      <div>
        <h4>{insideTrack.name}</h4>
        <IconContext.Provider value={{ className: "big-icon twitter-icon" }}>
          {insideTrack.twitterId !== null && insideTrack.twitterId.length !== 0 && (<a href={`https://twitter.com/`+insideTrack.twitterId}><FaTwitter/></a>)}
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "big-icon youtube-icon" }}>
          {insideTrack.youTubeUrl !== null && insideTrack.youTubeUrl.length !== 0 && (<a href={insideTrack.youTubeUrl}><FaYoutube/></a>)}
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "big-icon link-icon" }}>
          {insideTrack.websiteUrl !== null && insideTrack.websiteUrl.length !== 0 && (<a href={insideTrack.websiteUrl}><FaLink/></a>)}
        </IconContext.Provider>
        <a href={`https://twitter.com/hashtag/${insideTrack.hashtag}`}>#{insideTrack.hashtag}</a>
      </div>
    </div>
  )
};

export default InsideTrackHeader