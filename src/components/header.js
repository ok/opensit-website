import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Header = ({ siteTitle }) => (
  <header className="bg-dark header">
    <div className="insideTrack-container">
    <Navbar className="px-0" bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about" className="text-light">About</Nav.Link>
        <Nav.Link href="/imprint" className="text-light">Imprint</Nav.Link>
        <Nav.Link href="/privacy" className="text-light">Privacy</Nav.Link>
        <IconContext.Provider value={{ className: "big-icon twitter-icon" }}>
          <Nav.Link href="https://twitter.com/opensitnet" target="_blank" className="text-secondary mr-auto"><FaTwitter/></Nav.Link>
        </IconContext.Provider>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
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
