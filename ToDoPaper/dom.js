const list = document.getElementById("todo-items");

function viewTodoListDom(todolist) {
	list.innerHTML = "";	
	for (var i = 0; i <= todolist.length - 1; i++) {
		var li = document.createElement("li");
		li.innerHTML = `<span>${todolist[i].id}    </span><span>${todolist[i].text}</span>`;
		list.appendChild(li);
	}
}


function getTodoItemDescription() {
	var text = document.getElementById("name_1").value;
	return text;
}

function getTodoItemDescription2() {
	var text2 = document.getElementById("name_2").value;
	return text2;
}
function getTodoItemDescription3() {

	var select = document.getElementById("name_3").checked;

	return select;
}

function addTodoItemDom(newItem){
	for (var i = 0; i <= newItem.length - 1; i++) {
		var li = document.createElement("li");
		li.innerHTML = `<span>${newItem[i].id}    </span><span>${newItem[i].text}</span>`;
		list.appendChild(li);
	}



	function deleteTodoItemDom(){
		el = document.getElementById("del");
		el.parentNode.removeChild(el);

	}

}




