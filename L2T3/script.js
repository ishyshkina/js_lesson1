var arr = [1, -2, 1, 2, -3, 4, 2, 1,3.14];


function task1(arr_1){
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
}

function task2(arr_2){
	var result = {};
for (var i = 0; i < arr.length; i++)
{
    var a = arr[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
}

   console.log(result);
}

task1(arr);
task2(arr);


