import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Speaker from "../components/speaker"
import EventVideos from "../components/event-videos"
import { getYtThumbnailUrl, getYtEmbedUrl, getSlug, getDisplayName } from "../components/helper.js"

const SessionPage = ({ data }) => {
  const session = data.gcms.session;
  const event = data.gcms.event;
  const sessionDate = new Date(session.event.date);
  console.log(event)

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
              {session.speakers.length ? (
                <span>{session.speakers.map((speaker, i) => (
                  [i > 0 && " & ",<Speaker speaker={speaker} />]
                ))}</span>
              ) : (
                <span>{session.speaker}</span>
              )}
              <h4>{session.title}</h4>
              <p><Link to={`/${getSlug(session.event.insideTrack.hashtag)}`}>{session.event.insideTrack.name} {sessionDate.getFullYear()}</Link></p>
              <iframe className="youtubevid" title={session.title} src={getYtEmbedUrl(session.recordingUrl)} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <div>
                {session.topics.map((item) => (
                  <span className="badge badge-primary" style={{marginRight: `.5rem`,marginTop: `.7rem`,}} key={item}>{getDisplayName(item)} </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4"  id={ event.year } key={ event.id }>
          <div className="col-sm-12">
          <EventVideos
            event = { event }
            hashtag = { event.insideTrack.hashtag }
            preview = { false }
          />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query singleSession($session_id: ID!, $event_id: ID!) {
    gcms {
      session(where: {id: $session_id}) {
        title
        speaker
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
          firstName
          lastName
          twitterId
          scnName
        }
      }
      event(where: {id: $event_id}) {
        id
        location
        date
        sessions(first: 4) {
          id
          title
          speaker
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
