import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="insideTrack-container">
      <div className="row justify-content-center align-items-center" style={{marginTop: `3rem`,}}>
        <div className="col col-lg-3">
          <StaticImage src="../images/40fab.png" alt="Cute baby looking confused"/>
        </div>
        <div className="col col-lg-5">
          <h3>We couldn't find the page you are looking for.</h3>
          <p>Here are some helpful links instead:</p>
          <Link to={`/`}>Back to start</Link>
        </div>
      </div>   
    </div>
  </Layout>
)

export default NotFoundPage
