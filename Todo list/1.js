let count = 0;
function add() {
  let todoinput = document.getElementById("todo-input").value;
  let todo = document.getElementById("todo-list");

  if (todoinput != "") {
    count++;
    todo.innerHTML += `
        <li>
        <span>${todoinput}</span>
        <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete" onclick="del()">Delete ${count}</button>
        </div>
        </li>
        
        `;
  } else {
    alert("Plese enter a Task !");
  }

  let clen = document.getElementById("todo-input");
  clen.value = "";
}

function del() {
  let todo = document.getElementByClassName("todo-list");
  todo[0].remove();
}
