$(document).ready(function() {


  var score = function(scores){
    this.first_score: scores[1];
    this.second_score:
  }
  var globalScores = [];
  var yourLatest;
  var yourHighScores = [];

  var scoreReceiver = function(){
    $.ajax({
      url: '/highscores',
      success: function(scoreData){}

    });
  };
});
