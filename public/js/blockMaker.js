$(document).ready(function() {

  var getBlocks = function(){
    $.ajax({
      type: 'get',
      datatype: 'json',
      url: '/blocks',
      success: function(blockJSON){
        var arr = [];
        console.log(blockJSON)
        // arr = blockJSON.toJSON();
        // console.log(blocksArray)
      }
    })
  };
getBlocks();
});


