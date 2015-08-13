$(document).ready(function() {

  var yourHighScoreReceiver = function(){
    $.ajax({
      url: '/highscores/user',
      success: function(yourHighScores){
        JSON.parse(yourHighScores["user_high"])
      }
    });
  };

  var globalHighScoreReceiver = function(){
    $.ajax({
      url: '/highscores/global',
      success: function(globalHighScores){
        JSON.parse(globalHighScores[""])
      }
    })
  }

  var latestScoreReceiver = function(){
    $.ajax({
      url: '/highscores/user/latest',
      success: function(latestScore){
        JSON.parse(latestScore[""])
      }
    })
  }
});
