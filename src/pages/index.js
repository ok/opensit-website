import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Moment from 'moment';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getYtThumbnailUrl } from "../components/yt-helper.js"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="col-12">
        <h2>Recent SAP Inside Tracks</h2>
      </div>
    </div>
    {data.gcms.events.map(event => (
    <div className="row" style={{"margin-bottom" : "1rem"}} key={event.id}>
      <div className="col-lg-3 col-md-12">
        <div class="card-group">
        <div className="card">
          <div className="card-body">
            <Link to={`/${event.insideTrack.hashtag}`}><h5 className="card-title">{event.insideTrack.name}</h5></Link>
          </div>
          <div className="card-footer">
              <small className="text-muted">Date: {Moment(event.date).format('D MMM YYYY')}</small>
          </div>
        </div>
        </div>
      </div>
      <div className="card-deck col-lg-9 col-md-12">
      {event.sessions.map(session => (
        <div className="card card-custom-style" key={session.id}>
          <img className="card-img-top" src={ getYtThumbnailUrl(session.recordingUrl) } alt="Video thumbnail"/>
          <div className="card-body" key={session.id}>
              <p className="card-text"><small className="text-muted">{session.title}</small></p>
          </div>
        </div>
      ))}
      </div>
    </div>
    ))}
    </Layout>
)

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
        sessions {
          title
          speaker
          id
          recordingUrl
          slug
          topics
        }
      }
    }
  }
`
export default IndexPage
