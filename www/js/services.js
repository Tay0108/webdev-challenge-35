'use strict';

// services module:
function services() {

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

export default services;
