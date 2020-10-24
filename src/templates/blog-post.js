import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";
import Img from "gatsby-image";
import postStyles from "./blogPost.module.scss"
import SEO from "../components/seo";
import { Helmet } from "react-helmet"
import { FacebookProvider, Comments, Like } from 'react-facebook';
import { Button } from "react-bootstrap";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        author
        featured{
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
      fileAbsolutePath
      html
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
    <SEO title={props.data.markdownRemark.frontmatter.title} description="This is a blog post" />
    <div className={postStyles.content}>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <span className={postStyles.meta}>
        Posted on {props.data.markdownRemark.frontmatter.date}  by <b>{props.data.markdownRemark.frontmatter.author}</b> <span> / </span>{" "}
        {props.data.markdownRemark.timeToRead} min read
      </span>

      {props.data.markdownRemark.frontmatter.featured && (
        <Img
          className={postStyles.featured}
          fluid={
            props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid
          }
          alt={props.data.markdownRemark.frontmatter.title}
        />
      )}

      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <div>
        Kindly drop your comments below.
        <br />
        To read more of my articles, click <a href='../'>here</a>. Keep reading!!! 😊😊
        <br /> <br />
        <div class="sharethis-inline-reaction-buttons"></div>
        <br />
        <div class="sharethis-inline-share-buttons"></div>
        <br />
        <div>
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" target="_BLANK">
            <i class="fa fa-twitter fa-1x " style={{fontSize:"14px", borderRadius:'2%', padding:'4px'}}><b> Tweet</b></i>
            </a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        <div>
          <FacebookProvider appId="347403556391034">
            <Like href="?currentpagelink=true" colorScheme="dark" showFaces share />
            <br />
            <Comments href="http://www.facebook.com" />
          </FacebookProvider>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default BlogPost