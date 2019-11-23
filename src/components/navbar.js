import React from "react"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { getDisplayUrl } from "./helper"

const MyHeader = ({ insideTrackTitle }, { insideTrackLogoUrl }) => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <nav id="navBar" className="navbar navbar-expand-lg bg-white navbar-light sticky-top ">
        <div className="insideTrack-identity insideTrack-container">
          <div className="insideTrack-logoWrapper">
            <div className="insideTrack-logo">
              <img src="{insideTrackLogoUrl}" alt="inside track logo"></img>
            </div>
          </div>
          <div className="insideTrack-titleWrapper">
            <h2 className="insideTrack-title">{insideTrackTitle}</h2>
            <span><a href=""> </a></span> |&nbsp;
            <span><a href="https://twitter.com/hashtag/">#Hash tag</a></span>
          </div>
        </div>
      </nav>
    }
  >
    <section>
      <p>
        This section will be what the sticky header scrolls over before entering into
        sticky state. See the gif above or run the test story book to see examples.
      </p>
    </section>
  </StickyHeader>
);
MyHeader.propTypes = {
  insideTrackTitle: PropTypes.string,
  insideTrackLogoUrl: PropTypes.string,
}

MyHeader.defaultProps = {
  insideTrackTitle: ``,
  insideTrackLogo: ``,
}

export default MyHeader