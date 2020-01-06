import { Link } from "gatsby"
import React from "react"

const Footer = () => (
    <footer className="bg-light footer">
      <div className="insideTrack-container">
        <span><Link to="/imprint" className="text-secondary">Imprint</Link></span>
        <span><Link to="/privacy" className="text-secondary">Privacy</Link></span>
        <span><a href="https://twitter.com/opensitnet" className="text-secondary">Twitter</a></span>
      </div>
    </footer>
)

export default Footer