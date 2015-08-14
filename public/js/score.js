// $(document).ready(function() {

  var addNewScore = function(score){
    $.ajax({
      url:'/score',
      type: 'post',
      data: score.to_json,
      success: function(){
        console.log("Score sent to database")
      }
    })
  }

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
        JSON.parse(latestScore["user_latest"])
      }
    })
  }
// });
