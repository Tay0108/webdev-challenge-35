'use strict';

// menu module:
function menu() {

    // opening menu:
    function open() {
        document.querySelector('.page-nav').classList.add('page-nav-opened');
        document.querySelector('.menu-hamburger').classList.add('.menu-hamburger-hidden');
    }

    // closing menu:
    function close() {
        document.querySelector('.page-nav').classList.remove('page-nav-opened');
        document.querySelector('.menu-hamburger').classList.remove('.menu-hamburger-hidden');
    }

    function init() {
        let hamburger = document.querySelector('.menu-hamburger');
        hamburger.addEventListener('click', open);

        let cross = document.querySelector('.menu-close');
        cross.addEventListener('click', close);
    }

    return {
        init: init
    };
}

export default menu;