module.exports = {
  siteMetadata: {
    title: `OpenSIT`,
    description: `All SAP Inside Track Sessions in one place.`,
    author: `@oliver`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        url: 'https://api-euwest.graphcms.com/v1/ck07yks3t0aad01cb1pnf3p23/master',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}