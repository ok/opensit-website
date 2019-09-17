import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Moment from 'moment';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="col-12">
        <h2>Recent SAP Inside Tracks</h2>
      </div>
    </div>
    {data.gcms.events.map(event => (
    <div className="row">
      <div className="col-3 mb-3">
        <div className="card">
          <div className="card-body">
            <Link to={event.insideTrack.hashtag}><h5 className="card-title">{event.insideTrack.name}</h5></Link>
          </div>
          <div className="card-footer">
              <small class="text-muted">Date: {Moment(event.date).format('D MMM YYYY')}</small>
          </div>
        </div>
      </div>
      <div className="card-deck col-9">
      {event.sessions.map(session => (
        <div style={{width: `33%`,}}>
          <div className="card card-body">
            <p className="card-text">{session.title}</p>
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
