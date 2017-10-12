
window.onload = function () {

        $('.shine').fadeOut();
        // import ('./fonts.js');

};

$(document).ready(function () {

    $('.anchor').on('click', function (e) {
        e.preventDefault();

        let target = this.hash,
            $target = $(target);


        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 500, 'swing');
    });

});