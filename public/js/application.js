$(document).ready(function() {


  function addBlockToCell() {
    var colourArray = new Array
    colourArray = ["red", "orange", "white", "blue", "aqua", "green", "purple"]
    var colInt = Math.floor((Math.random() * 6) + 1); 
    var colour = colourArray[colInt]
    var rowInt =Math.floor((Math.random() * 20) + 1);
    var cellInt = Math.floor((Math.random() * 10) + 1);
    
    thisCell = "#row-" + rowInt + "-cell-" + cellInt
    console.log(thisCell)
    for (var i = 0; i < 7; i++) {
      $(thisCell).removeClass(colourArray[i])
    }
    $(thisCell).addClass(colour)
  }


  function drawByJquery(shape, row, col, colour) {
    console.log(shape)
    if (shape == 's') {
      $("#row-"+row+"-cell-"+(col+1)).addClass(colour)
      $("#row-"+row+"-cell-"+(col+2)).addClass(colour)
      $("#row-"+(row+1)+"-cell-"+(col)).addClass(colour)
      $("#row-"+(row+1)+"-cell-"+(col+1)).addClass(colour)
    }
  }

  $("table").on("click", drawByJquery("s", 10, 3, "red"));



    for (var row=0; row<25; row++){
      for (var cell=1; cell<11; cell++){
        if ($("#row-"+(row-1)+"-cell-"+cell).hasClass("inActive")) {
          //do nothing
        } else {
          console.log($("#row-"+(row-1)+"-cell-"+cell).hasClass())
        }

      }
    }



});


