// May need a document.ready function or something that loads the first set of buttons and page
//need an array of starting items or themes
var musicStars = ["Green Day", "Michael Jackson", "Styx", "Nirvana", "Snoop Dog", "Tool"]
//Need to create buttons for items --- look at class examples
console.log(musicStars[0])
function renderButtons() {
    
        $("#buttons-view").empty();

    for (var i = 0; i < musicStars.length; i++){
        var button = $("<button>");
        button.addClass("musicStar");
        button.attr("data-name", musicStars[i]);
        button.text(musicStars[i]);
        $("#buttons-view").append(button);
    }
}


//need to create onclick function for array items that are displayed on openning page
//need to create onclick functio to create new item buttons and a .val .trim method for text
$("#add-musicStar").on("click", function(event){
    event.preventDefault();
    var newMusicStar = $("#musicStar-input").val().trim();
    musicStars.push(newMusicStar);
    renderButtons();
    console.log("button should add")
});

renderButtons();
// need to create ajax json function for giphy data to be returned to page

$("#buttons-view").on("click", function siteInfo() {
    var musicStars = $(this).attr("data-name");
      console.log(musicStars + "Star")
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    musicStars +
    "&api_key=rXS6tkTvAluZyOm5gQW10rElyYzxWebR&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
            $("#music-star").empty();
    
        console.log(queryURL);
        console.log(response);

        var results = response.data;
        console.log(results);
            // this will create the rults and ratings 
        for (var j = 0 ; j < results.length; j++) {
            var musicStarDiv = $("<div class='star'>");
            var p = $("<p>").text("Rating: " + results[j].rating);
            var musicStarImage = $("<img>");
            musicStarImage.attr("src", results[j].images.fixed_height.url);
            musicStarDiv.append(p);
            musicStarDiv.append(musicStarImage);

            $("#music-star").prepend(musicStarDiv);

            // getting url for images
            var stillURL = response.data[j].images.fixed_width_still.url;
            var animatedURL = response.data[j].images.fixed_width.url;
            //this will hold image and adding atributes
            var image = $("<img>").attr("src", stillURL);
            image.attr("animate", "no");
            image.attr("still", stillURL);
            image.attr("running", animatedURL);
                // create event listen functon to go from still to motion
            image.click(function() {
                if($(this).attr("animate") === "no"){
                    var newURL = $(this).attr("running");
                    $(this).attr("src", newURL);
                    $(this).arrt("animate", "yes");
                } else {
                    var newURL = $(this).arrt("still");
                    $(this).attr("src", newURL);
                    $(this).arrt("animate", "no");
                }
            });
        
            musicStarDiv.append(image)



        }

    
    });

});

$(document).on("click", ".musicStar", siteInfo);



//need to create a function for pausing and starting video clips
// 