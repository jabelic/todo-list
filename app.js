
function submitItem() {
    var tasks = [];
    var task = document.getElementById('task');
    var taskContent = task.value;

    console.log(`入力欄の値: ${taskContent}`);
    tasks.push(taskContent);
    for (var j = 0; j < tasks.length; j++) {
        const li = document.createElement("li");
        //li.classList.add("list-group-item");
        //li.classList.add("d-flex");
        //li.classList.add("justify-content-between");
        //li.classList.add("align-items-center");
        li.textContent = tasks[j];
        var input = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("name","check");
        input.classList.add("btn");
        li.appendChild(input);
        //li.insertBefore(input);

        var i = document.createElement("i");
        i.classList.add("far");
        i.classList.add("fa-trash-alt");
        i.classList.add("del");
        li.appendChild(i);
        document.getElementById("todo-list").appendChild(li);
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


const list = document.querySelector('.todos');
// 削除機能
list.addEventListener('click', e => {
    if (e.target.classList.contains('del')){
        e.target.parentElement.remove();
    }
},false);



//const btn = document.getElementsByClassName("btn");

document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector('.btn');
    btn.addEventListener("click", ev => {
    if (ev.target.classList.contains("btn")){;
        ev.target.classList.contains("btn").style.color = "red"
    }
},false);
}, false);



function delchecked(){
    // チェックボックス要素をすべて取得する
    var boxes = document.querySelector(".todos");
    // チェックボックスの個数を取得する
    var cnt = boxes.length;
    for(var i=0; i<cnt; i++) {
        if(boxes.item(i).checked) {
            //boxes.item(i).checked.remove();
            console.log("hoge");
        }
    }
};
