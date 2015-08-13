
function emptySquareArray(length)
{ var fliped=[]
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
var a=[[1,0,0],[1,0,0],[1,1,0]]
console.log(a);
a=rotateLeft(a);
console.log(a);
a=rotateLeft(a);
console.log(a);
a=rotateRight(a);
console.log(a);
a=rotateRight(a);
console.log(a);
