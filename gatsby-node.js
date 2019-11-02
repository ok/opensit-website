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
          topics
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
            id
            location
            date
            sessions {
              id
              title
              speaker
              recordingUrl
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
      result.data.allSessions.sessions.forEach((session) => {
        // printSession(session)
        sessionDate = new Date(session.event.date)
        session.event.year = sessionDate.getFullYear()
        createPage({
          path: `/${session.event.insideTrack.hashtag}/${session.event.year}/${ getSlug(session.title) }`,
          component: require.resolve(`./src/templates/session-template.js`),
          context: { session },
        })
      })

      console.log("processing insideTracks...")
      result.data.allInsideTracks.insideTracks.forEach(insideTrack => {
        // printSession(insideTrack)
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

//gatsby-node.js doesn't support 
function printSession(data) {
  console.log(JSON.stringify(data))
  console.log("---END---")
}

// gatsby-node doesn't support component import, which sucks!
// figure out how this ESM import works https://github.com/gatsbyjs/gatsby/issues/10391
// copy from helper.js
function getSlug(title) {
  title = title.replace(/^\s+|\s+$/g, ''); // trim
  title = title.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    title = title.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  title = title.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return title;
}