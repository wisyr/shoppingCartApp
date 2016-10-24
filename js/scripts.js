$(window).on('load', function(){
    setTimeout(function() {
        $('.loadingAnimation').css({'display':'none'});
        $('.content').fadeIn();
        $('.mainContainer').css({'-webkit-filter': 'brightness(100%)', '-ms-filter': 'brightness(100%)', 'filter': 'brightness(100%)'});
    }, 1000);
});

