function loadTodos(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then( response => response.json())
.then(data => displayTodos(data))
}
loadTodos();

function displayTodos(todos){
    /* 
    1. get the container
    2. 
    */
    const todoContainer = document.getElementById('todo-container')
    for(const todo of todos){
        // create the element
        const todoDiv = document.createElement('div');
        // set inner text or inner html
        todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <p>User: ${todo.userId}</p>
        <p>isCompleted: ${todo.completed}</p>

        `
        // appendChild
        todoContainer.appendChild(todoDiv)
    }
}