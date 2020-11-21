import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Speaker from "../components/speaker"
import VideoList from "../components/videos-list"
import { getYtThumbnailUrl, getYtEmbedUrl, getSlug, getDisplayName } from "../components/helper.js"

const SessionPage = ({ data }) => {
  const session = data.session.nodes[0];
  const event = data.event.nodes[0];
  const sessionDate = new Date(event.date);

  return (
    <Layout>
      <div className="insideTrack-container">
        <SEO 
          title = { session.title+` | OpenSIT` } 
          creator = { session.event.insideTrack.twitterId }
          image = { getYtThumbnailUrl(session.recordingUrl) }
        />
        <div className="row">
          <div className="col-sm-12">
            <div className="insideTrack-videoWrapper">
              {/* List of speakers and their profiles */}
              <span>{session.speakers.map((speaker, i) => (
                [i > 0 && " & ",<Speaker key={speaker.id} speaker={speaker} />]
              ))}</span>
              {/* Session title, SIT and full width video */}
              <h4>{session.title}</h4>
              <p><Link to={`/${getSlug(session.event.insideTrack.hashtag)}`}>{session.event.insideTrack.name} {sessionDate.getFullYear()}</Link></p>
              <iframe className="youtubevid" title={session.title} src={getYtEmbedUrl(session.recordingUrl)} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              {/* List of session topics */}
              <div>
                {session.topics.map((item) => (
                  <span className="badge badge-primary" style={{marginRight: `.5rem`,marginTop: `.7rem`,}} key={item}>{getDisplayName(item)} </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            {/* Related videos */}
            <div className="flex-header">
              <h5>Other sessions from this event</h5>
              <div className="ml-auto insideTrack-mobile-hidden">
                <span className="align-bottom"><Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}#${sessionDate.getFullYear()}`}>View all</Link></span>
              </div>
            </div>
            <VideoList
              event = { event }
              hashtag = { event.insideTrack.hashtag }
              limit = { 4 }
            />
            <div className="row mb-5 mt-n3 px-3 pt-0 insideTrack-desktop-hidden">
              <Link className="pt-1" to={`/${getSlug(event.insideTrack.hashtag)}#${sessionDate.getFullYear()}`}>View all</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query singleSession($session_id: String!, $event_id: String!) {
    session: allGraphCmsSession(
      filter: { id: {eq: $session_id }}
      ) {
      nodes {
        title
        recordingUrl
        slidesUrl
        topics
        event {
          date
          insideTrack {
            name
            hashtag
            twitterId
          }
        }
        speakers {
          id
          firstName
          lastName
          twitterId
          linkedInName
          scnName
        }
      }
    }
    event: allGraphCmsEvent(
      filter: { id: {eq: $event_id }}
      ) {
      nodes {
        id
        location
        date
        sessions {
          id
          title
          recordingUrl
        }
        insideTrack {
          hashtag
        }
      }
    }
  }
`
export default SessionPage
