import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import aboutStyles from "./about.module.scss";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import GatsbyImage from "gatsby-image";

const About = () => {
  return (
    <Layout>
    <SEO title="About" description="This page describes Collins Akinbami" />
      <div className={aboutStyles.heading}>
        <h3>ABOUT <b><em>COLLINS AKINBAMI</em></b></h3>
        <h5 align="center">The Journey So Far...</h5>
      </div>
      <div className={aboutStyles.content}>
        <p>
          My name is Collins O'tobi Akinbami, I hail from Lagos, Nigeria. I had my elementary and high school education in Ibadan, Nigeria where I was the school Time Keeper and Head Prefect respectively. 
          In 2009, I went for my National Diploma in Computer Engineering at The Federal Polytechnic Ede, Nigeria. There, I was granted a Polytechnic Scholarship Award  in my second(final) year. I graduated from the polytechnic with a Distinction class of grade in October 2010.
          </p>

          <p>
          My strive for better academic value took me to Obafemi Awolowo University Ile-Ife, Nigeria where I was admitted via Direct Entry to study Materials Science & Engineering in same 2010. Here, I was privileged to be the departmental Electoral Chairman that conducted & supervised departmental elections in 2014. I graduated from the ivory tower with 2nd Class Upper Division.
          </p>

          <p>
          Moving on, I had the opportunity of doing my voluntary national service (otherwise known as NYSC) at Federal University of Petroleum Resources, Warri, Nigeria. I worked in the capacity of a Research and Administrative Assistant helping the head of department, lecturers and admin staff with their research and administrative works.
          </p>

          <p>
          After passing out of national service in April 2017, I joined one of the top mobile telecommunication companies in Africa, <a href="https://www.gloworld.com/gh" target="_blank">Glo Mobile</a> as a Management Trainee operating from Ghana. In the year 2018, I became the Data Network Performance Engineer.
          </p>

          <p>
          I also work as a freelance Website Developer and I have much deeper interests in JavaScript, ReactJS and NodeJS. The web development journey started in 2018 when I started out self-learning Vanilla JavaScript as an hobby. I taught myself how to build basic websites using pure HTML, CSS and JavaScript with the help of <a href="https://w3schools.com" target="_blank">W3school</a> and <a href="https://theodinproject.com" target="_blank">The Odin Project</a>. Today, I am highly proficient not only in Vanilla JavaScript but also prominent JavaScript libraries like jQuery, ReactJS, NodeJS.
          </p>
          
          <p>Furthermore, I learned(and am still learning) many other web development technologies, libraries and frameworks like Bootstrap, Gatsby, Webpack, Sass, ExpressJS, NextJs as well as the popular distributed version control system, Git and Github. The learning still continues, there is no end to it.
          </p>

          <p>
          I'm an advocate of peace ✌️ and open-source. I also love reading, working out, watching football and playing games.
          </p>
          <p> 
          You can check my <Link to={"/"}>Home Page</Link> to know about how to contact me for collaboration or project needs, or to even just say <i>Hi</i>. I like that too.
          </p>
          <p> 
          Thanks for taking your time to know about me.  <b>See you at the top! 👍 ✌️ </b>
        </p>
        <br />
            <pre style={{textAlign:"center"}}>
              <q>
                <em>The journey is never ending. <br />
                There’s always going to be growth, <br />
                improvement, adversity; you just <br />
                  have to take it all in and do <br />
                  what’s right, continue to grow,<br />
                  continue to live in the moment.</em></q><br />
                  <b>-Antonio Brown</b>
            </pre>
      </div>
    </Layout>
  )
}

export default About;