
var a = 1;
var b = 5;
var c = 2;


var d = b * b - 4 * a * c;
 if ( d >= 0 ) {
 d = Math.sqrt(d);
 root1 = (-b + d)/(2.0*a);
 root2 = (-b - d)/(2.0*a);
console.log(root1,'and',root2);
}
else { 
console.log('There is no real roots!')
}




