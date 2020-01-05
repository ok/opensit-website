import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import gatsbyLogo from "../images/gatsbyjs-logo.png"
import githubLogo from "../images/github-logo.png"
import graphcmsLogo from "../images/graphcms-logo.png"
import netlifyLogo from "../images/netlify-logo.png"

const AboutPage = () => (
  <Layout>
    <SEO title="OpenSIT: About" />
    <div className="insideTrack-container">
      <h3>About OpenSIT</h3>
      <p><a href="https://community.sap.com/events/inside-track/about-inside-track">SAP Inside Tracks</a> are typically one day conferences, locally organised by passioned SAP community members, where knowledge and experience is being shared in talks or sessions. To make their conference content more broadly accessible, an increasing number of SAP Inside Tracks started to live stream and record these sessions.</p>
      <p>The missions of OpenSIT is to make session content recorded at SAP Inside Tracks easily accessible to SAP community members.</p>
      <p>All session recordings are currently hosted on YouTube, distributed across various channels. They are often hard to find and to discover. <a href="https://opensit.net">opensit.net</a> makes all SAP Inside Track session recordings accessible from this website. Available sessions are organised by SAP Inside Tracks and their annual conferences. Each SAP Inside Track page provides links to the respective Twitter hashtag, YouTube account and Twitter channel, if available. Each session page lists the session speakers and, if available, links to their <a href="https://community.sap.com">SAP Community</a> profiles or Twitter accounts.</p>
      <p>The SAP community has a strong presence on <a href="https://twitter.com">Twitter</a>. <a href="https://twitter.com/opensitnet">@opensitnet</a> provides updates on new sessions or events available on <a href="https://opensit.net">opensit.net</a>, and promotes random session content to its followers. <a href="https://twitter.com/opensitnet">@opensitnet</a> is also used to post updates about changes and enhancements to this website.</p>
      
      <h3>Streaming and recording SAP Inside Tracks</h3>
      <p>SAP Inside Track organisers have a how-to document in SCN Wiki available, where the various setups and required equipments are being documented. OpenSIT of course supports the idea to make more sessions online accessible, that get recorded at the 40+ SAP Inside Tracks happening worldwide each year. Where possible, we help to share and improve the documentation of recording setups for all SAP Inside Track and their organisers.</p>

      <h3>Data Privacy</h3>
      <p>All SAP Inside Track recordings in a single place.</p>
      <p>All SAP Inside Track recordings in a single place.</p>

      <h3>Thanks</h3>
      <p>All listed session content is only available thanks to the many organisers of SAP Inside Tracks around the world, who are organising professional full day events with 50-150 participants, while having a regular job in the SAP ecosystem. This site wouldn't exist without all of you. </p>

      <p>The <a href="https://opensit.net">opensit.net</a> website is build using <a href="https://jamstack.wtf/">JAMstack principles</a>. Modern web development tools enable the building of highly scalable web sites with fairly low effort at no cost. <a href="https://opensit.net">opensit.net</a> is build using these freely available frameworks and services:</p>
      <div className="mb-2">
        <a href="https://gatsbyjs.org"><img src={gatsbyLogo} alt="GatsbyJS logo and website" width="250"></img></a>
      </div>
      <div className="mb-2">
        <a href="https://github.com"><img src={githubLogo} alt="GitHub logo and website" width="250"></img></a>
      </div>
      <div className="mb-2">
        <a href="https://graphcms.com"><img src={graphcmsLogo} alt="GraphCMS logo and website" width="250"></img></a>
      </div>
      <div className="mb-2">
        <a href="https://netlify.com"><img src={netlifyLogo} alt="Netlify logo and website" width="250"></img></a>
      </div>

      <p className="pb-5">OpenSIT was officially launched at SAP Inside Track Netherlands on 23.11.2019.</p>
    </div>
  </Layout>
)

export default AboutPage
