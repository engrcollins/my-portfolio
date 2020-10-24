import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import contactStyles from "./contact.module.scss";
import SEO from "../components/seo";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
    return(
        <Layout>
            <SEO title="Contact" description="Contact Collins Akinbami" />
                <div className={contactStyles.heading}>
                    <h5 align="center">Kindly fill the form below to send me your message...</h5>
                </div>
                <Container className={contactStyles.content}>
                    <form
                        name="contact-form"
                        method="post"
                        action="/thanks/"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        className={contactStyles.contactform}
                    >
                    <Row>
                        <Col xs={3} md={4} className={contactStyles.formlabel}>
                            <label>
                                Name:
                            </label>
                        </Col>
                        <Col xs={6} md={8} className={contactStyles.forminput}>
                        
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact-form" />

                            <input type="text" placeholder="Your name here" name="name" id="name" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col  xs={3} md={4} className={contactStyles.formlabel}>
                            <label>
                                Email:
                            </label>
                        </Col>
                        <Col xs={6} md={8} className={contactStyles.forminput}>
                            <input type="email" placeholder="Your mail here" name="email" id="email" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={3} md={4} className={contactStyles.formlabel}>
                            <label>
                                Subject:
                            </label>
                        </Col>
                        <Col xs={6} md={8} className={contactStyles.forminput}>
                            <input type="text" placeholder="Message subject" name="subject" id="subject" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col  xs={3} md={4} className={contactStyles.formlabel}>
                            <label>
                                Message:
                            </label>
                        </Col>
                        <Col xs={6} md={8} className={contactStyles.forminput}>
                            <textarea name="message" placeholder="Type your message here" id="message" rows="6" col="8" />
                        </Col>
                    </Row>
                    <br />
                    <div align="center" data-netlify-recaptcha />
                    <button type="submit">Send</button> &nbsp; &nbsp;
                    <input type="reset" value="Clear" align="center" />
                </form>
            </Container>
        </Layout>
    )
}
export default Contact;