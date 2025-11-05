console.log("script started");

// add a task
function addTask() {


// get task text
let textbox = document.getElementById("task-input");
let taskText = textbox.value;
textbox.value = "";

// get tasklist
let taskList = document.getElementById("task-list")

// generate id number
let idNum = taskList.childElementCount;

// create task div
let taskDiv = document.createElement("div");
taskDiv.id = "task" + idNum;
taskDiv.classList.add("task-item");
if (idNum % 2 == 1) {
    taskDiv.style.backgroundColor = "darkturquoise";
}

// create checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "checkbox" + idNum;
checkbox.addEventListener("change", removeTask);

// create label
let label = document.createElement("label");
label.id = "label" + idNum;

// set label text
label.innerText = taskText;

// add checkbox to task div
taskDiv.appendChild(checkbox);

// add the label to the task div
taskDiv.appendChild(label);

//add the dask div to the list
taskList.appendChild(taskDiv);
}

function removeTask(event) {
    // get the id of the div to remove
    let checkboxId = event.target.id;
    let idNum = checkboxId.substring(8);
    let taskDiv = document.getElementById("task" + idNum);
    taskDiv.classList.add("remove");

    // get the task list container
    let taskList = document.getElementById("task-list");

    // remove task div from task list
    setTimeout(function() {
         taskList.removeChild(taskDiv);
         fixTaskColors();
    }, 600)
}

function fixTaskColors() {
    let taskList = document.getElementById("task-list");
    for (let i = 0; i < taskList.childElementCount; i++) {
        taskList.children[i].style.backgroundColor = "dodgerblue";
        if (i % 2 == 1) {
            taskList.children[i].style.backgroundColor = "darkturquoise";
        }
    }
}