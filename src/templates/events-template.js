import React from "react"
import Moment from 'moment'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import Pagination from "../components/pagination"
import { getSlug } from "../components/helper.js"

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
        <div className="row mb-3">
          <div className="col-12">
            <h5>Recent SAP Inside Tracks</h5>
          </div>
        </div>
        {data.gcms.events.map(event => (
          <div className="event-wrapper row mb-2" key={event.id}>
            <div className="col-sm-12" id="sticky-container">
              <div className="event-header bg-white">
                <div className="event-info">
                  <div className="event-logo">
                    <img src={event.insideTrack.logo.url} alt="inside track logo"></img>
                  </div>
                  <div className="event-title-wrapper">
                    <div className="event-title"><h4><Link className={"text-dark"} to={`/${getSlug(event.insideTrack.hashtag)}`}>{event.insideTrack.name}</Link></h4></div>
                    <div className="event-date text-muted">{Moment(event.date).format('D MMM YYYY')}</div>
                  </div >

                </div>
                <div className="event-view-more ml-auto insideTrack-mobile-hidden">
                  <Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}`}>View all</Link>
                </div>
              </div>
              <div className="card-deck card-deck-custom-style">
                {event.sessions.map(session => (
                  <Video.Player
                    sessionId = {session.id}
                    sessionTitle = {session.title}
                    sessionUrl = {session.recordingUrl}
                    hashtag = {event.insideTrack.hashtag}
                    eventYear = {event.year}
                  />
                ))}
              </div>
              <div className="row mb-4 mt-n3 px-3 pt-0">
                <div className="event-view-more insideTrack-desktop-hidden">
                  <Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}`}>View all</Link>
                </div>
              </div>
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
                image: { resize: { width: 30, height: 30, fit: scale } }
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
