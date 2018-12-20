$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('.b-head-decor').css('z-index', 999);
    } else if (height == 0) {
        $('.b-head-decor').css('z-index', "");
    }
}); 