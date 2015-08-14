$(document).ready(function() {

  var getBlocks = function(){
    $.ajax({
      type: 'get',
      datatype: 'json',
      url: '/blocks',
      success: function(blockArray){
        console.log(blockArray)
        blockGenerator(blockArray);
      }
    })
  };

  var blockGenerator= function(blockArray){
    console.log("Generator receives" + blockArray)
    var arrayLength = blockArray.length;
    console.log(arrayLength)
    for (var i = 0; i < arrayLength; i++) {
      var colour = Math.floor((Math.random() * 8) + 1);
      console.log(blockArray[i])
      switch(blockArray[i]){
        case "Z":
          blockReceiver([[1,1,0],[0,1,1],[0,0,0]])
        break;
        case "T":
          blockReceiver([[0,1,0],[1,1,1],[0,0,0]])
        break;
        case "L":
          blockReceiver([[1,0,0],[1,0,0],[1,1,0]])
        break;
        case "J":
          blockReceiver([[0,0,1],[0,0,1],[0,1,1]])
        break;
        case "O":
          blockReceiver([[1,1,0],[1,1,0],[0,0,0]])
        break;
        case "S":
          blockReceiver([[0,1,1],[1,1,0],[0,0,0]])
        break;
        case "I":
          blockReceiver([[0,1,0],[0,1,0],[0,1,0]])
        break;
      }
    }
    console.log("All blocks have been sent to Eugene's enigma")

  }

getBlocks();
});


