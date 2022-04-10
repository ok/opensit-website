import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThanksPage = ({ data }) => {
  console.log(JSON.stringify(data));
  return (
  <Layout>
    <Seo title="OpenSIT: Thanks" />
    <div className="insideTrack-container">
      <h3>Feedback</h3>
      <div className="row justify-content-center align-items-center" style={{marginTop: `3rem`,}}>
        <div className="col col-lg-3">
          <StaticImage src="../images/thanks.png" alt="Thanks a lot!"/>
        </div>
        <div className="col col-lg-5">
          <h3>Thanks a lot for your feedback.</h3>
          <Link to={`/`}>Back to start</Link>
        </div>
      </div>   
    </div>
  </Layout>
)}

export default ThanksPage
