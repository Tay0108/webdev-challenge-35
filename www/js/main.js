/**
 * Created by Tay on 5/28/2017.
 */
// opening menu:
var hamburger = document.querySelector(".menu-hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector(".page-nav").classList.add("page-nav-opened");
    document.querySelector(".menu-hamburger").classList.add(".menu-hamburger-hidden");
}, false);


// closing menu:
var close = document.querySelector(".menu-close");
close.addEventListener("click", function () {
    document.querySelector(".page-nav").classList.remove("page-nav-opened");
    document.querySelector(".menu-hamburger").classList.remove(".menu-hamburger-hidden");
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
$("#photography-btn").click(function() {
    $("#photography-description").slideToggle("slow");
});

$("#creativity-btn").click(function() {
    $("#creativity-description").slideToggle("slow");
});

$("#web_design-btn").click(function() {
    $("#web_design-description").slideToggle("slow");
});

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

