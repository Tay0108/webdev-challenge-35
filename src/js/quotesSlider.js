'use strict';

// quotes module
function quotesSlider() {

    let slideIndex = 1;
    let arrowsLeft;
    let arrowsRight;

    function plusDivs(n) {
        changeQuote(slideIndex += n);
    }

    function changeQuote(n) {
        let singleSlide = document.getElementsByClassName('quote-slider-item');

        //set all <li> on display: none;
        for (let i = 0; i < singleSlide.length; i++) {
            singleSlide[i].style.display = 'none';
        }

        if (n > singleSlide.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = singleSlide.length;
        }

        singleSlide[slideIndex - 1].style.display = 'block';
    }

    function init() {
        changeQuote(slideIndex);
        arrowsLeft = document.getElementsByClassName('quote-arrow-left');
        arrowsRight = document.getElementsByClassName('quote-arrow-right');

        for (let i = 0; i < arrowsLeft.length; i++) { // we can use one loop since there is same amount of arrows
            arrowsRight[i].addEventListener('click', function () {
                plusDivs(1);
            });
            arrowsLeft[i].addEventListener('click', function () {
                plusDivs(-1);
            });
        }
    }

    return {
        init: init
    }
}

export default quotesSlider;
