$(function(){

    $.get('http://data.fixer.io/api/latest',
    {'access_key' : '2633f89e5d74c2937e49fa9690d2fa6c', 
    'symbols': 'USD,RUB'},
    function(response){
        
        var usd, eur;
        eur = response.rates.RUB;
        usd = eur / response.rates.USD;

        $('.currency-container').html('<div class="usd currency"><a href="#">' + usd.toFixed(2) + '</a></div><div class="euro currency"><a href="#">' + eur.toFixed(2) + '</a></div');
    });
    
    $('.header-nav-btn').on('click', function(){

        if ($('.menu-container').is(':visible')) {
            $(this).css({'background-image' : 'url(img/burger.png)'});
            $('.menu-container').slideUp();
            $('.black-bar').slideDown();
            $('body').css({overflow : 'auto'});
        } else {
            $(this).css({'background-image' : 'url(img/close.png)'});
            $('.menu-container').slideDown();
            $('.black-bar').slideUp();
            $('body').css({overflow : 'hidden'});
        }
    });
});