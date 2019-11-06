import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-dark" style={{marginBottom: `1.45rem`,}}>
    <div className="container">
      <nav className="navbar px-0 navbar-expand-lg navbar-light bg-dark">
        <h2><Link to="/" className="text-light">{siteTitle}</Link></h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link text-light">Home</Link>
            <Link to="/about" className="nav-item nav-link text-light">About</Link>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <form className="form-inline my-2 my-sm-2">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
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
