//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
console.log(todoInput,todoButton,todoList);

//event listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
  //prevent form submiting
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //check trash button
  const trashdButton = document.createElement("button");
  trashdButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashdButton.classList.add("trash-btn");
  todoDiv.appendChild(trashdButton);
  //apend to list
  todoList.appendChild(todoDiv);
}
