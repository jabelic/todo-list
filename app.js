
function submitItem() {
    var tasks = [];
    var task = document.getElementById('task');
    var taskContent = task.value;

    console.log(`入力欄の値: ${taskContent}`);
    tasks.push(taskContent);
    for (var j = 0; j < tasks.length; j++) {
        const li = document.createElement("li");
        li.textContent = tasks[j];
        var input = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("name","check");
        input.classList.add("btn");
        li.appendChild(input);

        var i = document.createElement("i");
        i.classList.add("far");
        i.classList.add("fa-trash-alt");
        i.classList.add("del");
        li.appendChild(i);
        document.getElementById("todo-list").appendChild(li);
    }
};

function reset() {
    var reset_target = document.getElementById("text");

    if (reset_target.value == '') {
        alert('すでにリセットされています。');
    } else {
        reset_target.value = '';
    }
};


const list = document.querySelector('.todos');
// 削除機能
list.addEventListener('click', e => {
    if (e.target.classList.contains('del')){
        e.target.parentElement.remove();
    }
},false);



// remove checked task
function delchecked(){
    var lists = document.getElementById('todo-list');
    var boxes = lists.childNodes;
    var cnt = boxes.length;
    for(var i=cnt-1; i>=0; i--) {
        if(boxes.item(i).childNodes[1].checked) {
            boxes.item(i).remove();
        }
    }
};
