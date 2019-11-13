import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <div className="container">
    <footer className="bg-light">
      <nav className="navbar px-0 navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/about" className="nav-item nav-link text-secondary">About</Link>
            <a href="https://twitter.com/opensitnet" className="nav-item nav-link text-secondary">Twitter</a>
          </div>
        </div>
      </nav>
    </footer>
  </div>
)

export default Footer