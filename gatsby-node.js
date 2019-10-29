const path = require(`path`)

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `SitePage`) {
//     const pageNode = getNode(node.parent)
//     console.log(`\n`, node)
//   }
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  console.log("processing sessions promise...")
  return new Promise(resolve => {
    graphql(`
    {
      allSessions:gcms {
        sessions {
          id
          title
          speaker
          recordingUrl
          slidesUrl
          slug
          event {
            insideTrack {
              hashtag
            }
            date
          }
        }
      }
      allInsideTracks:gcms {
        insideTracks {
          name
          city
          country
          websiteUrl
          hashtag
          events {
            location
            date
            sessions {
              id
              title
              speaker
              recordingUrl
              slug
            }
          }
        }
      }
      allEvents:gcms {
        events {
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
          }
        }
      }
    }
    `).then(result => {

      console.log("processing sessions...")
      // printSession(result.data)
      result.data.allSessions.sessions.forEach((session) => {
        // printSession(session)
        sessionDate = new Date(session.event.date)
        session.event.year = sessionDate.getFullYear()
        createPage({
          path: `/${session.event.insideTrack.hashtag}/${session.event.year}/${session.slug}`,
          component: require.resolve(`./src/templates/session-template.js`),
          context: { session },
        })
      })

      console.log("processing insideTracks...")
      // printSession(result.data)
      result.data.allInsideTracks.insideTracks.forEach(insideTrack => {
        printSession(insideTrack)
        createPage({
          path: `/${insideTrack.hashtag}`,
          component: require.resolve(`./src/templates/insidetrack-template.js`),
          context: { insideTrack },
        })
      })

      console.log("processing events...")
      // printSession(result.data)
      result.data.allEvents.events.forEach(event => {
        eventDate = new Date(event.date)
        event.year = eventDate.getFullYear()
        event.path = `/${event.insideTrack.hashtag}/${event.year}`
      })
      result.data.allEvents.events.forEach(event => {
        createPage({
          path: `${event.path}`,
          component: require.resolve(`./src/templates/event-template.js`),
          context: { event },
        })
      })
      resolve();
    })
  })
}

function printSession(data) {
  console.log(JSON.stringify(data))
  console.log("---END---")
}