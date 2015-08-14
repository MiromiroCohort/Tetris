
function emptySquareArray(length)
{
  var fliped=[]
  for(var i=0;i<length;i++)
      {  temp= [] ;

        for(var j=0;j < length;j++)
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
  for(var i=0;i<array.length;i++)
   {
      for(var j=0;j < array[i].length;j++)
      {
        fliped[j][array[i].length-1-i] = array[i][j];
      }
   }
  return fliped
}

function rotateRight(array)
{
  var fliped=emptySquareArray(array.length)
  for(var i=0;i<array.length;i++)
   {
      for(var j=0;j < array[i].length;j++)
      {
        fliped[array[i].length-j-1][i] = array[i][j];
      }
   }
  return fliped
}

function game_board()
{
  var new_board=[]
  for(var i=0;i<24;i++)
  { temp= [] ;
    for(var j=0;j<10;j++)
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
      for(var j=left_corner.j; j<left_corner.j+figure.length;j++)
      {
        board[i][j]=figure[i-left_corner.i][j-left_corner.j]
      }
    }
}

function isMovePossible(board,figure,left_corner)
{
     var i=left_corner.i+figure.length;
     if (i==24)
     {
      return false;
     }
     for(j=left_corner.j;j<left_corner.j+figure.length;j++)
     {
       if ((board[i][j] == 1)& (board[i-1][j] == 1)) return false;
     }
     return true;
}

function moveFigureDown(board,figure,left_corner)
{
  for(var i = left_corner.i; i<left_corner.i+figure.length;i++)
    {
      for(var j=left_corner.j; j<left_corner.j+figure.length;j++)
      {
        board[i][j]=0;
      }
    }
    left_corner.i=left_corner.i+1;
    inject_figure(board,figure,left_corner)

}

function moveFigureRightDown(board,figure,left_corner)
{
  for(var i = left_corner.i; i<left_corner.i+figure.length;i++)
    {
      for(var j=left_corner.j; j<left_corner.j+figure.length;j++)
      {
        board[i][j]=0;
      }
    }
    left_corner.i=left_corner.i+1; left_corner.j=left_corner.j+1
    inject_figure(board,figure,left_corner)

}


var a=[[1,0,0],[1,0,0],[1,1,0]];
board=game_board();
var left_corner={i:4-a.length,j:5}
inject_figure(board, a, left_corner);
console.log(board);
while (isMovePossible(board,a,left_corner))
{
  moveFigureDown(board,a,left_corner)
  console.log(board);
}
b =[[1,0,0],[1,0,0],[1,1,0]];
left_corner={i:4-a.length,j:5}
inject_figure(board, b, left_corner);
while (isMovePossible(board,b,left_corner))
{
  moveFigureDown(board,b,left_corner)
  console.log(board);
}
c=[[1,1],[1,1]]
left_corner={i:4-c.length,j:5}
inject_figure(board, c, left_corner);
while (isMovePossible(board,c,left_corner))
{
  moveFigureDown(board,c,left_corner)
  console.log(board);
}

// console.log(a);
// a=rotateLeft(a);
// console.log(a);
// a=rotateLeft(a);
// console.log(a);
// a=rotateRight(a);
// console.log(a);
// a=rotateRight(a);
// console.log(a);
