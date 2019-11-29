import React from "react"

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { getDisplayUrl } from "../components/helper.js"

const MyHeader = ({ insideTrackSiteUrl, insideTrackName, insideTrackHashtag, insideTrackLogoUrl}) => {

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
              {insideTrackSiteUrl.length !== 0 && (<span style={{marginRight: `0.7rem`,}}><a href={insideTrackSiteUrl}>{getDisplayUrl(insideTrackSiteUrl)}</a></span> )}
              <span><a href={`https://twitter.com/hashtag/${insideTrackHashtag}`}>#{insideTrackHashtag}</a></span>
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