$(document).ready(function() {


  function drawByJquery(shape, row, col, colour) {
    switch(shape) {
      case 's':
        $("#row-"+row+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+row+"-cell-"+(col+2)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col+1)).addClass(colour)
          break;
      case 'z':
        $("#row-"+row+"-cell-"+(col)).addClass(colour)
        $("#row-"+row+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col+2)).addClass(colour)
          break;
      case 'i':
        $("#row-"+(row)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-2)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-3)+"-cell-"+(col+1)).addClass(colour)
          break;
      case 't':
        $("#row-"+(row)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row)+"-cell-"+(col+2)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col+1)).addClass(colour)
          break;
      case 'l':
        $("#row-"+(row)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row-2)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row-2)+"-cell-"+(col+1)).addClass(colour)
          break;
      case 'j':
        $("#row-"+(row)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-2)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-2)+"-cell-"+(col)).addClass(colour)
          break;
      case 'o':
        $("#row-"+(row)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row-1)+"-cell-"+(col+1)).addClass(colour)
          break;
    }
  }

  drawByJquery("i", 5, 1, "purple");
  drawByJquery("z", 5, 6, "red");
  drawByJquery("t", 19, 2, "green");
  drawByJquery("s", 10, 6, "white");
  drawByJquery("l", 15, 2, "blue");
  drawByJquery("j", 15, 6, "aqua");
  drawByJquery("o", 18, 5, "orange");





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
