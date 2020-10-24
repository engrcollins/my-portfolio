import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import indexStyles from "./index.module.scss";
import developer from "../images/developer.gif";
import "../styles/style.scss";
import { Badge, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import SEO from "../components/seo";

const IndexPage = () => {
  return(
  <Layout>
  <SEO title="Home" description="This page is the landing page" />
    <Container>
      <Row className={indexStyles.intro}> 
        <Col xs={12} md={8} className={indexStyles.bio}>
          <p>
            <b style={{fontSize:"28px"}}>Hi, my name is <span style={{color:"blue"}}>Collins Akinbami.</span></b>
            <br />
            <b style={{fontSize:"18px"}}>I'm a Software Developer, Telecoms Engineer and budding Cloud Engineer.</b>
            <br /><br />
            <i style={{fontSize:"16px"}}>If you have a web project or creative need that I can help with, kindy contact me👇:</i>
            <br />
            <div className="socialMedia">
              <a href="https://github.com/engrcollins" target="_blank">
                <div>
                  <i class="fa fa-github fa-1x fa-inverse" style={{fontSize:"30px", borderRadius:'45%'}}></i>
                </div>
              </a>
              
              <a href="https://twitter.com/engrcollins14" target="_blank">
                <div>
                  <i class="fa fa-twitter fa-1x" style={{fontSize:"30px", borderRadius:'45%'}}></i>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/collins-akinbami-81b58270/" target="_blank">
                <div >
                  <i class="fa fa-linkedin fa-1x" style={{fontSize:"30px", borderRadius:'45%'}}></i>
                </div>
              </a>
              {/*<a href="https://stackoverflow.com/users/14106008/collins-akinbami"  target="_blank"><i class="fa fa-stackOverflow"></i></a>*/}
            </div>
          </p>
        </Col>
        <Col xs={11} md={4} className={indexStyles.devImg}>
          <img src={developer} alt="developer working" style={{maxWidth:"220px", maxHeight:"235px", borderRadius:"20px"}} />
        </Col>
      </Row>
    </Container>
    <br />

    <div className={indexStyles.about}>
      <p>
          I'm passionate about open-source and technology in general. I have extensive experience in designing and developing websites using HTML5, CSS, JavaScript, ReactJS, jQuery, Bootstrap, Material UI, NodeJS, PHP amongst other tools. If I am not coding, you can find me reading, working out or watching football.
      </p>
    </div>
    <br />

    <hr />
    <br />

    <h3><b>Tools and Technologies I Can Use</b></h3>
      <Row >
        <Col xs={6} md={6}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootsrap</li>
            <li>jQuery</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Sass</li>
          </ul>
        </Col>
        <Col xs={6} md={6}>
          <ul>
            <li>Figma</li>
            <li>VS Code</li>
            <li>Gatsby</li>
            <li>Webpack</li>
            <li>Github</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </Col>
      </Row>
      <br />

      <hr />
      <br />

      <div>
        <h3><b>Latest Projects</b></h3>
        <ListGroup>
          <ListGroupItem>
            <a href="https://dev-catalog.netlify.app" target="_blank">Dev Catalog</a><Badge variant="primary" style={{float:"right"}}>ReactJS</Badge>&nbsp;<Badge variant="warning" style={{float:"right"}}>JavaScript</Badge>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://cub-tapestry.netlify.app" target="_blank">Cub Tapestry</a>
            <Badge variant="info" style={{float:"right"}}>jQuery</Badge>&nbsp;<Badge variant="warning" style={{float:"right"}}>JavaScript</Badge>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://collinsakinbami.netlify.app" target="_blank">Collins Akinbami</a><Badge variant="secondary" style={{float:"right"}}>Gatsby</Badge><Badge variant="warning" style={{float:"right"}}>JavaScript</Badge>
          </ListGroupItem>
        </ListGroup>
      </div>
      <br />

      <hr />
      <br />

      <div>
      <h3><b>Featured Writing</b></h3>
        <ListGroupItem>
          <ListGroupItem><Link to="/blog/the-real-cost-of-learning">The Real Cost of Learning</Link></ListGroupItem>
        </ListGroupItem>
      </div>
      <br />

      <hr />
      <br />

      <div>
        <h3><b>Contact Me</b></h3>
        <p>
          I'm <b>currently open to freelance projects or full-time work.</b> If you're interested in working with me, please get in touch using one of the methods below. Or feel free to just say <i>Hi</i>. I like that too.
        </p>
          <Row>
            <Col xs={8} md={6}>
              <b>Have a project in mind?...</b>
              <br />
              <Link to="/contact" target="_blank">Contact me directly.</Link>
              <br />
              <br />
              <p><b>Or send me a mail...</b>
                <pre>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akinbamicollins@gmail.com&su=SUBJECT&body=" target="_BLANK"><i class="fa fa-envelope-o fa-fw"></i> akinbamicollins@gmail.com</a>
                </pre>
              </p>
            </Col>
            <Col xs={4} md={6}>
              <b>You can also follow me online:</b>
              <br />
              <ul>
                <li>
                  <a href="https://twitter.com/engrcollins14" target="_blank"><i class="fa fa-twitter fa-2x " style={{fontSize:"14px", borderRadius:'2%', padding:'4px'}}><b> Twitter</b></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/collins-akinbami-81b58270/" target="_blank"><i class="fa fa-linkedin fa-2x " style={{fontSize:"14px", borderRadius:'2%', padding:'4px'}}><b> LinkedIn</b></i></a>
                </li>
                <li>
                  <a href="https://github.com/engrcollins" target="_blank"><i class="fa fa-github fa-2x " style={{fontSize:"14px", borderRadius:'2%', padding:'4px'}}><b> Github</b></i></a>
                </li>
              </ul>
              </Col>
            </Row>
      </div>
  </Layout>
  )
}

export default IndexPage
