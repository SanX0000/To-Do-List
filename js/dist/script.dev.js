"use strict";

// Seleção de elementos
var todoForm = document.querySelector("#todo-form");
var todoInput = document.querySelector("#todo-input");
var todoList = document.querySelector("#todo-list");
var editForm = document.querySelector("#edit-form");
var editInput = document.querySelector("#edit-input");
var cancelEditBtn = document.querySelector("#cancel-edit-btn"); // Funcoes

var saveTodo = function saveTodo(text) {
  var todo = document.createElement("div");
  todo.classList.add("todo");
  var todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);
  var doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);
  var editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);
  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);
  todoList.appendChild(todo);
  todoInput.value = "";
  todoInput.focus();
}; // Eventos


todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});
//# sourceMappingURL=script.dev.js.map
