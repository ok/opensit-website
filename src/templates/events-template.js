import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import EventVideos from "../components/event-videos"

const EventsPage = ({ pageContext: { currentPage, numPages }, data }) => {
  data.gcms.events.forEach(event => {
    var eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <div className="insideTrack-container">
        <SEO
          type="summary"
          title="Recent SAP Inside Tracks"
        />
        <div className="row mb-2">
          <div className="col-12">
            <h5>Recent SAP Inside Tracks</h5>
          </div>
        </div>
        {data.gcms.events.map(event => (
          <div className="row mb-2" key={event.id}>
            <div className="col-sm-12">
            <EventVideos
              event = { event }
              hashtag = { event.insideTrack.hashtag }
              preview = { true }
            />
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} numPages={numPages}/>
    </Layout>
  )
}

export const query = graphql`
  query latestEvents($skip: Int!, $limit: Int!) {
    gcms {
      events(
        orderBy: date_DESC
        first: $limit
        skip: $skip
      ) {
        id
        date
        location
        insideTrack {
          city
          country
          hashtag
          id
          name
          websiteUrl
          logo {
            url(
              transformation: {
                image: { resize: { width: 50, height: 50, fit: scale } }
              }
            )
            mimeType
          }
        }
        sessions(first: 4) {
          title
          speaker
          id
          recordingUrl
          topics
        }
      }
    }
  }
`
export default EventsPage
