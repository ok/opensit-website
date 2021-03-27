import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Moment from 'moment'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import VideoList from "../components/videos-list"
import { getSlug } from "../components/helper.js"

const EventsPage = ({ pageContext: { currentPage, numPages }, data }) => {
  return (
    <Layout>
      <div className="insideTrack-container">
        <SEO
          title="Recent SAP Inside Tracks | OpenSIT"
        />
        <div className="row mb-2">
          <div className="col-12">
            <h5>Recent SAP Inside Tracks</h5>
          </div>
        </div>
        {data.events.nodes.map(event => (
          <div className="row mb-2" key={ event.id }>
            <div className="col-sm-12">
              <div className="flex-header pt-3 pb-3 bg-white element-sticky">
                <div className="event-logo">
                  <GatsbyImage image={getImage(event.insideTrack.logo)} alt="inside track logo"/>
                </div>
                <div className="event-title-wrapper">
                  <div><h4 className="mb-0"><Link className={"text-dark"} to={`/${getSlug(event.insideTrack.hashtag)}`}>{event.insideTrack.name}</Link></h4></div>
                  <div className="event-date text-muted">{Moment(event.date).format('D MMM YYYY')}</div>
                </div >
                <div className="ml-auto insideTrack-mobile-hidden">
                  <span className="align-bottom"><Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}`}>View all</Link></span>
                </div>
              </div>
              <VideoList
                event = { event }
                hashtag = { event.insideTrack.hashtag }
                limit = { 4 }
              />
              <div className="row mb-5 mt-n3 px-3 pt-0 insideTrack-desktop-hidden">
                <Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}`}>View all</Link>
              </div>
            </div>
          </div>
          )
        )}
      </div>
      <Pagination currentPage={currentPage} numPages={numPages}/>
    </Layout>
  )
}

export const query = graphql`
  query latestEvents($skip: Int!, $limit: Int!) {
    events: allGraphCmsEvent(
      sort: {order: DESC, fields: date},
      limit: $limit,
      skip: $skip
      ) {
      nodes {
        id
        date
        location
        insideTrack {
          id
          city
          country
          hashtag
          name
          websiteUrl
          logo {
            gatsbyImageData(
              width: 50
              layout: FIXED
            )
          }
        }
        sessions {
          id
          title
          recordingUrl
          topics
        }
      }
    }
  }
`
export default EventsPage
