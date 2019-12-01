import React from "react"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { FaTwitter, FaYoutube, FaLink } from 'react-icons/fa';
import { IconContext } from "react-icons";

const MyHeader = ({ 
    insideTrackSiteUrl, 
    insideTrackName, 
    insideTrackHashtag, 
    insideTrackLogoUrl,
    insideTrackTwitterId,
    insideTrackYoutubeUrl
  }) => {

  return (
    <StickyHeader
      // This is the sticky part of the header.
      header={
        <nav id="navBar" className="navbar navbar-expand-lg bg-white navbar-light sticky-top ">
          <div className="insideTrack-identity insideTrack-container">
            <div className="insideTrack-logoWrapper">
              <div className="insideTrack-logo">
                <img src={insideTrackLogoUrl} alt="inside track logo"></img>
              </div>
            </div>
            <div className="insideTrack-titleWrapper">
              <h3 className="insideTrack-title">{insideTrackName}</h3>
              <IconContext.Provider value={{ className: "insideTrack-icon twitter-icon" }}>
                {insideTrackTwitterId !== null && insideTrackTwitterId.length !== 0 && (<a href={`https://twitter.com/`+insideTrackTwitterId}><FaTwitter/></a>)}
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "insideTrack-icon youtube-icon" }}>
                {insideTrackYoutubeUrl !== null && insideTrackYoutubeUrl.length !== 0 && (<a href={insideTrackYoutubeUrl}><FaYoutube/></a>)}
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "insideTrack-icon link-icon" }}>
                {insideTrackSiteUrl !== null && insideTrackSiteUrl.length !== 0 && (<a href={insideTrackSiteUrl}><FaLink/></a>)}
              </IconContext.Provider>
              <span><a href={`https://twitter.com/hashtag/${insideTrackHashtag}`}>#{insideTrackHashtag}</a></span>
            </div>
          </div>
        </nav>
      }
    >
    </StickyHeader>
    )

};

export default MyHeader