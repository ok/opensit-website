import React from "react"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { getDisplayUrl } from "../components/helper.js"

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
              <h2 className="insideTrack-title">{insideTrackName}</h2>
              <IconContext.Provider value={{ size: "1.5em" }}>
                {insideTrackTwitterId !== null && (<a href={`https://twitter.com/`+insideTrackTwitterId}><FaTwitter className="insideTrack-icon"/></a>)}
                {insideTrackYoutubeUrl !== 0 && (<a href={insideTrackYoutubeUrl}><FaYoutube className="insideTrack-icon"/></a>)}
              </IconContext.Provider>
              <span className="insideTrack-icon"><a href={`https://twitter.com/hashtag/${insideTrackHashtag}`}>#{insideTrackHashtag}</a></span>
              {insideTrackSiteUrl !== 0 && (<span style={{marginRight: `0.7rem`,}}><a href={insideTrackSiteUrl}>{getDisplayUrl(insideTrackSiteUrl)}</a></span>)}
            </div>
          </div>
        </nav>
      }
    >
      <section>
        <p>
        </p>
      </section>
    </StickyHeader>
    )

};

export default MyHeader