'use strict';


import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import 'odometer';

// scrolling odometer
function dynamicNumbers() {

    // checking, if user scrolled to certain element
    function isScrolledIntoView(elem) {

        let docViewTop = $(window).scrollTop();
        let docViewBottom = docViewTop + $(window).height();
        let elemTop = $(elem).offset().top;
        let elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function testScroll() {

        if (isScrolledIntoView(odometer1)) {
            odometer1.innerHTML = 42;
        }
        if (isScrolledIntoView(odometer2)) {
            odometer2.innerHTML = 123;
        }
        if (isScrolledIntoView(odometer3)) {
            odometer3.innerHTML = 15;
        }
        if (isScrolledIntoView(odometer4)) {
            odometer4.innerHTML = 99;
        }
        if (isScrolledIntoView(odometer5)) {
            odometer5.innerHTML = 24;
        }
    }

    if (isScrolledIntoView(odometer1)) {
        setTimeout(function () {
            testScroll();
        }, 10);
    }

    function init() {
        window.onscroll = testScroll;
    }

    return {
        init: init
    }
    
}

export default dynamicNumbers;
