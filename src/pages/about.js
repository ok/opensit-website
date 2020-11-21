import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  console.log(JSON.stringify(data));
  return (
  <Layout>
    <SEO title="OpenSIT: About" />
    <div className="insideTrack-container">
      <h3>About OpenSIT</h3>
      <p><a href="https://community.sap.com/events/inside-track/about-inside-track" target="_blank" rel="noopener noreferrer">SAP Inside Tracks</a> are typically one day conferences, locally organised by passionate SAP community members, where knowledge and experience is being shared in talks or sessions. To make their conference content more broadly accessible, an increasing number of SAP Inside Tracks have started to live stream and record these sessions.</p>
      <p>The mission of OpenSIT is to make the session content recorded at SAP Inside Tracks easily accessible to SAP community members.</p>
      <p>All session recordings are currently hosted on YouTube and distributed across various channels. They are often hard to find and to discover. <a href="https://opensit.net">opensit.net</a> makes all SAP Inside Track session recordings accessible from this website. Available sessions are organised by SAP Inside Tracks and their annual conferences. Each SAP Inside Track page provides links to the respective Twitter hashtag, YouTube account and Twitter channel, if available. Each session page lists the session speakers and, if available, links to their <a href="https://community.sap.com" target="_blank" rel="noopener noreferrer">SAP Community</a> profiles or Twitter accounts.</p>
      <p>The SAP community has a strong presence on Twitter. <a href="https://twitter.com/opensitnet" target="_blank" rel="noopener noreferrer">@opensitnet</a> provides updates on new sessions or events available on <a href="https://opensit.net">opensit.net</a>, and promotes random session content to its followers. <a href="https://twitter.com/opensitnet" target="_blank" rel="noopener noreferrer">@opensitnet</a> is also used to post updates about changes and enhancements to this website.</p>

      <h3>Streaming and recording SAP Inside Tracks</h3>
      <p>SAP Inside Track organisers have collaborated on a <a href="https://wiki.scn.sap.com/wiki/display/events/SAP+Community+Events+Live+Streaming+How-To" target="_blank" rel="noopener noreferrer">how-to document in SCN Wiki</a>, where the various setups and required equipments are being documented. OpenSIT of course supports the idea to make more sessions online accessible, that get recorded at the 40+ SAP Inside Tracks happening worldwide each year. Where possible, we help to share and improve the documentation of recording setups for all SAP Inside Track and their organisers.</p>

      <h3>Data Privacy</h3>
      <p>The <a href="https://opensit.net">opensit.net</a> website aggregates public available information from YouTube and <a href="https://wiki.scn.sap.com/wiki/display/events/SAP+Inside+Track" target="_blank" rel="noopener noreferrer">SCN Wiki</a>. The session speakers and their social media profiles are linked, if available. If you like to see your name or content removed from this site, please contact us.</p>
      <p>At this point there is no usage tracking being done on this site. All YouTube videos are embedded with <a href="https://support.google.com/youtube/answer/171780?hl=en" target="_blank" rel="noopener noreferrer">privacy-enhanced mode enabled</a>. Please check out the <Link to="/imprint">imprint</Link> and <Link to="/privacy">privacy</Link> page for additional information</p>

      <h3>Thanks</h3>
      <p>All listed session content is only available thanks to the many organisers of SAP Inside Tracks around the world, who are organising the professional full day events with 50-150 participants, while having a regular job in the SAP ecosystem. This site wouldn't exist without all of you.</p>
      <p>The <a href="https://opensit.net">opensit.net</a> website is build using <a href="https://jamstack.wtf/" target="_blank" rel="noopener noreferrer">JAMstack principles</a>. Modern web development tools enable the building of highly scalable web sites with fairly low effort at no cost. <a href="https://opensit.net">opensit.net</a> is build using these freely available frameworks and services:</p>
      <div className="mb-2">
        <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer"><Img fixed={data.gatsbylogo.childImageSharp.fixed} aria-label="Gatsby logo" /></a>
      </div>
      <div className="mb-2">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Img fixed={data.githublogo.childImageSharp.fixed} aria-label="Github logo" /></a>
      </div>
      <div className="mb-2">
        <a href="https://graphcms.com" target="_blank" rel="noopener noreferrer"><Img fixed={data.graphcmslogo.childImageSharp.fixed} aria-label="GraphCMS logo" /></a>
      </div>
      <div className="mb-2">
        <a href="https://netlify.com" target="_blank" rel="noopener noreferrer"><Img fixed={data.netlifylogo.childImageSharp.fixed} aria-label="Netlify logo" /></a>
      </div>
      <p className="pb-5"><a href="https://opensit.net">opensit.net</a> has been designed and implemented by Colin Krawchuk und <a href="https://twitter.com/oliver" target="_blank" rel="noopener noreferrer">Oliver Kohl</a>. The site was officially launched at SAP Inside Track Netherlands on 23.11.2019.</p>
    </div>
  </Layout>
)}

export const query = graphql`
  query {
    gatsbylogo: file( name: { eq: "gatsbyjs-logo" }) {
      childImageSharp {
        fixed(width: 250) 
        {
        ...GatsbyImageSharpFixed
        }
      }
    }
    githublogo: file( name: { eq: "github-logo" }) {
      childImageSharp {
        fixed(width: 250) 
        {
        ...GatsbyImageSharpFixed
        }
      }
    }
    netlifylogo: file( name: { eq: "netlify-logo" }) {
      childImageSharp {
        fixed(width: 250) 
        {
        ...GatsbyImageSharpFixed
        }
      }
    }
    graphcmslogo: file( name: { eq: "graphcms-logo" }) {
      childImageSharp {
        fixed(width: 250) 
        {
        ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default AboutPage
