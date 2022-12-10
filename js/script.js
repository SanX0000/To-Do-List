// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// Funcoes
const createTodo = (text) => {
  todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  // todoTitleText = todoTitle.innerText

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();
  saveTodos();
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
      saveTodos();
    }
  });
};

// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    createTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText;
  }

  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
    saveTodos();
  }
  if (targetEl.classList.contains("edit-todo")) {
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
    saveTodos();
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }
  toggleForms();
});

//Localstorage e JSON

const saveTodos = () => {
  const allTodosTitle = todoList.querySelectorAll("h3");
  const allTodosList = [];

  for (eachTodo of allTodosTitle) {
    let eachTodoText = eachTodo.innerText;
    allTodosList.push(eachTodoText);
  }
  const todoJSON = JSON.stringify(allTodosList);
  localStorage.setItem("todos", todoJSON);
};

const addSavedTodos = () => {
  const todos = localStorage.getItem("todos");
  const allTodosList = JSON.parse(todos);

  for (let todo of allTodosList) {
    createTodo(todo);
  }
};
addSavedTodos();

// Search todos
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#erase-button");

const eraseLastLetter = (e) => {
  e.preventDefault();
  searchInput = searchInput.value.split();
  searchInput = searchInput.value.slice(0, -1);
  console.log(searchInput);
};

const searchTodos = (e) => {
  e.preventDefault();
  const allTodos = document.querySelectorAll(".todo");
  if (searchInput.value) {
    for (let todo of allTodos) {
      let title = todo.querySelector("h3").textContent;
      title = title.toLowerCase();
      let searchText = searchInput.value.toLowerCase();
      if (!title.includes(searchText)) {
        todo.style.display = "none";
      } else {
        todo.style.display = "flex";
      }
    }
  }
};

searchBtn.addEventListener("input", eraseLastLetter);
searchInput.addEventListener("input", searchTodos);

// Filter todos

const filterSelect = document.querySelector("#filter-select");

const filterTodos = (e) => {
  e.preventDefault();
  // let doneTodos = document.querySelectorAll('.done');
  let allTodos = document.querySelectorAll(".todo");
  for (let todo of allTodos) {
    if (filterSelect.value === "done" && todo.classList.contains("done")) {
      todo.style.display = "flex";
    } else if (
      filterSelect.value === "done" &&
      !todo.classList.contains("done")
    ) {
      todo.style.display = "none";
    } else if (
      filterSelect.value === "todo" &&
      !todo.classList.contains("done")
    ) {
      todo.style.display = "flex";
    } else if (
      filterSelect.value === "todo" &&
      todo.classList.contains("done")
    ) {
      todo.style.display = "none";
    } else {
      todo.style.display = "flex";
    }
  }
};
filterSelect.addEventListener("change", filterTodos);
