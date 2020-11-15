const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
    {
      sessions: allGraphCmsSession {
         nodes {
          id
          title
          event {
            id
            date
            insideTrack {
              hashtag
            }
          }
        }
      }
      insideTracks: allGraphCmsInsideTrack {
        nodes {
          id
          hashtag
        }
      }
      events: allGraphCmsEvent {
        nodes {
          id
        }
      }
    }
    `).then(result => {

      // console.log(result.data.insideTracks)
      result.data.insideTracks.nodes.forEach(insideTrack => {
        createPage({
          path: `/${getSlug(insideTrack.hashtag)}`,
          component: require.resolve(`./src/templates/insidetrack-template.js`),
          context: { 
            id: insideTrack.id 
          }
        })
      })

      // console.log("processing sessions...")
      result.data.sessions.nodes.forEach((session) => {
        const sessionDate = new Date(session.event.date)
        createPage({
          // /sitber/2019/some_session_title
          path: `/${getSlug(session.event.insideTrack.hashtag)}/${sessionDate.getFullYear()}/${ getSlug(session.title) }`,
          component: require.resolve(`./src/templates/session-template.js`),
          context: { 
            session_id: session.id,
            event_id: session.event.id
          }
        })
      })

      // console.log("processing events...")
      const events = result.data.events.nodes;
      const eventsPerPage = 4;
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
