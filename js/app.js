$(function() {
    // var key = 'X0F091rbxFo3yIow6XjUAGwwZG7MZop99Ov1wDhi';
    // var nasaUrl = 'https://api.nasa.gov/EPIC/api/natural?api_key=X0F091rbxFo3yIow6XjUAGwwZG7MZop99Ov1wDhi ',
    var nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=X0F091rbxFo3yIow6XjUAGwwZG7MZop99Ov1wDhi ',
          marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=X0F091rbxFo3yIow6XjUAGwwZG7MZop99Ov1wDhi',
          welcome = document.getElementById('welcome'),
          logo = document.getElementById('welcome__logo');

    function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getPic(){
        $.ajax({
            url: nasaUrl,
            type: 'GET',
            dataType: 'json'
        }).done(function(r){
            console.log(r);
        }).fail(function(error){
            console.log(error);
        })
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
