import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Speaker from "../components/speaker"
import { getYtEmbedUrl, getSlug, getDisplayName } from "../components/helper.js"

const SessionPage = ({ data }) => {
  const session = data.gcms.session;
  const sessionDate = new Date(session.event.date);

  return (
    <Layout>
      <div className="insideTrack-container">
        <SEO title="Session" />
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
              <h2>{session.title}</h2>
              <p><Link to={`/${getSlug(session.event.insideTrack.hashtag)}`}>{session.event.insideTrack.name} {sessionDate.getFullYear()}</Link></p>
              <iframe title={session.title} width="100%" height="315" src={getYtEmbedUrl(session.recordingUrl)} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <div>
                {session.topics.map((item, index) => (
                  <span className="badge badge-primary" style={{marginRight: `.5rem`,marginTop: `.7rem`,}} key={item}>{getDisplayName(item)} </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query singleSession($id: ID!) {
    gcms {
      session(where: {id: $id}) 
      {
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
          }
        }
        speakers {
          firstName
          lastName
          twitterId
          scnName
        }
      }
    }
  }
`
export default SessionPage
