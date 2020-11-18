import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import contactStyles from "./contact.module.scss";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import './testflip.css';

const Test = () => {
  
      /*function rotateCard(btn){
        var $card = $(btn).closest('.card-container');
        console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
      }*/

      const rotateCard = (e) =>{
        //var card = (e).closest('.card-container');
        var card = document.getElementById ('manual')
        console.log(card);
        if(card.classList.contains('hover')){
            card.classList.remove('hover');
        } else {
            card.classList.add('hover');
        }
      }
      

    return(
        <Layout>
            <SEO title="Contact" description="Contact Collins Akinbami" />
                <Container className={contactStyles.content}>
            <div class="col-md-4 col-sm-6">
                <div class="card-container">
                    <div class="card">
                        <div class="front">
                            <div class="cover">
                                <img src="https://www.clipartsgram.com/image/129556292-kyz84k3.jpg"/>
                            </div>
                            <div class="user">
                                <img class="img-circle" src="https://www2.mmu.ac.uk/media/mmuacuk/style-assets/images/r-research/profile-Zeyad.jpg"/>
                            </div>
                                
                            <div class="content">
                                <div class="main">
                                    <h3 class="name">John Marvel</h3>
                                    <p class="profession">CEO</p>
                                    <p class="text-center">"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p>
                                </div>
                                <div class="footer">
                                    <i class="fa fa-mail-forward"></i> Auto Rotation
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div class="header">
                                <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
                            </div>
                            <div class="content">
                                <div class="main">
                                    <h4 class="text-center">Job Description</h4>
                                    <p class="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                                    <div class="stats-container">
                                        <div class="stats">
                                            <h4>235</h4>
                                            <p>
                                                Followers
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>114</h4>
                                            <p>
                                                Following
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>35</h4>
                                            <p>
                                                Projects
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="footer">
                                <div class="social-links text-center">
                                    <a href="http://deepak646.blogspot.in/" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
                                    <a href="http://deepak646.blogspot.in/" class="google"><i class="fa fa-google-plus fa-fw"></i></a>
                                    <a href="http://deepak646.blogspot.in/" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>
          <div class="col-sm-1"></div>
            <div class="col-md-4 col-sm-6">
                <div class="card-container manual-flip" id="manual">
                    <div class="card">
                        <div class="front">
                            <div class="cover">
                                <img src="https://www.clipartsgram.com/image/124089475-california-beaches-tumblr-wallpaper-3.jpg"/>
                            </div>
                            <div class="user">
                                <img class="img-circle" src="http://www.outbrain.com/risingstars/wp-content/uploads/708x708-RS-Profile-Ashley-Callahan-400x400.jpg"/>
                            </div>
                            <div class="content">
                                <div class="main">
                                    <h3 class="name">Andrew Mike</h3>
                                    <p class="profession">Web Developer</p>
                                    <p class="text-center">"Lamborghini Mercy Your chick she so thirsty I'm in that two seat Lambo"</p>
                                </div>
                                <div class="footer">
                                    <button class="btn btn-simple" onClick={rotateCard}>
                                        <i class="fa fa-mail-forward"></i> Manual Rotation
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div class="header">
                                <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
                            </div>
                            <div class="content">
                                <div class="main">
                                    <h4 class="text-center">Job Description</h4>
                                    <p class="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                                    <div class="stats-container">
                                        <div class="stats">
                                            <h4>235</h4>
                                            <p>
                                                Followers
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>114</h4>
                                            <p>
                                                Following
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>35</h4>
                                            <p>
                                                Projects
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="footer">
                                <button class="btn btn-simple" rel="tooltip" title="Flip Card" onClick={rotateCard}>
                                    <i class="fa fa-reply"></i> Back
                                </button>
                                <div class="social-links text-center">
                                    <a href="http://deepak646.blogspot.in/" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
                                    <a href="http://deepak646.blogspot.in/" class="google"><i class="fa fa-google-plus fa-fw"></i></a>
                                    <a href="http://deepak646.blogspot.in/" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
                 <div class="col-sm-1"></div>
            <div class="col-md-4 col-sm-6">
                <div class="card-container">
                    <div class="card">
                        <div class="front">
                            <div class="cover">
                                <img src="http://www.hdimageson.com/wp-content/uploads/2016/05/beach-images-tumblr-300x188.jpg"/>
                            </div>
                            <div class="user">
                                <img class="img-circle" src="https://1.bp.blogspot.com/-aruLLVlXyJM/V_t-TxTncZI/AAAAAAAAJ3k/hnQKKVmKuOY_awf1nHGTsukGfw4qrde-gCLcB/s400/2.jpg"/>
                            </div>
                            <div class="content">
                                <div class="main">
                                    <h3 class="name">Inna Corman</h3>
                                    <p class="profession">Product Manager</p>

                                    <p class="text-center">"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p>
                                </div>
                                <div class="footer">
                                    <div class="rating">
                                        <i class="fa fa-mail-forward"></i> Auto Rotation
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="back">
                            <div class="header">
                                <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
                            </div>
                            <div class="content">
                                <div class="main">
                                    <h4 class="text-center">Job Description</h4>
                                    <p class="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                                    <div class="stats-container">
                                        <div class="stats">
                                            <h4>235</h4>
                                            <p>
                                                Followers
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>114</h4>
                                            <p>
                                                Following
                                            </p>
                                        </div>
                                        <div class="stats">
                                            <h4>35</h4>
                                            <p>
                                                Projects
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="footer">
                                <div class="social-links text-center">
                                    <a href="http://deepak646.blogspot.in/" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
                                    <a href="http://deepak646.blogspot.in/" class="google"><i class="fa fa-google-plus fa-fw"></i></a>
                                    <a href="http://deepak646.blogspot.in/" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
                </Container>
        </Layout>
    )
}
export default Test;