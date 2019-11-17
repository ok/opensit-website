import { Link } from "gatsby"
import React from "react"

const Footer = () => (
    <footer className="bg-light footer">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li>
                <Link to="/about" className="nav-item nav-link text-secondary">About</Link>
              </li>
              <li>
                <a href="https://twitter.com/opensitnet" className="nav-item nav-link text-secondary">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
)

export default Footer