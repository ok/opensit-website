import React from "react"
import { graphql } from "gatsby"
import Moment from 'moment'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/videos-list"
import InsideTrackHeader from "../components/itrack-header"

const InsideTrackPage = ({ data }) => {
  const insideTrack = data.insideTrack.nodes[0]
  insideTrack.events.forEach(event => {
    const eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <SEO 
        title = { insideTrack.name+` | OpenSIT` }
        creator = { (insideTrack.twitterId !== null) ? insideTrack.twitterId : "" }
      />
      <InsideTrackHeader
        insideTrack = { insideTrack }
      />
      <div className="insideTrack-container">
        { insideTrack.events.map(event => (
          <div className="row mt-4"  id={ event.year } key={ event.id }>
            <div className="col-sm-12">
              <div className="flex-header">
                <h5>{ Moment(event.date).format('D MMM YYYY') }</h5>
              </div>
              <VideoList
                event = { event }
                hashtag = { insideTrack.hashtag }
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query singleTrack($id: String!) {
    insideTrack: allGraphCmsInsideTrack(
      filter: { id: { eq: $id }}
      ) {
      nodes {
        name
        city
        country
        websiteUrl
        twitterId
        youTubeUrl
        hashtag
        logo {
          url
          mimeType
        }
        events {
          id
          location
          date
          sessions {
            id
            title
            recordingUrl
          }
        }
      }
    }
  }
`
export default InsideTrackPage