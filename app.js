

function submitItem(){
    var tasks = [];
    var task = document.getElementById('task');
    var myButton = document.getElementById("submit-button");

    myButton.onclick = function() {
        var taskContent = task.value;
        tasks.push(taskContent);
        for(var i=0; i< tasks.length; i++){
            var li = document.createElement("li");
            li.textContent = tasks[i];
            document.getElementById("todo-list").appendChild(li);
        }
    }
}

addTask.addEventListener('submit', e => {
    // デフォルトのイベントを無効
    e.preventDefault();

    // タスクに入力した値を空白を除外して格納
    const todo = addTask.add.value.trim();
    if(todo.length) {
        // Todo List の HTML を作成
        createTodoList(todo);
        // タスクに入力した文字をクリア
        addTask.reset();
    }
});


