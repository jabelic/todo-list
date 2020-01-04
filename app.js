

function submitItem() {
    var tasks = [];
    var task = document.getElementById('task');

    var taskContent = task.value;


    console.log(`入力欄の値: ${taskContent}`);
    tasks.push(taskContent);
    for (var j = 0; j < tasks.length; j++) {
        var li = document.createElement("li");
        li.textContent = tasks[i];
        document.getElementById("todo-list").appendChild(li);
        var i = document.createElement("i");
        i.setAttribute("class", "far fa-trash-alt delete");
        document.getElementById("li").appendChild(i);
    }

}


function reset() {

    var reset_target = document.getElementById("text");

    if (reset_target.value == '') {
        alert('すでにリセットされています。');
    } else {
        reset_target.value = '';
    }
};





/* task.addEventListener('submit', e => {
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
    });*/


/*document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        submitItem();
    }
});*/