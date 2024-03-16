function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task.");
    } else {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
        var textNode = document.createTextNode(input);
        li.appendChild(checkbox);
        li.appendChild(textNode);
        ul.appendChild(li);
        document.getElementById("taskInput").value = "";
    }
}
