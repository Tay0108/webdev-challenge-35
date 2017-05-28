/**
 * Created by Tay on 5/28/2017.
 */

// menu:
var hamburger = document.querySelector(".menu-hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector(".page-nav").classList.add("page-nav-opened");
    document.querySelector(".menu-hamburger").classList.add(".menu-hamburger-hidden");
}, false);

var close = document.querySelector(".menu-close");
close.addEventListener("click", function () {
    document.querySelector(".page-nav").classList.remove("page-nav-opened");
    document.querySelector(".menu-hamburger").classList.remove(".menu-hamburger-hidden");
}, false);

// scrolling menu:
$(document).on("scroll", function(){
// or as a shorthand $(document).scroll(function(){
    if($(document).scrollTop() > jQuery(window).height())
    {
        //begin to scroll
        $("#list-progress").css("position","fixed");
        $("#list-progress").css("top",0);
    }
    else
    {
        //lock it back into place
        $("#list-progress").css("position","relative");
    }
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

