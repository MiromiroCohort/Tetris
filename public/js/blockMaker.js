
// function emptySquareArray(length)
// {
//   var fliped = []
//   for(var i =0;i<length;i++)
//       {  temp = [] ;

//         for(var j = 0;j < length;j++)
//         {
//             temp.push(0);
//         }
//         // console.log temp
//         fliped.push(temp);
//       }
//   return fliped
// }

// function rotateLeft(array)
// {
//   var fliped=emptySquareArray(array.length)
//   for(var i = 0;i<array.length;i++)
//    {
//       for(var j = 0;j < array[i].length;j++)
//       {
//         fliped[j][array[i].length-1-i] = array[i][j];
//       }
//    }
//   return fliped
// }

// function rotateRight(array)
// {
//   var fliped = emptySquareArray(array.length)
//   for(var i = 0;i < array.length;i++)
//    {
//       for(var j = 0;j < array[i].length;j++)
//       {
//         fliped[array[i].length-j-1][i] = array[i][j];
//       }
//    }
//   return fliped
// }

// function game_board()
// {
//   var new_board = []
//   for(var i = 0;i<24;i++)
//   { temp = [] ;
//     for(var j = 0;j<10;j++)
//     {
//       temp.push(0);
//     }
//     new_board.push(temp);
//   }
//   return new_board
// }

// function inject_figure(board,figure,left_corner)
// {
//     for(var i = left_corner.i; i<left_corner.i+figure.length;i++)
//     {
//       for(var j = left_corner.j; j<left_corner.j+figure.length;j++)
//       {
//         board[i][j] = figure[i-left_corner.i][j-left_corner.j]
//       }
//     }
// }

// function isMovePossible(board,figure,left_corner)
// {
//      var i=left_corner.i+figure.length;
//      if (i==24)
//      {
//       return false;
//      }
//      for(j=left_corner.j;j<left_corner.j+figure.length;j++)
//      {
//        if ((board[i][j] > 0)& (board[i-1][j] > 0)) return false;
//      }
//      return true;
// }

// function moveFigureDown(board,figure,left_corner)
// {
//   for(var i = left_corner.i; i<left_corner.i+figure.length;i++)
//     {
//       for(var j=left_corner.j; j<left_corner.j+figure.length;j++)
//       {
//         board[i][j]=0;
//       }
//     }
//     left_corner.i=left_corner.i+1;
//     inject_figure(board,figure,left_corner)

// }
// function isMoveRightDownPossible(board,figure,left_corner)
// {
//    var i=left_corner.i+figure.length;
//      if (i == 24)
//      {
//       return false;
//      }
//      for(var j = left_corner.j+1; j<left_corner.j+figure.length+1; j++)
//      {
//        if ((board[i][j] > 0)& (board[i-1][j-1] > 0)) return false;
//      }
//      var j = left_corner.j+figure.length;

//       if (j == 10) return false;
//      for(count = left_corner.i+1; count < left_corner.i+figure.length+1; count++)
//      {
//        if ((board[count][j] > 0)& (board[count-1][j-1] > 0)) return false;
//      }
//      return true;
// }
// function isMoveLeftDownPossible(board,figure,left_corner)
// {
//    var i=left_corner.i+figure.length;
//      if (i == 24)
//      {
//       return false;
//      }
//      for(var j = left_corner.j+1; j<left_corner.j+figure.length+1; j++)
//      {
//        if ((board[i][j] > 0)& (board[i-1][j+1] > 0)) return false;
//      }
//      var j = left_corner.j-1;

//       if (j == -1) return false;
//      for(count = left_corner.i+1; count < left_corner.i+figure.length+1; count++)
//      {
//        if ((board[count][j] > 0)& (board[count-1][j+1] > 0)) return false;
//      }
//      return true;
// }
// function isFigurePositionedRight(figure)
// { var j=figure.length-1
//    for(var i = 0; i < figure.length; i++)
//    {
//      if (figure[i][j] > 0 ) return true;
//    }
//    return false;
// }
// function positionFigureRight(figure)
// {
//    for (var i=0; i < figure.length; i++)
//    {
//      for (var j=figure.length-1;j>0; j--)
//      {
//         figure[i][j]=figure[i][j-1];
//      }
//         figure[i][0]=0;
//    }
// }
// function isFigurePositionedLeft(figure)
// { var j=0;
//    for(var i = 0; i < figure.length; i++)
//    {
//      if (figure[i][j] > 0 ) return true;
//    }
//    return false;
// }

// function positionFigureLeft(figure)
// {
//    for (var i=0; i < figure.length; i++)
//    {
//      for (var j=0;j<figure.length-1; j++)
//      {
//         figure[i][j]=figure[i][j+1];
//      }
//         figure[i][figure.length-1]=0;
//    }
// }

// function moveFigureRightDown(board,figure,left_corner)
// {
//   for(var i = left_corner.i; i < left_corner.i+figure.length;i++)
//     {
//       for(var j = left_corner.j; j < left_corner.j+figure.length;j++)
//       {
//         board[i][j] = 0;
//       }
//     }
//     if(!isFigurePositionedRight(figure))
//       {
//         positionFigureRight(figure)
//       }
//     else
//     {
//       left_corner.i=left_corner.i+1; left_corner.j = left_corner.j+1;
//     }
//     inject_figure(board,figure,left_corner)
// }

// function moveFigureLeftDown(board,figure,left_corner)
// {
//   for(var i = left_corner.i; i < left_corner.i+figure.length; i++)
//     {
//       for(var j = left_corner.j; j < left_corner.j+figure.length; j++)
//       {
//         board[i][j] = 0;
//       }
//     }
//     if(!isFigurePositionedLeft(figure))
//     {
//       positionFigureLeft(figure);
//     }
//     else
//     {
//       left_corner.i=left_corner.i+1; left_corner.j=left_corner.j-1
//     }
//     inject_figure(board,figure,left_corner);

// }



$(document).ready(function() {



// getBlocks();
});


