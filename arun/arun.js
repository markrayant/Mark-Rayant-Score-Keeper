$(document).ready(function() {

    var score = 0;

    $("#increase-5").on("click", function(){
      //1 increase score by 5
      //2 set html of score to display new score

      //score +=5 is the same as ...
      score=score+5;

      $("#score").html(score+" Points");
    });
    $("#decrease-5").on("click", function(){
      //1 decrease score
      //2 check if it goes below 0
      //3 if it does, set it back to 0
      //4 if it is 0 or above, update it
      score-=5;
      if (score <0) {
        score=0;
        $("#score").html("0 Points");
      } else {
        $("#score").html(score + " Points");
      }
    });
    $("form").on("submit", function(event) {
        //ensures that code will not refresh page
        event.preventDefault();
        //1 retrieve number from input
        //2 make text nubmber integer
        //3 set the score to the value
        //4 update html display with new score
        var customScore = parseInt($("#custom-score").val());
        score = customScore;
        //see if new score < 0
        if (customScore < 0) {
          alert("Value is less than 0");
        } else {
        // set score to var score and change html 
        $("#score").html(score + " Points");
        //optional: clears out value after submission
        $("#custom-score").val("");
        }
    });
});
