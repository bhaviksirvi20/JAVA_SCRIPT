let count = 0;

function add() {
  let todoInput = document.getElementById("todo-input").value;
  let todoList = document.getElementById("todo-list");

  if (todoInput !== "") {
    todoList.innerHTML += `
      <li id="div${count}">
        <span class="task" id="todoListt${count}">${todoInput}</span>
        <div class="actions">
        <button class="edit" onclick="edit(${count})">Edit</button>
        <button class="delete" onclick="del(${count})">Delete</button>
        </div>
        </li>
        `;
    count++;

    let empty = document.getElementById("todo-input");
    empty.value = "";

  } else {
    alert("Please enter a value...");
  }
}

function del(count) {
  let div = document.getElementById(`div${count}`);
  div.remove();
}

function edit(count) {
  let editt = document.getElementById(`div${count}`);
  let input1 = document.getElementById(`todoListt${count}`).innerText;

  editt.innerHTML = `
    <input type="text" class="input" id="todoInput${count}" value="${input1}" />
    <div class="actions">
      <button class="edit" onclick="save(${count})">Save</button>
      <button class="delete" onclick="del(${count})">Delete</button>
    </div>
  `;
}

function save(count) {
  let div = document.getElementById(`div${count}`);
  let newVal = document.getElementById(`todoInput${count}`).value;

  div.innerHTML = `
    <span class="task" id="todoListt${count}">${newVal}</span>
    <div class="actions">
      <button class="edit" onclick="edit(${count})">Edit</button>
      <button class="delete" onclick="del(${count})">Delete</button>
    </div>
  `;
}