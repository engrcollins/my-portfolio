import React from "react"
//import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import navbarStyles from "./navbar.module.scss"
import Image from "./image.js"
import { Container, Row, Col, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Navigation = ({ siteTitle }) => {

  return (
    <span className={navbarStyles.navContainer} >
        <Navbar className={navbarStyles.navList} collapseOnSelect expand="lg" bg="#93acf0e1" variant="light">
            <Navbar.Brand>
              <Link to="/">
                <Button variant="primary" size="bg" >HOME</Button>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link>
                    <Link to="/blog/" >
                      <Button variant="light" size="sm" className={navbarStyles.butts} >Blog</Button>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/about/" >
                      <Button variant="light" size="sm" className={navbarStyles.butts} >About</Button>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link eventKey={2} to="/contact/" >
                      <Button variant="light" size="sm" className={navbarStyles.butts} >Contact</Button>
                    </Link>
                  </Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title="Games" id="collasible-nav-dropdown" variant="light">
                      <NavDropdown.Item>Whack-A-Mole</NavDropdown.Item>
                      <NavDropdown.Item>Race</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>Top Scorers</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </span>
  )
}

export default Navigation