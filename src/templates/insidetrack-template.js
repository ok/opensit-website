import React from "react"
import { graphql } from "gatsby"
import Moment from 'moment'
import { FaTwitter, FaYoutube, FaLink } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import VideoList from "../components/videos-list"

const InsideTrackPage = ({ data }) => {
  const insideTrack = data.insideTrack.nodes[0]
  const logo = getImage(insideTrack.logo)

  insideTrack.events.forEach(event => {
    const eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <Seo 
        title = { insideTrack.name+` | OpenSIT` }
        creator = { (insideTrack.twitterId !== null) ? insideTrack.twitterId : "" }
      />
      <div className="bg-white insideTrack-identity insideTrack-container element-sticky">
        <div className="insideTrack-logoWrapper">
          <GatsbyImage image={logo} alt="inside track logo"/>
        </div>
        <div>
          <h4>{insideTrack.name}</h4>
          <IconContext.Provider value={{ className: "big-icon twitter-icon" }}>
            {insideTrack.twitterId !== null && insideTrack.twitterId.length !== 0 && (<a href={`https://twitter.com/`+insideTrack.twitterId} aria-label="Link to Twitter"><FaTwitter/></a>)}
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "big-icon youtube-icon" }}>
            {insideTrack.youTubeUrl !== null && insideTrack.youTubeUrl.length !== 0 && (<a href={insideTrack.youTubeUrl} aria-label="Link to YouTube"><FaYoutube/></a>)}
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "big-icon link-icon" }}>
            {insideTrack.websiteUrl !== null && insideTrack.websiteUrl.length !== 0 && (<a href={insideTrack.websiteUrl} aria-label="Link to website"><FaLink/></a>)}
          </IconContext.Provider>
          <a href={`https://twitter.com/hashtag/${insideTrack.hashtag}`}>#{insideTrack.hashtag}</a>
        </div>
      </div>
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
          gatsbyImageData(
            width: 65
            layout: FIXED
          )
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