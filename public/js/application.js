
function emptySquareArray(length)
{
  var fliped = []
  for(var i =0;i<length;i++)
      {  temp = [] ;

        for(var j = 0;j < length;j++)
        {
            temp.push(0);
        }
        // console.log temp
        fliped.push(temp);
      }
  return fliped
}

function rotateLeft(array)
{
  var fliped=emptySquareArray(array.length)
  for(var i = 0;i<array.length;i++)
   {
      for(var j = 0;j < array[i].length;j++)
      {
        fliped[j][array[i].length-1-i] = array[i][j];
      }
   }
  return fliped
}

function rotateRight(array)
{
  var fliped = emptySquareArray(array.length)
  for(var i = 0;i < array.length;i++)
   {
      for(var j = 0;j < array[i].length;j++)
      {
        fliped[array[i].length-j-1][i] = array[i][j];
      }
   }
  return fliped
}

function game_board()
{
  var new_board = []
  for(var i = 0;i<24;i++)
  { temp = [] ;
    for(var j = 0;j<10;j++)
    {
      temp.push(0);
    }
    new_board.push(temp);
  }
  return new_board
}

function inject_figure(board,figure,left_corner)
{
    for(var i = left_corner.i; i<left_corner.i+figure.length;i++)
    {
      for(var j = left_corner.j; j<left_corner.j+figure[i-left_corner.i].length;j++)
      {
       if(figure[i-left_corner.i][j-left_corner.j] > 0) board[i][j] = figure[i-left_corner.i][j-left_corner.j]
        // console.log(figure)
      }
      console.log(figure);
      console.log(i+" i "+board[i])
    }
}

function isMovePossible(board,figure,left_corner)
{
     var i=left_corner.i+figure.length;
     if ((i==24)&isFigurePositionedDown(figure))
     {
      return false;
     }
     for(j=left_corner.j;j<left_corner.j+figure[i-left_corner.i-1].length;j++)
     {
       if ((board[i][j] > 0) & (figure[i-1-left_corner.i][j-left_corner.j] > 0)) return false;
     }
     return true;
}

function moveFigureDown(board,figure,left_corner)
{
    boardWithoutCurrentFigure(board, figure, left_corner);
    if (isFigurePositionedDown(figure))
    {

      left_corner.i=left_corner.i+1;
    }
    else
    {

      positionFigureDown(figure);
    }
    console.log(board[23])
    console.log(board[22])
    inject_figure(board,figure,left_corner)
    console.log(board[23])
    console.log(board[22])


}
function isMoveRightDownPossible(board,figure,left_corner)
{
   var i=left_corner.i+figure.length;
     if ((i == 24)&isFigurePositionedDown(figure))
     {
      return false;
     }
     for(var j = left_corner.j+1; j<left_corner.j+figure.length+1; j++)
     {
       if ((board[i][j] > 0)& (board[i-1][j-1] > 0)) return false;
     }
     var j = left_corner.j+figure.length;

      if (j == 10) return false;
     for(count = left_corner.i+1; count < left_corner.i+figure.length+1; count++)
     {
       if ((board[count][j] > 0)& (board[count-1][j-1] > 0)) return false;
     }
     return true;
}
function isMoveLeftDownPossible(board,figure,left_corner)
{
   var i=left_corner.i+figure.length;
     if ((i == 24)&isFigurePositionedDown(figure))
     {
      return false;
     }
     for(var j = left_corner.j+1; j<left_corner.j+figure.length+1; j++)
     {
       if ((board[i][j] > 0)& (board[i-1][j+1] > 0)) return false;
     }
     var j = left_corner.j-1;

      if (j == -1) return false;
     for(count = left_corner.i+1; count < left_corner.i+figure.length+1; count++)
     {
       if ((board[count][j] > 0)& (board[count-1][j+1] > 0)) return false;
     }
     return true;
}
function isFigurePositionedRight(figure)
{ var j=figure.length-1
   for(var i = 0; i < figure.length; i++)
   {
     if (figure[i][j] > 0 ) return true;
   }
   return false;
}
function positionFigureRight(figure)
{
   for (var i=0; i < figure.length; i++)
   {
     for (var j=figure.length-1;j>0; j--)
     {
        figure[i][j]=figure[i][j-1];
     }
        figure[i][0]=0;
   }
}
function isFigurePositionedLeft(figure)
{ var j=0;
   for(var i = 0; i < figure.length; i++)
   {
     if (figure[i][j] > 0 ) return true;
   }
   return false;
}

