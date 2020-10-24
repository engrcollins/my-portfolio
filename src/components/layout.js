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
import Footer from "./footer";
import "../styles/style.scss";
import layoutStyles from "./layout.module.scss";

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5f5a0e50edaeb70012ee76db&product=sop' async='async'></script>
      </Helmet>
        <Header />
        <div className={layoutStyles.content}>
            <div className={layoutStyles.mainContent}>{props.children}</div>
        </div>
        <Footer />
    </div>
  )
}
export default Layout