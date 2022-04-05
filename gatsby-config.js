require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `OpenSIT`,
    description: `All SAP Inside Track Sessions in one place.`,
    author: `@oliver`,
    siteUrl: 'https://opensit.net',
    twitter: '@opensitnet'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OpenSIT`,
        short_name: `OpenSIT`,
        description: `All SAP Inside Track Sessions in one place.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/opensit-favicon_400x400.png`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
        options: {
          endpoint: process.env.GRAPHCMS_ENDPOINT,
          token: process.env.GRAPHCMS_TOKEN
        },
    },
    `gatsby-plugin-sharp`,
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, sessions } }) => {
              return sessions.nodes.map(session => {
                const date = new Date(session.event.date)
                const slug = `/${getSlug(session.event.insideTrack.hashtag)}/${date.getFullYear()}/${ getSlug(session.title) }`
                const speaker = session.speakers.map((speaker) => (
                  [speaker.firstName + ' ' + speaker.lastName]
                ))
                return Object.assign({}, {}, { 
                  title: session.title,
                  description: 'A session by ' + speaker.join(' & ') + ' at ' + session.event.insideTrack.name + ' ' + date.getFullYear(),
                  date: session.event.date,
                  url: site.siteMetadata.siteUrl + slug,
                })
              })
            },
            query: `
              {
                sessions: allGraphCmsSession(
                  sort: {order: DESC, fields: createdAt},
                  limit: 50,
                  ) {
                  nodes {
                    title
                    event {
                      date
                      insideTrack {
                        hashtag
                        name
                      }
                    }
                    speakers {
                      firstName
                      lastName
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "OpenSIT: Recent sessions RSS Feed",
            match: "^/",
          },
        ],
      },
    },
  ],
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
