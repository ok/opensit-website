import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-dark" style={{marginBottom: `2rem`,}}>
    <div className="insideTrack-container">
      <nav className="navbar px-0 navbar-expand-lg navbar-light bg-dark">
        <h2><Link to="/" className="text-light">{siteTitle}</Link></h2>
        <div className="d-inline-flex" id="navbarNavAltMarkup">
          <Link to="/" className="nav-item nav-link text-light">Home</Link>
          <Link to="/about" className="nav-item nav-link text-light">About</Link>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
