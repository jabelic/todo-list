
function submitItem(){
    var tasks = [];
    tasks.push(document.getElementById('task').value);
    for(var i=0; i< tasks.length; i++){
        var li = document.createElement("li");
        li.textContent = tasks[i];
        document.getElementById("todo-list").appendChild(li);
    }
}

document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
      submitItem();
    }
});



