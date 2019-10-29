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
      allSessionPage:gcms {
        sessions {
          id,
          title,
          speaker,
          recordingUrl,
          slidesUrl,
          slug, 
          event {
            insideTrack {
              hashtag
            },
            date
          },
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
            location,
            date
          }
        }
      }
      allEvents:gcms {
        events {
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
        }
      }
    }
    `).then(result => {
      console.log("processing sessions...")
      printSession(result.data)
      result.data.allSessionPage.sessions.forEach((session) => {
        sessionDate = new Date(session.event.date)
        session.event.year = sessionDate.getFullYear()
        session.event.path = `/${session.event.insideTrack.hashtag}/${session.event.year}`
        session.path = `/${session.event.insideTrack.hashtag}/${session.event.year}/${session.slug}`
        createPage({
          path: `${session.path}`,
          component: require.resolve(`./src/templates/session-template.js`),
          context: { session },
        })
        // printSession(session)
      })
      // // create pages
      // result.data.allSessionPage.sessions.forEach((session) => {
      //   session.path = `/${session.event.insideTrack.hashtag}/${session.event.year}/${session.slug}`
      //   createPage({
      //     path: `${session.path}`,
      //     component: require.resolve(`./src/templates/session-template.js`),
      //     context: { session },
      //   })
      // })
      // return result;

      console.log("processing insideTracks...")
      printSession(result.data)
      // enrich data
      result.data.allInsideTracks.insideTracks.forEach((insideTrack) => {
        insideTrack.events.forEach(event => {
          eventDate = new Date(event.date)
          event.year = eventDate.getFullYear()
        })
        insideTrack.path = `/${insideTrack.hashtag}`
      })
      // create pages
      result.data.allInsideTracks.insideTracks.forEach(insideTrack => {
        createPage({
          path: `${insideTrack.path}`,
          component: require.resolve(`./src/templates/insidetrack-template.js`),
          context: { insideTrack },
        })
      })
      // return result;

      console.log("processing events...")
      printSession(result.data)
      result.data.allEvents.events.forEach(event => {
        eventDate = new Date(event.date)
        event.year = eventDate.getFullYear()
        event.path = `/${event.insideTrack.hashtag}/${event.year}`
        // printSession(event)
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