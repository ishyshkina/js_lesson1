var todoItems = [];

var obj1 = {
	text : "new",
	completed : true,
	id : 1
}

var obj2 = {
	text : "new2",
	completed : true,
	id : 1
}
var obj3 = {
	text : "",
	completed : true,
	id : 15
}

var obj4 = {
	text : "new",	
	id : 12
}
var obj5 = {
	text : "new",
	completed : false,	
	id : 2
}
var obj6 = {
	text : "new_ggg",
	completed : true,	
	id : ""
}






addTodoItem(obj1);
addTodoItem(obj2);
addTodoItem(obj3);
addTodoItem(obj4);
addTodoItem(obj5);
addTodoItem(obj6);
console.log(todoItems);
viewTodoList("completed");
viewTodoList("not_completed");
viewTodoList("All");






