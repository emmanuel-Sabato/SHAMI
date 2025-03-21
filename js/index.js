$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0) {
            $('.top').show();
        }else {
            $('.top').hide();
        }
    });

    //smooth scrolling
    $('a[href*="#').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

    const texts = [
        "S.DEVELOPER",
        "G.DESIGNER",
        "YOUTUBER"
    ]

    let speed = 100;
    const textElements = document.querySelector(".typewriter-text");

    let textIndex = 0;
    let charcterIndex = 0;

    function typeWriter() {
        if(charcterIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
            charcterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if(textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.slice(0,-1);
            setTimeout(eraseText, 50)
        } else {
            textIndex = (textIndex + 1) % texts.length;
            charcterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    window.onload = typeWriter

    function emailSend() {
        Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
        }).then(
            message => alert(message)
        );
    }


});