var arr= [-1,2,3,-4,0,5,8,-10];

var arrB = [];
var arrC = [];

for (var i = 0; i <arr.length; i++) {
 if (arr[i]>0) {
 	arrB.push(arr[i]);
 } else  if (arr[i]<0) {
 	arrC.push(arr[i]);
 }

}



console.log("Array B: "+ arrB);
console.log("Arry C: "+ arrC);