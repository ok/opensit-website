import React from "react"
import Moment from 'moment'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { getDisplayUrl } from "../components/helper.js"

function scrollFunction() {
  var element = document.getElementById("navBar")
  if (element !== null)  {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      element.classList.add("stickyActive");
    } else {
      var element = document.getElementById("navBar")
      element.classList.remove("stickyActive");
    }
  }
}

window.onscroll = function() {
  scrollFunction();
}

const InsideTrackPage = ({ data }) => {
  const insideTrack = data.gcms.insideTrack
  insideTrack.events.forEach(event => {
    const eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <SEO title="Inside Track Event" />
      <nav id="navBar" className="navbar navbar-expand-lg bg-white navbar-light sticky-top ">
        <div className="insideTrack-identity insideTrack-container">
          <div className="insideTrack-logoWrapper">
            <div className="insideTrack-logo">
              <img src={insideTrack.logo.url} alt="inside track logo"></img>
            </div>
          </div>
          <div className="insideTrack-titleWrapper">
            <h2 className="insideTrack-title">{insideTrack.name}</h2>
            <span><a href={insideTrack.websiteUrl}>{getDisplayUrl(insideTrack.websiteUrl)}</a></span> |&nbsp;
            <span><a href={`https://twitter.com/hashtag/${insideTrack.hashtag}`}>#{insideTrack.hashtag}</a></span>
          </div>
        </div>
      </nav>
      <div className="insideTrack-container">
        {insideTrack.events.map(event => (
          <div className="row mt-5" key={event.id}>
            <div className={"col-sm-12"}>
                <div className="insideTrack-date">
                  <h5 className="">{Moment(event.date).format('D MMM YYYY')}</h5>
                </div>
                <div className="card-deck insideTrack-card-deck">
                  {event.sessions.map(session => (
                    <Video.Player
                      sessionId = {session.id}
                      sessionTitle = {session.title}
                      sessionUrl = {session.recordingUrl}
                      hashtag = {insideTrack.hashtag}
                      eventYear = {event.year}
                    />
                  ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query singleTrack($id: ID!) {
    gcms {
      insideTrack(
        where: {id: $id}
      ) {
        name
        city
        country
        websiteUrl
        hashtag
        logo {
          url(
            transformation: {
              image: { resize: { width: 100, height: 100, fit: scale } }
            }
          )
          mimeType
        }
        events(orderBy: date_DESC) {
          id
          location
          date
          sessions {
            id
            title
            speaker
            recordingUrl
          }
        }
      }
    }
  }
`
export default InsideTrackPage