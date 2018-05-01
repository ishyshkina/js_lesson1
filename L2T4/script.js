var str1 = "lemon";
var str2 = " Melon";

function normalstr(str){
	return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}

function isAnagram(str1,str2){
	return normalstr(str1) === normalstr(str2);
}

console.log( isAnagram(str1,str2) );