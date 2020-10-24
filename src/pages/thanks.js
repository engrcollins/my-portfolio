import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import contactStyles from "./contact.module.scss";
import SEO from "../components/seo";
import { Container } from "react-bootstrap";

const Thanks = () => {
    return(
        <Layout>
            <SEO title="Contact" description="Contact Collins Akinbami" />
                <div className={contactStyles.heading}>
                    <h5 align="center">Thank you for contacting Collins Akinbami</h5>
                    <p>Your message has been received.</p>
                    <p> Go back to my <Link to="/">Homepage</Link></p>
                </div>
                <Container className={contactStyles.content}>
            </Container>
        </Layout>
    )
}
export default Thanks;