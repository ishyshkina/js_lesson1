	function isValid(o) {
		return o.text !== undefined && o.text.length !== 0 && o.completed !== undefined && o.id !== undefined && (o.id+"").length !==0 && isUniqueId(o.id);
	}

	function isUniqueId(id) {
		var newarr = todoItems.filter(function(item) {
			return item.id === id;
		});
		return newarr.length === 0;

	}

	function addTodoItem(newItem) {
		if (isValid(newItem)) {
			todoItems.push(newItem);
			console.log(true);
			return true;
		} else {
			console.log(false);
			return false;
		}
	} 

function showfilter(key,value) {
	var filterarr = todoItems.filter(function(item) {
	return item[key] === value;

	 });
	return filterarr;
		

}

function viewTodoList(itemsType){
	
	switch (itemsType) {
		case "completed": 
		console.log(showfilter("completed", true));
		break;

		case "not_completed" :
		console.log(showfilter("completed", false));
		break;

		case "All" : 
		console.log(todoItems);


	}
}
