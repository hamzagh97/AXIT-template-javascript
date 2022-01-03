
$(function(){
    document.querySelector("body").style.paddingTop = document.querySelector("nav").offsetHeight + "px";
    /* body paddingtop */

    /* scroll to element */
    document.querySelectorAll('nav li a').forEach(a => {
        a.addEventListener("click", function(e) {
            e.preventDefault();
            console.log(a);
        })
    });

    /* active link */
    
    
    /* sync links with sections */
    $(window).scroll(function(){
        $('section').each(function(){
            if ($(window).scrollTop() > $(this).offset().top - 50){
                var sectionId = $(this).attr('id');
                $('.navbar-inverse a').removeClass('active');
                $('.navbar-inverse .navbar-nav>li>a[data-scroll="' + sectionId + '"]').addClass('active');
            }
        });
    });

    /* fixed-left-menu */
    $('.fixed-menu .fa-gear').on('click' , function(){
        $(this).parent('.fixed-menu').toggleClass('visible');
        if ($(this).parent('.fixed-menu').hasClass('visible')) {
            $(this).parent('.fixed-menu').animate({
                left : 0
            }, 200);
            $('body').animate({
                paddingLeft: $(this).parent('.fixed-menu').innerWidth()
            }, 200);
        }

        else {
            $(this).parent('.fixed-menu').animate({
                left: '-240px'
            }, 200);
            $('body').animate({
                paddingLeft: '0'
            }, 200);
        }

    });


});


/*
$(function(){
    $('button').click(function(){
        var e = $('#kkk').text();
        $('#jjj').append(':' + e);
    })
})
*/