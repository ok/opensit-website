import React from "react"
import Moment from 'moment'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { getDisplayUrl } from "../components/helper.js"
import MyHeader from "../components/navbar"


const InsideTrackPage = ({ data }) => {
  const insideTrack = data.gcms.insideTrack
  insideTrack.events.forEach(event => {
    const eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <SEO title="Inside Track Event" />
      <MyHeader
        displayURL = { getDisplayUrl(insideTrack.websiteUrl) }
        insideTrackName = { insideTrack.name }
        insideTrackHashtag = { insideTrack.hashtag }
        insideTrackLogoUrl = { insideTrack.logo.url }
      />
      <div className="insideTrack-container">
        { insideTrack.events.map(event => (
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