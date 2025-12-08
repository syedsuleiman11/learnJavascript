let todoList = [];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('.toDo');
    let dateElement = document.querySelector('.todo-date');
    let todoitem = inputElement.value;
    let tododate = dateElement.value;
    todoList.push({ item: todoitem, dueDate: tododate });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let containerItems = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
        <h3 class=item-h3>${item}</h3>
        <h3 class=item-h3>${dueDate}</h3>
        <button class=display-button onclick='todoList.splice(${i}, 1); 
        displayItems();'>Delete</button>
       `;
    }
    containerItems.innerHTML = newHtml;
}
