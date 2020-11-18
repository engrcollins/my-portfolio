/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
//import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from 'react-helmet'
import Header from "./header";
import Navigation from "./navbar";
import Footer from "./footer";
import "../styles/style.scss";
import layoutStyles from "./layout.module.scss";
import { Container, Row, Col } from 'react-bootstrap';

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5f5a0e50edaeb70012ee76db&product=sop' async='async'></script>
      </Helmet>
        <Header />
        <Navigation />
        <div className={layoutStyles.content}>
          <Container>
            <Row>
              <Col xs={0} md={1}>

              </Col>
              <Col xs={12} md={10}>
                <div className={layoutStyles.mainContent}>{props.children}</div>
              </Col>
              <Col xs={0} md={1}>
            
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
    </div>
  )
}
export default Layout