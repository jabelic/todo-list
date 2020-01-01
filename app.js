
function submitItem(){
    var tasks = [];
    var task = document.getElementById('task').value;
    tasks.push(task);
    for(var i=0; i< tasks.length; i++){
        var li = document.createElement("li");
        li.textContent = tasks[i];
        document.getElementById("todo-list").appendChild(li);
    }
}





