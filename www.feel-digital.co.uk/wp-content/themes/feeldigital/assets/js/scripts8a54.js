var $ = jQuery.noConflict();

window.onscroll = function() {myFunction()};

var header = document.getElementById("header-main");
var sticky = header.offsetTop;
var body = document.getElementById("body-main");
var stickybody = body.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }

    if (window.pageYOffset > stickybody) {
        body.classList.add("sticky-body");
    } else {
        body.classList.remove("sticky-body");
    }
}

/* Script on ready
------------------------------------------------------------------------------*/
$(document).ready(function () {

    /* Responsive Jquery Navigation */
    $('.right-side-menu').click(function (event) {
        $('.mbnav').toggleClass('is-open');
    });

    $('.mbnav .mbnav__backdrop').click(function () {
        $('.mbnav').removeClass('is-open');
    });

    $('.main-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow')
    });

    $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.t-left-arrow'),
        nextArrow: $('.t-right-arrow')
    });


    if ($('.slider-news').length > 0) {
        $('.slider-news').slick({
            dots: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: $('.new-right-arrow'),
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }
        ]
        });
    }


    /* FAQ accordian */
    $('.faq-block .faq-body .faq-detail.show > .faq-view').slideDown();
    $(document).on('click', '.faq-block .faq-body .faq-detail .faq-heading', function (e) {
        if ($(this).parents('.faq-detail').hasClass('show')) {
            $(this).parents('.faq-detail').removeClass('show');
            $(this).next().stop(true, false).slideUp();
        } else {
            $('.faq-block .faq-body .faq-detail').removeClass('show');
            $(this).parents('.faq-detail').addClass('show');
            $(".faq-block .faq-body .faq-detail > .faq-view").slideUp();
            $(this).next().stop(true, false).slideDown();
        }
    });

    /* Load more ajax */
    jQuery('.load-more-insights').click( function(){

        jQuery('.blog .listing-wrapper .cell-md-6').removeClass('wow');

        var button = jQuery(this),
        data = {
            'action': fd_ajax_params.prefix + '_loadmore_insights',
            'query': fd_ajax_params.posts,
            'page' : fd_ajax_params.current_page
        };

        jQuery.ajax({
            url : fd_ajax_params.ajaxurl,
            data : data,
            type : 'POST',
            beforeSend : function ( xhr ) {
                button.html( '<span>Loading...</span>' );
            },
            success : function( data ){
                if( data ) {
                    button.html( '<span>Load more</span>' );
                    jQuery( '.listing-wrapper' ).append( data );
                    fd_ajax_params.current_page++;

                    if ( fd_ajax_params.current_page == fd_ajax_params.max_page )
                        button.remove();

                } else {
                    button.remove();
                }
            }
        });
    });

});

/* goto bottom jquery */
    if($('.bottom-scroll').length > 0) {
        $('.bottom-scroll').on('click', function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 150
            }, 500);
            return false;
        });
    }

/* goto bottom jquery */
    if($('.page-template-services-template .bottom-scroll').length > 0) {
        $('.bottom-scroll').on('click', function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 200
            }, 500);
            return false;
        });
    }

var wow = new WOW({
    offset: 100,
    mobile: false
});
wow.init();

/* Script on load
------------------------------------------------------------------------------*/
$(window).on('load', function () {
    // page is fully loaded, including all frames, objects and images

});

/* Script on scroll
------------------------------------------------------------------------------*/
$(window).on('scroll', function () {

});

/* Script on resize
------------------------------------------------------------------------------*/
$(window).on('resize', function () {

});

/* Script all functions
------------------------------------------------------------------------------*/
