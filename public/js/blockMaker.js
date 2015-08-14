$(document).ready(function() {

  var getBlocks = function(){
    $.ajax({
      type: 'get',
      datatype: 'json',
      url: '/blocks',
      success: function(blockJSON){
        console.log(blockJSON)
      }
    })
  };
});


getBlocks();
