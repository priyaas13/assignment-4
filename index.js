let todos = [];

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    todos = data;
    displayTodos(todos);
  });

function displayTodos(list) {
  const tbody = document.getElementById("todo-body");
  tbody.innerHTML = "";

  list.forEach(todo => {
    const tr = document.createElement("tr");
    tr.className = todo.completed ? "completed" : "uncompleted";

    tr.innerHTML = `
      <td>${todo.id}</td>
      <td>${todo.title}</td>
      <td>${todo.completed ? "Completed" : "Not Completed"}</td>
      <td>
        <button onclick="toggleStatus(${todo.id})">Toggle</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function toggleStatus(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  displayTodos(todos);
}

function showCompleted() {
  const completed = todos.filter(todo => todo.completed);
  displayTodos(completed);
}

function showUncompleted() {
  const uncompleted = todos.filter(todo => !todo.completed);
  displayTodos(uncompleted);
}

function showAll() {
  displayTodos(todos);
}