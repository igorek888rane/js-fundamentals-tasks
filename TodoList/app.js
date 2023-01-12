const list = document.getElementById('todos');
document.querySelector('button').addEventListener('click', handleClick);
document.addEventListener('DOMContentLoaded', loadTodos);


// class TodoList  {
//     list = document.getElementById('todos');
//     button  = document.querySelector('button')
//     constructor() {
//         this.button.addEventListener('click',this.handleClick)
//     }
//     handleClick() {
//         const newTodo = this.previousElementSibling.value.trim();
//
//         if (newTodo) {
//             createTodo(newTodo);
//             saveToStorage(newTodo);
//             this.previousElementSibling.value = '';
//         } else {
//             alert('input field is empty ');
//         }
//     }
//
// }

function handleClick() {
    const newTodo = this.previousElementSibling.value.trim();

    if (newTodo) {
        createTodo(newTodo);
        saveToStorage(newTodo);
        this.previousElementSibling.value = '';
    } else {
        alert('input field is empty ');
    }
}

function saveToStorage(todo) {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];

    localStorage.setItem('tasks', JSON.stringify([...todos, todo]))
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('tasks'));

    if (todos) {
        todos.forEach(todo => createTodo(todo))
    }
}

function createTodo(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.className = 'todo-item';
    li.addEventListener('click', removeTodo);


    list.appendChild(li);
}

function removeTodo() {
    removeToStorage(this.innerText)
    this.removeEventListener('click', removeTodo);
    this.remove();
}
function removeToStorage (removeTodo) {

    const todos = JSON.parse(localStorage.getItem('tasks'))
     const newTodos = todos.filter(todo=>todo!==removeTodo);
    console.log(todos,newTodos);
   localStorage.setItem('tasks',JSON.stringify(newTodos))

}