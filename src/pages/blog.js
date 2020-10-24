import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";
import SEO from "../components/seo";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                featured {
                  childImageSharp {
                    fluid(maxWidth: 750) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              timeToRead
              excerpt
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
    <SEO title="Blog" description="This is Collins' blog" />
      <div className={blogStyles.heading}>
        <h3><b>WELCOME TO MY BLOG</b></h3>
        <h5 align="center">Articles, tutorials, snippets, musings, and every other writings...</h5>
      </div>
      <Container className={blogStyles.posts}>
      <Row>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
          <div>
            <Col xs={12} md={6} key={edge.node.id}>
              <Card border="info" style={{ width: '23rem', height: "465px" }}>
              <Card.Body>
                <Card.Title>
                  <Link to={`/blog/${edge.node.fields.slug}/`}>
                    {console.log(edge.node.fields)}
                      {edge.node.frontmatter.title}
                  </Link>
                </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '12px' }}>
                    Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                    {edge.node.timeToRead} min read
                  </Card.Subtitle>
                    {edge.node.frontmatter.featured && (
                      <Img
                        className={blogStyles.featured}
                        fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
                        alt={edge.node.frontmatter.title}
                        style={{ height: "205px" }}
                      />
                    )}
                  <Card.Text className={blogStyles.excerpt}>
                    {edge.node.excerpt}
                  </Card.Text>
                  <Card.Link className={blogStyles.button}><Link to={`/blog/${edge.node.fields.slug}/`}>Read More...</Link></Card.Link>
              </Card.Body>
              </Card>
              <br />
            </Col>
          </div>
          )
        })}
        </Row>
      </Container>
    </Layout>
  )
}

export default Blog;