
var arr = [1, 2, 1, 2, 3.14, 4, 2, 1];
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