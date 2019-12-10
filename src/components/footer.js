import { Link } from "gatsby"
import React from "react"

const Footer = () => (
    <footer className="bg-light footer">
      <div className="insideTrack-container">
        <span><Link to="/about" className="text-secondary">About</Link></span>
        <span><a href="https://twitter.com/opensitnet" className="text-secondary">Twitter</a></span>
      </div>
    </footer>
)

export default Footer