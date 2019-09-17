const path = require(`path`)

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

  const sessionsData = [
    {
      "id": "ck0fr9r495b4s0b20ka238xwx",
      "title": "Handcuffed, blindfolded… what now?!",
      "speaker": "Bart van de Kamp, Soumalya Nath",
      "slidesUrl": null,
      "recordingUrl": "https://www.youtube.com/watch?v=5GaISNTyyyM",
      "event": {
        "date": "2019-08-31T00:00:00.000Z",
        "location": "SAP DATA SPACE",
        "insideTrack": {
          "name": "SAP Inside Track Berlin",
          "hashtag": "sitBER",
          "country": "DE",
          "city": "Berlin",
          "websiteUrl": "https://sitberlin.net"
        }
      }
    },
    {
      "id": "ck0frs79xi4qy0b592llp8v1v",
      "title": "Design thinking as a tool for SAP Activate workshops",
      "speaker": "Anne Johnson ",
      "slidesUrl": null,
      "recordingUrl": "https://www.youtube.com/watch?v=ew5VoJCslKA",
      "event": {
        "date": "2019-08-31T00:00:00.000Z",
        "location": "SAP DATA SPACE",
        "insideTrack": {
          "name": "SAP Inside Track Berlin",
          "hashtag": "sitBER",
          "country": "DE",
          "city": "Berlin",
          "websiteUrl": "https://sitberlin.net"
        }
      }
    },
    {
      "id": "ck0fu762j5l3z0b20tuk5vy7n",
      "title": "Building the RIGHT it before you build it RIGHT",
      "speaker": "Tudor Riscutia",
      "slidesUrl": null,
      "recordingUrl": "https://www.youtube.com/watch?v=RkyiZbEfa_I",
      "event": {
        "date": "2019-08-31T00:00:00.000Z",
        "location": "SAP DATA SPACE",
        "insideTrack": {
          "name": "SAP Inside Track Berlin",
          "hashtag": "sitBER",
          "country": "DE",
          "city": "Berlin",
          "websiteUrl": "https://sitberlin.net"
        }
      }
    }
  ]

  console.log("processing sessions...")
  // enrich data
  sessionsData.forEach(session => {
    sessionDate = new Date(session.event.date)
    session.event.year = sessionDate.getFullYear()
    session.event.path = `/${session.event.insideTrack.hashtag}/${session.event.year}`
    session.path = `/${session.event.insideTrack.hashtag}/${session.event.year}/${session.id}`
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

  // query allSessionsQuery {
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