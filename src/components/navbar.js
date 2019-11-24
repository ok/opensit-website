import React from "react"
import Moment from 'moment'

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import PropTypes from "prop-types"

const MyHeader = ({ displayURL, insideTrackName, insideTrackHashtag, insideTrackLogoUrl}) => {

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
              <span><a href={displayURL}>{displayURL}</a></span> |&nbsp;
              <span><a href="{`https://twitter.com/hashtag/${insideTrackHashtag}`}">#{insideTrackHashtag}</a></span>
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