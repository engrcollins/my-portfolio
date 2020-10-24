import React from "react"
//import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.scss"
import Image from "./image.js"
import { Container, Row, Col, Button } from 'react-bootstrap';


const Header = ({ siteTitle }) => {
  const data = useStaticQuery(
    graphql`
    query slug {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
    `
  )
  return (
    <header className={headerStyles.header}>
    <Container>
      <Row className="{headerStyles.overlay}">
        <Col xs={2} md={2} lg={2} className={headerStyles.avatar}>
          <Image />
        </Col>
        <Col xs={10} md={10} lg={10}>
          <div className={headerStyles.heroContent}>
            <p className={headerStyles.brand}>
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </p>
            <p className={headerStyles.description}>
              {data.site.siteMetadata.description}
            </p>
          </div>
        </Col>
      </Row>
      </Container>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <Link to="/">
              <Button variant="light" size="sm" activeClassName={headerStyles.activeMenuItem }>Home</Button>
          </Link>
          <Link to="/blog/">
            <Button variant="light" size="sm" activeClassName={headerStyles.activeMenuItem}>Blog</Button>
          </Link>
          <Link to="/about/">
            <Button variant="light" size="sm" activeClassName={headerStyles.activeMenuItem}>About</Button>
          </Link>
          <Link to="/contact/">
            <Button variant="light" size="sm" activeClassName={headerStyles.activeMenuItem}>Contact</Button>
          </Link>
         {/* <Link to="/resume/">
            <Button variant="light" size="sm" activeClassName={headerStyles.activeMenuItem}>Resume</Button>
          </Link>*/}
        </ul>
      </nav>
    </header>
  )
}

export default Header
