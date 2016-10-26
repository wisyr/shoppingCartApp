$(window).on('load', function () {
    setTimeout(function () {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (isChrome) {
            $('.loadingAnimation').fadeOut();
        } else {
            $('.loadingAnimation').css({'display': 'none'});
        }
        $('.content').fadeIn();
        $('.mainContainer').css({
            '-webkit-filter': 'brightness(100%)',
            'filter': 'brightness(100%)'
        });
    }, 1000);
});

