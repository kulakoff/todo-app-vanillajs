//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
console.log(todoInput, todoButton, todoList);

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(event) {
  //prevent form submiting
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
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
  //clear todoInput value
  todoInput.value = "";
}

function deleteCheck(el) {
  const item = el.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation to dell task
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
    // todo.remove();
  }

  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

  console.log(el.target);
}
