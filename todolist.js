const todos = [];

// selecting
const todoInpute = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");

// events
todoForm.addEventListener("submit", addNewTodo);
filterOption.addEventListener("change", filterTodos);
// functions
function addNewTodo(e) {
  e.preventDefault();
  // for refreshing

  if (!todoInpute.value) return null;
  const newTodo = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    title: todoInpute.value,
    isCompleted: false,
  };
  todos.push(newTodo);
  // creating todos on dom
  let result = "";
  todos.forEach((todo) => {
    result += `  <li class="todo">
    <p class="todo__title">${todo.title}</p>
    <span class="todo__createdAt">${new Date(todo.createdAt).toLocaleDateString(
      "fa-IR"
    )}</span>
    <button data-todo-id=${
      todo.id
    }><i class="todo__check far fa-check-square"></i></button>
    <button data-todo-id=${
      todo.id
    }><i class="todo__remove far fa-trash-alt"></i></button>
  </li>`;
  });
  todoList.innerHTML = result;
  todoInpute.value = "";
}
