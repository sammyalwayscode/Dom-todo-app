console.log("Hello Todo");

const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

addTodoButton.addEventListener("click", () => {
  if (todoInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = todoInput.value;

    li.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    todoList.appendChild(li);
    todoInput.value = "";
  } else {
    alert("Please enter a todo item");
  }
});