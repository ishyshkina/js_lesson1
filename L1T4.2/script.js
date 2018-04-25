var n = 5484684;

function revertnum(n, a) {
	a = a + (n % 10);
	var i = Math.floor(n/10);
	if (i === 0) {console.log(a);}
	else {
		revertnum(i,a);
	}
}
revertnum(n,"");
