import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Moment from 'moment';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getYtThumbnailUrl } from "../components/helper.js"

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
        <div className="col-sm-12 col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <Link to={`/${event.insideTrack.hashtag}`}><h5 className="card-title ok-title">{event.insideTrack.name}</h5></Link>
            </div>
            <div className="card-footer">
                <small className="text-muted">Date: {Moment(event.date).format('D MMM YYYY')}</small>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="card-deck">
          {event.sessions.map(session => (
          /* @Colin this Link tag fucks up the layout :( */
          /*<Link to={`/${event.insideTrack.hashtag}/${event.year}/${ getSlug(session.title) }`} key={session.id}>*/
            <div className="card ok-card " key={session.id}>
              <img className="card-img-top" src={ getYtThumbnailUrl(session.recordingUrl) } alt="Video thumbnail"/>
              <div className="card-body" key={session.id}>
                  <p className="card-text"><small className="text-muted">{session.title}</small></p>
              </div>
            </div>
          /*</Link>*/
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
export default IndexPage
