$(document).ready(function(){
    // hamburger menu function
    $('#openMenu').on('click',function(){
        $(this).css('display','none');
        $('#closeMenu').css('display','block');
        $('#menu-bg .menu-list ul').slideDown(500);
    });

    $('#closeMenu').on('click',function(){
        $('#menu-bg .menu-list ul').slideUp(500,function(){
            $('#closeMenu').css('display','none');
            $('#openMenu').css('display','block');
        });
    });

    // active menu code
    $('#menu-bg ul li a').on('click',function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });


    //custom jquery code for functionalities
    let backToTop = $('#backToTop');
    let logo = $('.menu-bg .brand');
    let menu = $('#menu-bg');
    let html_body = $('html,body');

    $(window).on('scroll', function () {
        let scrolling = $(window).scrollTop();

        //sticky menu function
        if (scrolling > 100) {
            menu.addClass('fixed-menu');
        } else {
            menu.removeClass('fixed-menu');
        }

        //back To Top hide/show function
        if (scrolling > 500) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
    });

    //back To Top click function
    backToTop.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1200);
    });

    //click on logo
    logo.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });


    
});