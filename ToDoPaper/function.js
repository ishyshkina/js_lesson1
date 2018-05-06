	function isValid(o) {
		return o.text !== undefined && o.text.length !== 0 && o.completed !== undefined && o.id !== undefined && (o.id+"").length !==0 && isUniqueId(o.id);
	}

	function fillTodoList() {
		$.getJSON("todos.json", function(data){
			todoItems = data;
			console.log(todoItems);
		});
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
			console.log("Todo item has been added to todo list");
			return true;
		} else {
			console.log(`Todo item ${newItem} can't be added to todo list`);
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
			console.log("Your completed tasks: ");
			console.log(showfilter("completed", true));
			break;

			case "not_completed":
			console.log("Your incompleted tasks: ");
			console.log(showfilter("completed", false));
			break;

			case "All" : 
			console.log("Full todo list: ");
			console.log(todoItems);
		}
	}

	function editTodoItem(id, newtext){
		if (newtext.length !== 0){
			var result = showfilter("id", id);
			if (result.length > 0) {
				result[0].text = newtext;
				console.log(`Todo item with id=${id} has been edited`);
				return true;
			} else {
				console.log(`Todo item with id=${id} was not found`);
			}
		} else {
			console.log("Please provide correct text");
			return false;	
		}
	}

	function deleteTodoItem(id){
		if (showfilter("id", id).length > 0) {
			todoItems = todoItems.filter(function(item) {
				return item["id"] !== id;
			});
			console.log("Todo item has been deleted");
			return true;
		} else {
			console.log(`Todo item with id=${id} was not found`);
		}
	}
