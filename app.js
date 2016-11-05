$(document).ready(function() {

    var score = 0;

  $("#increase-5").on("click", function() {
    $("#score").html(score+=5);
  });

  $("#decrease-5").on("click", function() {
    score-=5

    if (score < 0 ) {
      $("#score").html("0 Points");
      score = 0;
    } else {
      $("#score").html(score);
    }
  });
  $("#form").on("submit", function(event) {
      event.preventDefault();

      var customValue = $("#custom-score").val();
      var customValueConvert = parseInt(customValue);
      console.log(customValue)

      score = customValueConvert;
      $("#score").html(score);
  });
});