function positionFigureLeft(figure)
{
   for (var i=0; i < figure.length; i++)
   {
     for (var j=0;j<figure.length-1; j++)
     {
        figure[i][j]=figure[i][j+1];
     }
        figure[i][figure.length-1]=0;
   }
}

function isFigurePositionedDown(figure)
{ var i=figure.length-1;
   for(var j = 0; j < figure[i].length; j++)
   {
     if (figure[i][j] > 0 ) return true;
   }
   return false;
}

function positionFigureDown(figure)
{
   for (var i=figure.length-1; i>0 ; i--)
   {
     for (var j=0;j<figure.length; j++)
     {
        figure[i][j]=figure[i-1][j];
        figure[i-1][j]=0;
     }

   }
}


function moveFigureRightDown(board,figure,left_corner)
{

  boardWithoutCurrentFigure(board, figure, left_corner);
    if(!isFigurePositionedRight(figure))
      {
        positionFigureRight(figure)
      }
    else
    {
      left_corner.i=left_corner.i+1; left_corner.j = left_corner.j+1;
    }
    inject_figure(board,figure,left_corner)
}

function moveFigureLeftDown(board,figure,left_corner)
{
  boardWithoutCurrentFigure(board, figure, left_corner);
    if(!isFigurePositionedLeft(figure))
    {
      positionFigureLeft(figure);
    }
    else
    {
      left_corner.i=left_corner.i+1; left_corner.j=left_corner.j-1
    }
    inject_figure(board,figure,left_corner);

}
function findLowestFreeLine(board)
{
  for(i=23;i>3;i--)
  {
    var line=0;
    for(j=0;j<10;j++)
    {
      line+=board[i][j]
    }
    if(line == 0) return i;
  }
  return 0;
}

function boardWithoutCurrentFigure(board, figure, left_corner)
{
  for(var i = left_corner.i; i < left_corner.i+figure.length;i++)
    {
      for(var j = left_corner.j; j < left_corner.j+figure[i-left_corner.i].length;j++)
      {
         if(figure[i-left_corner.i][j-left_corner.j] > 0) board[i][j] = 0;
      }
    }
}
function isAnyLineFilled(board)
{
  for(i=23;i>3;i--)
  {
    var line=1;
    for(j=0;j<10;j++)
    {
      if (board[i][j] == 0) line=0;
    }
    if(line == 1) return i;
  }
  return 0;

}
function moveHeapDown(board,free_line, fill_line)
{
   heap_corner={i:free_line,j:0}
   heap=[]
   for (var i = free_line;i < fill_line;i++ )
   { var temp=[]
      for(var j =0; j < 10; j++)
       {
         temp.push(board[i][j])
         // first I tried to push board [i] to heap, but in that case I made adresses
       }
     heap.push(temp)
   }
    // console.log(heap);
   for(var j=0;j<10;j++)
    {board[fill_line][j] = 0}

   while(isMovePossible(board,heap,heap_corner))
   {
      moveFigureDown(board,heap,heap_corner)
      break;
   }
}



