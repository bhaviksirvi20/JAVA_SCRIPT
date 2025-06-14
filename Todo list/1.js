let count = 0
function add() {
    let todoInput = document.getElementById("todo-input").value
    let todoList = document.getElementById("todo-list")
    todoList.innerHTML +=
        `
    <li id="div${count}">
    <span class="task" id="todoListt${count}">${todoInput}</span>
    <div class="actions">
    <button class="edit" onclick="edit(${count})">Edit</button>
    <button class="delete" onclick="del(${count})">Delete</button>
    </div>
    </li>
    `
    count++
    let todoi = document.getElementById("todo-input")
    todoi.value = ""
}

function del(count) {
    let div = document.getElementById(`div${count}`)
    div.remove()

}
function edit(count) {
    let todolis = document.getElementById(`todoListt${count}`).innerText
    let edit = document.getElementById(`div${count}`)

    edit.innerHTML =
        `
    <input type="text" id="saveval" value="${todolis}"/>
    <div class="actions">
    <button class="edit" onclick="save(${count})">Save</button>
    <button class="delete" onclick="del(${count})">Delete</button>
    </div>
    
    `
}
function save(count) {
    let saveval = document.getElementById("saveval").value
    let edit = document.getElementById(`div${count}`)

    edit.innerHTML =
        `
     <span class="task" id="todoListt${count}">${saveval}</span>
    <div class="actions">
    <button class="edit" onclick="edit(${count})">Edit</button>
    <button class="delete" onclick="del(${count})">Delete</button>
    </div>
    
    `
}