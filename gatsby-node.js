const path = require(`path`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `SitePage`) {
    const pageNode = getNode(node.parent)
    console.log(`\n`, node)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // this doesn't work shit!
  // return new Promise((resolve, reject) => {
  //   graphql(`
  //     query allSessionsQuery {
  //       gcms {
  //         sessions {
  //           id,
  //           title,
  //           speaker,
  //           recordingUrl,
  //           slidesUrl,
  //           insideTrack {
  //             id,
  //             name,
  //             country,
  //             hashtag
  //           },
  //         }
  //       }
  //     }
  //   `).then(result => {
  // sessionsData.forEach(printSession)

  var sessionsData = [
    {
      "id": "ck0fr9r495b4s0b20ka238xwx",
      "title": "Handcuffed, blindfolded… what now?!",
      "speaker": "Bart van de Kamp, Soumalya Nath",
      "recordingUrl": "https://www.youtube.com/embed/5GaISNTyyyM",
      "slidesUrl": null,
      "slug": "handcuffed-blindfolded-what-now",
      "event": {
        "insideTrack": {
          "hashtag": "sitBER"
        },
        "date": "2019-08-31T00:00:00.000Z"
      }
    },
    {
      "id": "ck0frs79xi4qy0b592llp8v1v",
      "title": "Design thinking as a tool for SAP Activate workshops",
      "speaker": "Anne Johnson ",
      "recordingUrl": "https://www.youtube.com/embed/ew5VoJCslKA",
      "slidesUrl": null,
      "slug": "design-thinking-as-a-tool-for-sap-activate-workshops",
      "event": {
        "insideTrack": {
          "hashtag": "sitBER"
        },
        "date": "2019-08-31T00:00:00.000Z"
      }
    },
    {
      "id": "ck0fu762j5l3z0b20tuk5vy7n",
      "title": "Building the RIGHT it before you build it RIGHT",
      "speaker": "Tudor Riscutia",
      "recordingUrl": "https://www.youtube.com/embed/RkyiZbEfa_I",
      "slidesUrl": null,
      "slug": "building-the-right-it-before-you-build-it-right",
      "event": {
        "insideTrack": {
          "hashtag": "sitBER"
        },
        "date": "2019-08-31T00:00:00.000Z"
      }
    },
    {
      "id": "ck0jnu48ligfm0b38t6rx1zxb",
      "title": "All That You Know Is At An End",
      "speaker": "Paul Hardy",
      "recordingUrl": "https://www.youtube.com/embed/aPIbAQwMpQs",
      "slidesUrl": null,
      "slug": "all-that-you-know-is-at-an-end",
      "event": {
        "insideTrack": {
          "hashtag": "sitPOTT"
        },
        "date": "2019-05-25T00:00:00.000Z"
      }
    },
    {
      "id": "ck0jnx6rziegr0b20pa5rlzhp",
      "title": "Easy Install of SAP IQ database",
      "speaker": "Roland Kramer",
      "recordingUrl": "https://www.youtube.com/embed/yNa6c9cp_wo",
      "slidesUrl": null,
      "slug": "easy-install-of-sap-iq-database",
      "event": {
        "insideTrack": {
          "hashtag": "sitPOTT"
        },
        "date": "2019-05-25T00:00:00.000Z"
      }
    },
    {
      "id": "ck0lapnlqn73d0b04no5bn7om",
      "title": "Insights into blockchain consensus mechanisms and their threats",
      "speaker": "Andrea Pham",
      "recordingUrl": "https://www.youtube.com/embed/XX-pLhww5tE",
      "slidesUrl": null,
      "slug": "insight-into-blockchain-consensus-mechanisms-and-their-threats",
      "event": {
        "insideTrack": {
          "hashtag": "sitBER"
        },
        "date": "2019-08-31T00:00:00.000Z"
      }
    }
  ]


  
  console.log("processing sessions...")
  // enrich data
  sessionsData.forEach(session => {
    sessionDate = new Date(session.event.date)
    session.event.year = sessionDate.getFullYear()
    session.event.path = `/${session.event.insideTrack.hashtag}/${session.event.year}`
    session.path = `/${session.event.insideTrack.hashtag}/${session.event.year}/${session.slug}`
    // printSession(session)
  })
  // create pages
  sessionsData.forEach(session => {
    createPage({
      path: `${session.path}`,
      component: require.resolve(`./src/templates/session-template.js`),
      context: { session },
    })
  })

  // query allEventsQuery {
  //   gcms {
  //     events {
  //       id
  //       date
  //       location
  //       insideTrack {
  //         city
  //         country
  //         hashtag
  //         id
  //         name
  //         websiteUrl
  //       }
  //     }
  //   }
  // }
  const eventsData = [
    {
      "id": "ck0je4suhhiui0b20ub6cvv9q",
      "date": "2017-09-02T00:00:00.000Z",
      "location": "SAP DATA SPACE",
      "insideTrack": {
        "city": "Berlin",
        "country": "DE",
        "hashtag": "sitBER",
        "id": "ck0fovai552yu0b20tf09yoey",
        "name": "SAP Inside Track Berlin",
        "websiteUrl": "https://sitberlin.net"
      }
    },
    {
      "id": "ck0je5glvhn5h0b049uj0p6f0",
      "date": "2018-09-01T00:00:00.000Z",
      "location": "SAP DATA SPACE",
      "insideTrack": {
        "city": "Berlin",
        "country": "DE",
        "hashtag": "sitBER",
        "id": "ck0fovai552yu0b20tf09yoey",
        "name": "SAP Inside Track Berlin",
        "websiteUrl": "https://sitberlin.net"
      }
    },
    {
      "id": "ck0je645ryexq0b59qmkoauz3",
      "date": "2019-08-31T00:00:00.000Z",
      "location": "SAP DATA SPACE",
      "insideTrack": {
        "city": "Berlin",
        "country": "DE",
        "hashtag": "sitBER",
        "id": "ck0fovai552yu0b20tf09yoey",
        "name": "SAP Inside Track Berlin",
        "websiteUrl": "https://sitberlin.net"
      }
    },
    {
      "id": "ck0jnsi30igaz0b38b4f7hrg8",
      "date": "2019-05-25T00:00:00.000Z",
      "location": " thyssenkrupp Quartier – building Q6",
      "insideTrack": {
        "city": "Essen",
        "country": "DE",
        "hashtag": "sitPOTT",
        "id": "ck0jnsmm9ie2v0b20pwnbruvr",
        "name": "SAP Inside Track Ruhrpott",
        "websiteUrl": null
      }
    }
  ]
  console.log("processing events...")
  eventsData.forEach(event => {
    eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
    event.path = `/${event.insideTrack.hashtag}/${event.year}`
    // printSession(event)
  })
  eventsData.forEach(event => {
    createPage({
      path: `${event.path}`,
      component: require.resolve(`./src/templates/event-template.js`),
      context: { event },
    })
  })

  // query allInsideTracksQuery {
  //   gcms {
  //     insideTracks {
  //       name
  //       city
  //       country
  //       websiteUrl
  //       hashtag
  //       events {
  //         location
  //         date
  //       }
  //     }
  //   }
  // }
  const insideTracksData = [
    {
      "name": "SAP Inside Track Berlin",
      "city": "Berlin",
      "country": "DE",
      "websiteUrl": "https://sitberlin.net",
      "hashtag": "sitBER",
      "events": [
        {
          "location": "SAP DATA SPACE",
          "date": "2017-09-02T00:00:00.000Z"
        },
        {
          "location": "SAP DATA SPACE",
          "date": "2018-09-01T00:00:00.000Z"
        },
        {
          "location": "SAP DATA SPACE",
          "date": "2019-08-31T00:00:00.000Z"
        }
      ]
    },
    {
      "name": "SAP Inside Track Ruhrpott",
      "city": "Essen",
      "country": "DE",
      "websiteUrl": "https://wiki.scn.sap.com/wiki/display/events/SAP+Inside+Track+Ruhrpott%2C+May+25th+2019%2C+%23sitPOTT",
      "hashtag": "sitPOTT",
      "events": [
        {
          "location": " thyssenkrupp Quartier – building Q6",
          "date": "2019-05-25T00:00:00.000Z"
        }
      ]
    }
  ]
  console.log("processing insideTracks...")
  // enrich data
  insideTracksData.forEach(insideTrack => {
    insideTrack.events.forEach(event => {
      eventDate = new Date(event.date)
      event.year = eventDate.getFullYear()
    })
    insideTrack.path = `/${insideTrack.hashtag}`
    // printSession(insideTrack)
  })
  // create pages
  insideTracksData.forEach(insideTrack => {
    createPage({
      path: `${insideTrack.path}`,
      component: require.resolve(`./src/templates/insidetrack-template.js`),
      context: { insideTrack },
    })
  })

}

function printSession(data) {
  console.log(JSON.stringify(data))
  console.log("---END---")
}