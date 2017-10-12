'use strict';

window.onload = function () {

    $('.shine').fadeOut();
};

$(document).ready(function () {

    $('.anchor').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 500, 'swing');
    });

    var wrapW = $(window).width() / 2;
    var wrapH = $(window).height() / 2;

    $(window).on("mousemove", function (event) {

        $('.move').css({
            'transform': 'translateX(' + (event.pageX - wrapW) / 900 + '%) translateY(' + (event.pageY - wrapH) / 900 + '%)'
        });
    });
});