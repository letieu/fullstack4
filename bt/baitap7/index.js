$(document).ready(function () {
    let pTop = 0;
    let items = $('header ul li a').click(function (event) {
        event.preventDefault();
        let target = $(this).attr('href');
        let top = $(target).offset().top;
        $('html').animate({
            scrollTop: top
        }, 1000)
    });

    $('#toTop').click(function (event) {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    });

    $(document).scroll(function (event) {
        let show = false;
        let newTop = $('html').scrollTop();
        console.log(newTop)
        if (newTop < 500) {
            $('#toTop').fadeOut();

            return;
        }
        if (newTop < pTop) {
            pTop = newTop;
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
            pTop = newTop;

        }

    });

    // make touch button

    $('.touch').click(function (event) {
        event.preventDefault();
        let blur = $(this).parent().parent().find('.blur');
        if (blur.css("display")=='none'){
            $('#team .blur').slideUp();
            blur.slideDown();
        }else{
            blur.slideUp()
        }
        

    })



}
)