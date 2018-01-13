// opening menu:
var hamburger = document.querySelector('.menu-hamburger');
hamburger.addEventListener('click', function () {
    document.querySelector('.page-nav').classList.add('page-nav-opened');
    document.querySelector('.menu-hamburger').classList.add('.menu-hamburger-hidden');
}, false);

// closing menu:
var close = document.querySelector('.menu-close');
close.addEventListener('click', function () {
    document.querySelector('.page-nav').classList.remove('page-nav-opened');
    document.querySelector('.menu-hamburger').classList.remove('.menu-hamburger-hidden');
}, false);

// checking, if user scrolled to certain element
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// service categories:
$('#photography-btn').click(function () {
    $('#photography-description').slideToggle('slow');
});

$('#creativity-btn').click(function () {
    $('#creativity-description').slideToggle('slow');
});

$('#web_design-btn').click(function () {
    $('#web_design-description').slideToggle('slow');
});

// quotes slider:
var slideIndex = 1;
changeQuote(slideIndex);

function plusDivs(n) {
    changeQuote(slideIndex += n);
}

function changeQuote(n) {
    var i;
    var x = document.getElementsByClassName('quote-slider-item');

    // ustaw wszystkie li na display: none;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }

    x[slideIndex - 1].style.display = 'block';
}

var arrowsLeft = document.getElementsByClassName('quote-arrow-left');
var arrowsRight = document.getElementsByClassName('quote-arrow-right');

for (var i = 0; i < arrowsLeft.length; i++) { // we can use one loop since there is same amount of arrows
    arrowsRight[i].addEventListener('click', function () {
        plusDivs(1);
    });
    arrowsLeft[i].addEventListener('click', function () {
        plusDivs(-1);
    });
}

// scrolling odometer

/* pewnie da sie ladniej, ale nie wiem na razie jak */
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

window.onscroll = testScroll;

/* this will be useful later i guess when making progress bars
 // scrolling menu:
 $(document).on("scroll", function(){
 // or as a shorthand $(document).scroll(function(){
 if($(document).scrollTop() > jQuery(window).height()) {
 //begin to scroll
 $("#list-progress").css({
 'position' : 'fixed',
 'top' : 0
 });
 }
 else {
 //lock it back into place
 $("#list-progress").css("position","relative");
 }
 });
 */

