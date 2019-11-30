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
              <IconContext.Provider value={{ className: "insideTrack-icon" }}>
                {insideTrackTwitterId !== null && (<a href={`https://twitter.com/`+insideTrackTwitterId}><FaTwitter/></a>)}
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "insideTrack-icon" }}>
                {insideTrackYoutubeUrl !== 0 && (<a href={insideTrackYoutubeUrl}><FaYoutube/></a>)}
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "insideTrack-icon insideTrack-icon-link" }}>
                {insideTrackSiteUrl.length !== 0 && (<a href={insideTrackSiteUrl}><FaLink/></a>)}
              </IconContext.Provider>
              <span className="insideTrack-icon"><a href={`https://twitter.com/hashtag/${insideTrackHashtag}`}>#{insideTrackHashtag}</a></span>
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