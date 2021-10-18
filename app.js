//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
  //prevent form submiting
  event.preventDefault();
  //tidi DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newtTodo = document.createElement("li");
  newtTodo.innerText = "hey";
  newtTodo.classList.add("todo-item");
  todoDiv.appendChild(newtTodo);
  //check mark button
  const complitedButton = document.createElement("button");
  complitedButton.innerHTML = '<i class="fas fa-check"></i>';
  complitedButton.classList.add("complete-btn");
  todoDiv.appendChild.apply(complitedButton);
  //check trash button
  const trashdButton = document.createElement("button");
  trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashdButton.classList.add("complete-btn");
  todoDiv.appendChild.apply(trashdButton);
  //apend to list
  todoList.appendChild(todoDiv);
}
