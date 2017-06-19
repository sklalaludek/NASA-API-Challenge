$(function() {
    var key = 'X0F091rbxFo3yIow6XjUAGwwZG7MZop99Ov1wDhi';
    // var nasaUrl = 'https://api.nasa.gov/EPIC/api/natural?api_key=X0F091rbxFo3yIow6XjUAGwwZG7MZop99Ov1wDhi ',
    var nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=X0F091rbxFo3yIow6XjUAGwwZG7MZop99Ov1wDhi ',
          marsUrl = ' ';
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
    getPic();


});
