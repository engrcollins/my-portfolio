import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
  /*
  $(document).ready(function() {
  
    var content = $('.content');
    var currentItem = content.filter('.active');
    var steps = $('.card').filter('.steps');
    var inactive1 = $('.inactive-1');
    var inactive2 = $('.inactive-2');

    $('.button').click(function() {
        var nextItem = currentItem.next();
        var lastItem = content.last();
        var contentFirst = content.first();
      
        currentItem.removeClass('active');

        if (currentItem.is(lastItem)) {
            currentItem = contentFirst.addClass('active');
            currentItem.css({'right': '10%', 'opacity': '1'});
            $('.step').animate({width: '33%'});
            inactive1.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
            inactive2.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);
          
        } else if (currentItem.is(contentFirst)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '66%'});
            inactive2.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
          
        } else {
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '100%'});
            inactive1.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
        } 
    });
  
});*/

  return (
    <Layout>
    <SEO title="Resume" description="View Collins Akinbami's resume here" />
      <h1>Resume</h1>
      <div class="container">
        <div class="inner-container">          
          <div class="card inactive-1"></div>
              <div class="card inactive-2"></div>
              <div class="card">
                  <div class="content active">
                      <h1>Step 1</h1>
                      <p>Make perfectly hot homemade coffee. Carefully pour into coffee cup. <i class="em em-coffee"></i></p>
                      <a class="button" href="#">Next step &rarr;</a>
                  </div>
                  <div class="content">
                      <h1>Step 2</h1>
                      <p>Trip. Spill all over the place.</p>
                      <a class="button" href="#">Next step &rarr;</a>
                  </div>
                  <div class="content">
                      <h1>Step 3</h1>
                      <p>Repeat.</p>
                      <a class="button" href="#">Next step &rarr;</a>
                  </div>
                  <div class="progress-container">
                      <div class="step"></div>
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}

export default Contact