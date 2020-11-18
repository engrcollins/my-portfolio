import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "react-bootstrap";
import $ from 'jquery';
import './teststack.scss';

const Stack = () => {
    const shift = () =>{
        var contentstack = $('.contentstack');
        var currentItem = contentstack.filter('.activestack');
        console.log(contentstack)
        console.log(currentItem)
        var steps = $('.cardstack').filter('.steps');
        var inactive1 = $('.inactive-1');
        var inactive2 = $('.inactive-2');

        var nextItem = currentItem.next();
        var lastItem = contentstack.last();
        var contentstackFirst = contentstack.first();

        currentItem.removeClass('activestack');

        if (currentItem.is(lastItem)) {
            currentItem = contentstackFirst.addClass('activestack');
            currentItem.css({'right': '10%', 'opacity': '1'});
            $('.step').animate({width: '33%'});
            inactive1.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
            inactive2.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);

        } else if (currentItem.is(contentstackFirst)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('activestack');
            $('.step').animate({width: '66%'});
            inactive2.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);

        } else {
            currentItem = nextItem.addClass('activestack');
            $('.step').animate({width: '100%'});
            inactive1.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
        } 
    }
    return(
            <div class="contstack">
                <div class="inner-contstack">          
                    <div class="cardstack inactive-1"></div>
                    <div class="cardstack inactive-2"></div>
                    <div class="cardstack">
                        <div class="contentstack activestack">
                            <h1>Step 1</h1>
                            <p>Click next to see all wishes<i class="em em-coffee"></i></p>
                            <a class="button" onClick={shift} href="#">Next step &rarr;</a>
                        </div>
                        <div class="contentstack">
                            <h1>Step 2</h1>
                            <p>Trip. Spill all over the place.</p>
                            <a class="button" onClick={shift} href="#">Next step &rarr;</a>
                        </div>
                        <div class="contentstack">
                            <h1>Step 3</h1>
                            <p>Repeat.</p>
                            <a class="button" onClick={shift}  href="#">Next step &rarr;</a>
                        </div>
                        <div class="contentstack">
                            <h1>Step 4</h1>
                            <p>Trip. Spill all over the place.</p>
                            <a class="button" onClick={shift} href="#">Next step &rarr;</a>
                        </div>
                        <div class="progress-contstack">
                            <div class="step"></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Stack;