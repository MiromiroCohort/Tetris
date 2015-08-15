
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
      for(var j = left_corner.j; j<left_corner.j+figure.length;j++)
      {
       if(figure[i-left_corner.i][j-left_corner.j] > 0) board[i][j] = figure[i-left_corner.i][j-left_corner.j]
      }
    }
}

function isMovePossible(board,figure,left_corner)
{
     var i=left_corner.i+figure.length;
     if ((i==24)&isFigurePositionedDown(figure))
     {
      return false;
     }
     for(j=left_corner.j;j<left_corner.j+figure.length;j++)
     {
       if ((board[i][j] > 0)& (board[i-1][j] > 0)) return false;
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
    inject_figure(board,figure,left_corner)

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
   for(var j = 0; j < figure.length; j++)
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
      for(var j = left_corner.j; j < left_corner.j+figure.length;j++)
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


var a = [[1,0,0],[1,0,0],[1,1,0]];

 board = game_board();

var left_corner = {i:4-a.length,j:5}
inject_figure(board, a, left_corner);
console.log(board);
while(isMoveRightDownPossible(board,a,left_corner))
{
moveFigureRightDown(board,a,left_corner)
console.log(board);
}
while(isMoveLeftDownPossible(board,a,left_corner))
{
  moveFigureLeftDown(board,a, left_corner)
  console.log(board);
}
  boardWithoutCurrentFigure(board,a,left_corner)
  a=rotateRight(a);
  moveFigureDown(board,a,left_corner)
  console.log(board);
while (isMovePossible(board,a,left_corner))
{ boardWithoutCurrentFigure(board,a,left_corner)
  a=rotateRight(a);
  moveFigureDown(board,a,left_corner)
  console.log(board);
}
 var free_line=findLowestFreeLine(board)
console.log(free_line)
var fill_line=isAnyLineFilled(board)
console.log(fill_line);
 b =[[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1]];

 left_corner={i:4-a.length,j:5}
 inject_figure(board, b, left_corner);
 console.log(board);
  boardWithoutCurrentFigure(board,b,left_corner)
 b=rotateRight(b);
 console.log(b)
 moveFigureRightDown(board, b, left_corner)
 console.log(board)
while (isMovePossible(board,b,left_corner))
{
  moveFigureDown(board,b,left_corner)
  console.log(board);
}
left_corner={i:4-a.length,j:5}
b = [[1,0,0],[1,0,0],[1,1,0]];
 inject_figure(board, b, left_corner);
 moveFigureLeftDown(board,b,left_corner)
 boardWithoutCurrentFigure(board,b,left_corner)
 b=rotateRight(b)
 moveFigureLeftDown(board,b,left_corner)
 while (isMovePossible(board,b,left_corner))
{
  moveFigureDown(board,b,left_corner)
  console.log(board);
}
b =[[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1]];

 left_corner={i:4-a.length,j:5}
 inject_figure(board, b, left_corner);
 while(isMoveLeftDownPossible(board,b,left_corner))
{
  moveFigureLeftDown(board,b, left_corner)
  console.log(board);
}
 while (isMovePossible(board,b,left_corner))
{
  moveFigureDown(board,b,left_corner)
  console.log(board);
}
console.log(b)
// c=[[1,1],[1,1]]
// left_corner={i:4-c.length,j:5}
// inject_figure(board, c, left_corner);
// while (isMovePossible(board,c,left_corner))
// {
//   moveFigureDown(board,c,left_corner)
//   console.log(board);
// }

// console.log(a);
// a=rotateLeft(a);
// console.log(a);
// a=rotateLeft(a);
// console.log(a);
// a=rotateRight(a);
// console.log(a);
// a=rotateRight(a);
// console.log(a);
