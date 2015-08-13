function rotateLeft(array)
{
  // var fliped=[]

//   for(var i=0;i<array.length;i++)
//     {  temp= [] ;

//       for(var j=0;j < array[i].length;j++)
//       {
//           temp << 0;
//       }
//       fliped << temp;
//     }
var fliped=[[0,0,0],[0,0,0],[0,0,0]]

  for(var i=0;i<array.length;i++)
   {
      for(var j=0;j < array[i].length;j++)
      {
        fliped[j][array[i].length-1-i] = array[i][j];
        // console.log("i=");
        // console.log(i);
        // console.log("j=");
        // console.log(j);

      }
   }

   return fliped
}
var a=[[1,0,0],[1,0,0],[1,1,0]]
console.log(a);
a=rotateLeft(a);
console.log(a);
