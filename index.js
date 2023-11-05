function addTask() {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskInput.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}