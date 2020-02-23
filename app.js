

var newTag = function(tag){
    var elem = document.createElement(tag);
    for (var i=0; i<arguments.length; i++){
        elem.appendChild(arguments[i]);
    }
    return elem;
};

var newText = function (text) {
    return document.createTextNode(text);
};


function submitItem() {
    var tasks = [];
    var task = document.getElementById('task');
    var taskContent = task.value;

    console.log(`入力欄の値: ${taskContent}`);
    tasks.push(taskContent);
    for (var j = 0; j < tasks.length; j++) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        li.classList.add("align-items-center");
        li.textContent = tasks[j];
        var i = document.createElement("i");
        i.classList.add("far");
        i.classList.add("fa-trash-alt");
        i.classList.add("del");
        li.appendChild(i);
        document.getElementById("todo-list").appendChild(li);
        /*
        var i = document.createElement("i");
        i.classList.add("far");
        i.classList.add("fa-trash-alt");
        i.classList.add("del");
        li.appendChild(i);*/
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

// 削除ボタンが押されたら発動
function remove(){
    var id = this.getAttribute('id');
    todos.splice(id, 1);
    show();
}

/*
const addTask = document.querySelector('.add');
const list = document.querySelector('.todos');

const createTodoList = task => {
    // HTML テンプレートを生成
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}*/





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