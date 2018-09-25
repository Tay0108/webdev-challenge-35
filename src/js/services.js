'use strict';

import 'jquery';

// services module:
function services() {

    function init() {
        $('#photography-btn').click(function () {
            $('#photography-description').slideToggle('slow');
        });

        $('#creativity-btn').click(function () {
            $('#creativity-description').slideToggle('slow');
        });

        $('#web_design-btn').click(function () {
            $('#web_design-description').slideToggle('slow');
        });
    }

    return {
        init: init
    }
}

export default services;
