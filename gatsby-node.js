const fs = require("fs");
const path = require("path");

// Use the createPages Node API to generate all pages with data from GraphCMS
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
};

// This is a session list generator to be used for session promotion on Twitter.
// Output is a list of sessions ID that that can be promoted in sequence:
// First prio are sessions from the latest SIT published (trigger of site build)
// After that we want to randomly promote sessions, with a fair destribution
//
// Use the onPostBuild Node API, which runs after the build has been completed.
exports.onPostBuild = async ({ graphql }) => {
  await graphql(`
    {
      allSessions: allGraphCmsSession {
        nodes {
          id: remoteId
        }
      }
      latestSessions: allGraphCmsEvent(sort: {fields: createdAt, order: DESC}, limit: 1) {
        nodes {
          sessions {
            id: remoteId
          }
        }
      }
    }
  `).then((result) => {
    const sessionsPath = "./public/sessions";
    if (!fs.existsSync(sessionsPath)) fs.mkdirSync(sessionsPath);

    const allSessions = result.data.allSessions.nodes;
    const latestSessions = result.data.latestSessions.nodes[0].sessions;
    
    // write out some session lists in case they could be useful
    fs.writeFileSync(`${sessionsPath}/sessions.json`, JSON.stringify(allSessions));
    randomSessions = shuffle(allSessions);
    fs.writeFileSync(`${sessionsPath}/random_sessions.json`, JSON.stringify(randomSessions));

    // this is the JSON object to be used for the Twitter bot
    var tweet_sessions = {
      "created_at" : daysIntoYear(new Date()), // we need an anker for our index
      "sessions" : latestSessions.concat(randomSessions)
    }
    fs.writeFileSync(`${sessionsPath}/tweet_sessions.json`, JSON.stringify(tweet_sessions));
  })
};

// credits: https://stackoverflow.com/questions/8619879
function daysIntoYear(date) {
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
} 

// Fisher-Yates Shuffle.
// credits: https://stackoverflow.com/questions/2450954/
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
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
