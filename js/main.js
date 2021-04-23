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

    //wow js plugin
    new WOW().init();

    //testimonial slider
    $('.testi-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        arrows: false,
        infinite: true,
        dots: true,
        responsive: [
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });

    //smooth scroll and active menu button code
    $('.menu-bg .menu-list ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    
});



// javaScript code starts here//

// variable declaration
let fullName = document.getElementById('fullName');
let nameErr = document.getElementById('nameErr');
let email = document.getElementById('email');
let emailErr = document.getElementById('emailErr');
let message = document.getElementById('message');
let messageErr = document.getElementById('messageErr');
let submitBtn = document.getElementById('submitBtn');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function validateForm(){
    //full name
    if(fullName.value == ""){
        nameErr.innerHTML = "please enter your name";
        fullName.style.borderColor = "red";
        fullName.focus();
        return false;
    }

    //email
    if(email.value == ""){
        emailErr.innerHTML = "please enter your email";
        email.style.borderColor = "red";
        email.focus();
        return false;
    }

    //email validation with regular expression
    if(email.value.match(pattern)){
        
    }
    else{
        emailErr.innerHTML = "please enter a valid email";
        email.style.borderColor = "red";
        email.focus();
        return false;
    }

    //message
    if(message.value.length < 20){
        message.style.borderColor = "red";
        messageErr.innerHTML = "(please write a message at least 20 letters)";
        message.focus();
        return false;
    }
}

function errValid(){
    //full name
    if(fullName.value != ""){
        fullName.style.borderColor = "#626262";
        nameErr.innerHTML = "";
    }
    
    //email
    if(email.value != ""){
        email.style.borderColor = "#626262";
        emailErr.innerHTML = "";
    }

    //message
    if(message.value != ""){
        message.style.borderColor = "#626262";
        messageErr.innerHTML = "";
    }
}

fullName.onblur = errValid;
email.onblur = errValid;
message.onblur = errValid;


