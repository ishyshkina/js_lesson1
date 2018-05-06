
let result = [1, 3, 4, 1, 1, 3, 4, 5].reduce(function(acc, el) {
	acc[el] = (acc[el] || 0) + 1;
	return acc;
}, {	
});

alert( JSON.stringify(result, null, 2));