import React from "react"
import { Link } from "gatsby"
import { FaHeart, FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = () => (
    <footer className="bg-light footer">
      <div className="insideTrack-container">
        <div className="row">
          <div className="col">
            <span><Link to="/about" className="text-secondary">About</Link></span>
            <span><Link to="/imprint" className="text-secondary">Imprint</Link></span>
            <span><Link to="/privacy" className="text-secondary">Privacy</Link></span>
          </div>
          <div className="col text-center footer-heart">
            <IconContext.Provider value={{ className: "big-icon heart-icon" }}>
              Made with <FaHeart/> in Berlin
            </IconContext.Provider>
          </div>
          <div className="col text-right">
            <IconContext.Provider value={{ className: "big-icon" }}>
              <a href="https://twitter.com/opensitnet" className="text-secondary"><FaTwitter/></a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer