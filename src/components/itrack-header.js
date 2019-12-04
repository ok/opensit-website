import React from "react"
import { FaTwitter, FaYoutube, FaLink } from 'react-icons/fa';
import { IconContext } from "react-icons";

const InsideTrackHeader = ({ 
    insideTrackSiteUrl, 
    insideTrackName, 
    insideTrackHashtag, 
    insideTrackLogoUrl,
    insideTrackTwitterId,
    insideTrackYoutubeUrl
  }) => {

  return (
    <div id="navBar" className="navbar-expand-lg bg-white navbar-light insideTrack-sticky">
      <div className="insideTrack-identity insideTrack-container">
        <div className="insideTrack-logoWrapper">
          <img src={insideTrackLogoUrl} alt="inside track logo"></img>
        </div>
        <div className="insideTrack-titleWrapper">
          <h4 className="insideTrack-title">{insideTrackName}</h4>
          <IconContext.Provider value={{ className: "insideTrack-icon twitter-icon" }}>
            {insideTrackTwitterId !== null && insideTrackTwitterId.length !== 0 && (<a href={`https://twitter.com/`+insideTrackTwitterId}><FaTwitter/></a>)}
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "insideTrack-icon youtube-icon" }}>
            {insideTrackYoutubeUrl !== null && insideTrackYoutubeUrl.length !== 0 && (<a href={insideTrackYoutubeUrl}><FaYoutube/></a>)}
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "insideTrack-icon link-icon" }}>
            {insideTrackSiteUrl !== null && insideTrackSiteUrl.length !== 0 && (<a href={insideTrackSiteUrl}><FaLink/></a>)}
          </IconContext.Provider>
          <a href={`https://twitter.com/hashtag/${insideTrackHashtag}`}>#{insideTrackHashtag}</a>
        </div>
      </div>
    </div>
  )
};

export default InsideTrackHeader