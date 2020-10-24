import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import footerStyles from "./footer.module.scss"

const Footer = () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                author
              }
            }
          }
        `
      )
  return (
    <footer>
    <div className={footerStyles.scallopUp}></div>
      <div className={footerStyles.siteFooter}>
        <div className={footerStyles.container}>
          <p>
            Site developed with 💖 by <a href="www.twitter.com/engrcollins14">{data.site.siteMetadata.author}</a> 
            <br />
            &copy;{" "}
            {new Date().getFullYear().toString()}{" "}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer