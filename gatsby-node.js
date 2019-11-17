const path = require(`path`)

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
            date
            insideTrack {
              name
              hashtag
            }
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
          logo {
            url(
              transformation: {
                image: { resize: { width: 100, height: 100, fit: scale } }
              }
            )
            mimeType
          }
          events(orderBy: date_DESC) {
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
        }
      }
    }
    `).then(result => {

      console.log("processing sessions...")
      result.data.allSessions.sessions.forEach((session) => {
        // printData(session)
        sessionDate = new Date(session.event.date)
        session.event.year = sessionDate.getFullYear()
        createPage({
          path: `/${getSlug(session.event.insideTrack.hashtag)}/${session.event.year}/${ getSlug(session.title) }`,
          component: require.resolve(`./src/templates/session-template.js`),
          context: { session }
        })
      })

      console.log("processing insideTracks...")
      result.data.allInsideTracks.insideTracks.forEach(insideTrack => {
        // printData(insideTrack)
        createPage({
          path: `/${getSlug(insideTrack.hashtag)}`,
          component: require.resolve(`./src/templates/insidetrack-template.js`),
          context: { insideTrack }
        })
      })

      console.log("processing events...")
      // printData(result.data)
      const events = result.data.allEvents.events;
      const eventsPerPage = 2;
      const numPages = Math.ceil(events.length / eventsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/p/${i + 1}`,
          component: path.resolve('./src/templates/events-template.js'),
          context: {
            limit: eventsPerPage,
            skip: i * eventsPerPage,
            numPages,
            currentPage: i + 1
          }
        });
      });
      resolve();
    })
  })
}

// gatsby-node doesn't support component import, which sucks!
function printData(data) {
  console.log(JSON.stringify(data))
  console.log("---END---")
}

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