$(document).ready(function() {


  function getBlocks(){
    $.ajax({
      type: 'get',
      datatype: 'json',
      url: '/blocks',
      success: function(blockArray){
        blockGenerator(blockArray);
        // return blockArray;
      }
    })
  };

  function blockGenerator(blockArray){
    var arrayLength = blockArray.length;
    for (var i = 0; i < arrayLength; i++) {
      var colour = Math.floor((Math.random() * 8) + 1);
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

  }


  function drawByJquery(shape, row, col, colour) {
    switch(shape) {
      case 's':
        $("#row-"+row+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+row+"-cell-"+(col+2)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col+1)).addClass(colour)
          break;
      case 'z':
        $("#row-"+row+"-cell-"+(col)).addClass(colour)
        $("#row-"+row+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col+2)).addClass(colour)
          break;
      case 'i':
        $("#row-"+(row)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+2)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+3)+"-cell-"+(col+1)).addClass(colour)
          break;
      case 't':
        $("#row-"+(row)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row)+"-cell-"+(col+2)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col+1)).addClass(colour)
          break;
      case 'l':
        $("#row-"+(row)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row+2)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row+2)+"-cell-"+(col+1)).addClass(colour)
          break;
      case 'j':
        $("#row-"+(row)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+2)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+2)+"-cell-"+(col)).addClass(colour)
          break;
      case 'o':
        $("#row-"+(row)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row)+"-cell-"+(col+1)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col)).addClass(colour)
        $("#row-"+(row+1)+"-cell-"+(col+1)).addClass(colour)
          break;
    }
  }
  function selectColorByCode(colour_code)
  {
    switch(colour_code){
          case 0:
            return "inactive";
            break;
          case 1:
            return "purple";
            break;
          case 2:
            return "red";
            break;
          case 3:
            return "green";
            break;
          case 4:
            return "white";
            break;
          case 5:
            return "blue";
            break;
          case 6:
            return "aqua";
            break;
          case 7:
            return "orange";
            break;
        }
      }

  function redrawCell(row,col,colour_code)
  {
    var colour=""
     $cell=$("#row-"+(row)+"-cell-"+(col))
     colour=selectColorByCode(colour_code);
     if (!$cell.hasClass(colour))
     {
        $cell.removeClass("inactive");
        $cell.removeClass("purple");
        $cell.removeClass("red");
        $cell.removeClass("green");
        $cell.removeClass("white");
        $cell.removeClass("blue");
        $cell.removeClass("aqua");
        $cell.removeClass("orange");
        $cell.addClass(colour);
      }

  }

  function reDrawPoligon(board, left_corner, right_corner)
  {
   for(var i=left_corner.i; i<right_corner.i+1;i++)
    {
      for(var j=left_corner.j;j<right_corner.j+1;j++)
      {
        redrawCell(i,j,board[i][j]);
      }
    }
  }


  // drawByJquery("i", 22, 8, "purple");
  // drawByJquery("i", 5, 1, "purple");
  // drawByJquery("z", 5, 6, "red");
  // drawByJquery("t", 19, 2, "green");
  // drawByJquery("s", 10, 6, "white");
  // drawByJquery("l", 15, 2, "blue");
  // drawByJquery("j", 15, 6, "aqua");
  // drawByJquery("o", 18, 5, "orange");

  function buildTable() {
    var thisString = ""
    thisString += "<div class=\"masthead\"><div class=\"centered-text\">Your Score</div></div><div class=\"gameboard\">"
    for (var i=0; i<24; i++){
      thisString += "<div class=\"row\" id=\"row-"+i+"\">"
      for (var j=0; j<10; j++) {
        thisString += "<div class=\"cell inactive\" id=\"row-" + i + "-cell-"+j + "\">&nbsp;</div>"
      }
      thisString += "</div>"
    }
    thisString+="</div></div>"
    $("#board").append(thisString)
    $("#board").append("<button class='play-button' type='submit'>Play</button>")
  }

