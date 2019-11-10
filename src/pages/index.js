import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Moment from 'moment';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getYtThumbnailUrl, getSlug } from "../components/helper.js"

const IndexPage = ({ data }) => {
  data.gcms.events.forEach(event => {
    var eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })
  return (
    <Layout>
    <SEO title="Home" />
        <div className="row mb-3">
        <div className="col-12">
          <h2>Recent SAP Inside Tracks</h2>
        </div>
      </div>
      {data.gcms.events.map(event => (
      <div className="row mb-5" key={event.id}>
        <div className="col-sm-12">
          <div className="row mb-4 px-3 pt-2">
            <div className="d-inline-flex d-flex align-items-center">
              <div className=""><img src={event.insideTrack.logo.url} alt="inside track logo"></img></div >
              <div className="px-3"><h4 className={"mb-1"}><Link className={"text-dark"} to={`/${getSlug(event.insideTrack.hashtag)}`}>{event.insideTrack.name}</Link></h4></div>
              <div className="text-muted">Date: {Moment(event.date).format('D MMM YYYY')}</div>
            </div>
            <div className="d-flex ml-auto">
              <Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}`}>View all</Link>
            </div>
          </div>
          <div className="card-deck card-deck-custom-style mb-4">
            {event.sessions.map(session => (
              <div className="card card-custom-style mb-4" key={session.id}>
                <Link to={`/${getSlug(event.insideTrack.hashtag)}/${event.year}/${ getSlug(session.title) }`} key={session.id}>
                  <img className="card-img-top" src={ getYtThumbnailUrl(session.recordingUrl) } alt="Video thumbnail"/>
                  <div className="card-body p-0 pt-1" key={session.id}>
                    <p className="card-text text-muted">{session.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query latestEventsQuery {
    gcms {
      events(orderBy: date_DESC) {
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
        sessions(first: 5) {
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
export default IndexPage
