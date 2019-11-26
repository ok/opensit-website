import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import fab from "../images/40fab.png"
import { Link } from "gatsby"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="insideTrack-container">
      <div className="row justify-content-center align-items-center" style={{marginTop: `3rem`,}}>
        <div className="col col-lg-3">
          <img src={fab} alt="Fabian"/>
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