buildTable()

  for (var row=0; row<25; row++){
    for (var cell=0; cell<10; cell++){
      if ($("#row-"+(row-1)+"-cell-"+cell).hasClass("inActive")) {
        //do nothing
      } else {
        console.log($("#row-"+(row-1)+"-cell-"+cell).hasClass())
      }
    }
  }
  figures=[]

  getBlocks();
  function blockReceiver(block)
  {
    figures.push(block);
  }

  board = game_board();
  reDrawPoligon(board,{i:0,j:0},{i:23,j:9});
  var figure =[]
  var left_corner
  var right_corner
  var interval
  function injectTop()
  {
    figure = figures.shift();
    left_corner = {i:4-figure.length,j:5}
    inject_figure(board, figure, left_corner);
  }
  $( document ).ajaxComplete(function( event,request, settings ) {
    injectTop();
    right_corner ={i:left_corner.i+figure.length-1, j:left_corner.j+figure[0].length-1}
    reDrawPoligon(board,left_corner,right_corner)
    interval=setInterval(runGame, 4000);
  });

  function runGame()
  {
    if(isMovePossible(board,figure,left_corner))
          {
            left_corner_for_redrawing={i:left_corner.i,j:left_corner.j}
              right_corner_for_redrawing={i:left_corner.i+figure.length,j:left_corner.j+figure[0].length-1}
              moveFigureDown(board,figure,left_corner);
              // console.log(board[23])
              // console.log(board[22])
              reDrawPoligon(board,left_corner_for_redrawing,right_corner_for_redrawing);
              // console.log(left_corn  er);
          }
    else
    {
      var free_line=findLowestFreeLine(board)

      if (free_line >4 )
      {
        console.log(free_line)
        var fill_line=isAnyLineFilled(board)
        console.log(fill_line);
        Score_to_add=0
        while (fill_line>0)
        {
          moveHeapDown(board,free_line,fill_line);
          left_corner_for_redrawing={i:free_line,j:0}
          right_corner_for_redrawing={i:fill_line,j:9}
          reDrawPoligon(board,left_corner_for_redrawing,right_corner_for_redrawing);
          fill_line=isAnyLineFilled(board);
          Score_to_add+=100;
        }
        if (figure.length > 0)
        {
          injectTop();
        }
        else
        {
          getBlocks();
        }
      }
    }
  }


  $(document).keypress(function()
    {
      // console.log("key pressed");
      // console.log(event.which)
      // 32 - space
      // a - 97
      //d -100
      //q-113
      //e-101
      switch(event.which)
      {
        case 97:
          console.log("left");
          if(isMoveLeftDownPossible(board,figure,left_corner))
            {
              left_corner_for_redrawing={i:left_corner.i,j:left_corner.j-1}
              right_corner_for_redrawing={i:left_corner.i+figure.length,j:left_corner.j+figure[0].length-1}
              moveFigureLeftDown(board,figure,left_corner);
              reDrawPoligon(board,left_corner_for_redrawing,right_corner_for_redrawing);
            }
          break;
        case 100:
          console.log("right");
          if(isMoveRightDownPossible(board,figure,left_corner))
          {
             left_corner_for_redrawing={i:left_corner.i,j:left_corner.j}
              right_corner_for_redrawing={i:left_corner.i+figure.length,j:left_corner.j+figure[0].length}
              moveFigureRightDown(board,figure,left_corner);
              reDrawPoligon(board,left_corner_for_redrawing,right_corner_for_redrawing);
          }
          break;
        case 32:
          console.log("down");
          runGame();
          break;
        case 113:
          boardWithoutCurrentFigure(board,figure,left_corner);
          figure=rotateLeft(figure);
          inject_figure(board, figure, left_corner);
          left_corner_for_redrawing=left_corner
          right_corner_for_redrawing={i:left_corner.i+figure.length-1,j:left_corner.j+figure[0].length-1}
          reDrawPoligon(board,left_corner_for_redrawing,right_corner_for_redrawing);
          break;
        case 101:
          boardWithoutCurrentFigure(board,figure,left_corner);
          figure=rotateRight(figure);
          inject_figure(board, figure, left_corner);
          left_corner_for_redrawing=left_corner
          right_corner_for_redrawing={i:left_corner.i+figure.length-1,j:left_corner.j+figure[0].length-1}
          reDrawPoligon(board,left_corner_for_redrawing,right_corner_for_redrawing);
          break;

      }

    });

  $(".play-button").on("click", function(event) {
    event.preventDefault()
    $.ajax({
      url: "/blocks",
      type: "GET",
      datatype: "json"
    })
    .success(function(data){
      // Start function from game mechanics
      getBlocks();
    })
    .fail(function(){
      alert("fail")
    })
  })
});

