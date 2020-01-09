import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventVideos from "../components/event-videos"
import InsideTrackHeader from "../components/itrack-header"

const InsideTrackPage = ({ data }) => {
  const insideTrack = data.gcms.insideTrack
  insideTrack.events.forEach(event => {
    const eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <SEO 
        title = { insideTrack.name }
        creator = { (insideTrack.twitterId !== null) ? insideTrack.twitterId : "" }
      />
      <InsideTrackHeader
        insideTrack = { insideTrack }
      />
      <div className="insideTrack-container">
        { insideTrack.events.map(event => (
          <div className="row mt-4" key={event.id}>
            <div className={"col-sm-12"}>
            <EventVideos
              event = { event }
              hashtag = { insideTrack.hashtag }
              preview = { false }
            />
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
        twitterId
        youTubeUrl
        hashtag
        logo {
          url(
            transformation: {
              image: { resize: { width: 65, height: 65, fit: scale } }
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