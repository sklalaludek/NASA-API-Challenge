$(function() {
    var nasaUrl = 'https://api.nasa.gov/planetary/apod',
          marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000',
          key = '&api_key=X0F091rbxFo3yIow6XjUAGwwZG7MZop99Ov1wDhi',
          welcome = $('#welcome'),
          logo = $('#welcome__logo');

    function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /*random date*/
    var year = getRandomInt(2013, 2016),
         month = getRandomInt(1, 12),
         day = getRandomInt(1,28),
         randomDate = year + '-' + month + '-' + day;

    function getPic(){
        $.ajax({
            url: nasaUrl + '?date=' + randomDate + key,
            type: 'GET',
            dataType: 'json'
        }).done(function(r){
            showPic(r);
        }).fail(function(error){
            console.error(error);
        })
    }

    function showPic(data) {
        var galleryItem = $('.gallery__item');

        console.log('showPic', data);
        galleryItem.css("background-image", 'url("' + data.url + '")');
    }

    function getMarsPic(){
        $.ajax({
            url: marsUrl,
            type: 'GET',
            dataType: 'json'
        }).done(function(r){
            console.log(r);
        }).fail(function(error){
            console.log(error);
        })
    }

    function intro(){
        $('.animation-fly-in').removeClass('hidden');
    }

    $(window).on('load', intro());
    getPic();
    // getMarsPic();
});
