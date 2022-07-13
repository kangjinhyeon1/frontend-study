const todoBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", gettodos);
todoBtn.addEventListener("click", addtodo);
todoList.addEventListener("click", deletecheck);

function addtodo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newtodo = document.createElement("li");
  newtodo.innerText = todoInput.value;
  savelocaltodo(todoInput.value);
  newtodo.classList.add("todo-item");
  todoDiv.appendChild(newtodo);
  todoInput.value = "";

  const cmpbtn = document.createElement("button");
  cmpbtn.innerHTML = '<i class = "fas fa-check"></i>';
  cmpbtn.classList.add("cmpbtn");
  todoDiv.appendChild(cmpbtn);

  const trsbtn = document.createElement("button");
  trsbtn.innerHTML = '<i class = "fas fa-trash"></i>';
  trsbtn.classList.add("trsbtn");
  todoDiv.appendChild(trsbtn);

  todoList.appendChild(todoDiv);
}

function deletecheck(e) {
  const item = e.target;
  if (item.classList[0] === "trsbtn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "cmpbtn") {
    const todo = item.parentElement;
    todo.classList.toggle("cmp");
    console.log(todo);
  }
}

function savelocaltodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removelocaltodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoindex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoindex), 1);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function gettodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newtodo = document.createElement("li");
    newtodo.innerText = todo;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);

    const cmpbtn = document.createElement("button");
    cmpbtn.innerHTML = '<i class = "fas fa-check"></i>';
    cmpbtn.classList.add("cmpbtn");
    todoDiv.appendChild(cmpbtn);

    const trsbtn = document.createElement("button");
    trsbtn.innerHTML = '<i class = "fas fa-trash"></i>';
    trsbtn.classList.add("trsbtn");
    todoDiv.appendChild(trsbtn);

    todoList.appendChild(todoDiv);
  });
}
