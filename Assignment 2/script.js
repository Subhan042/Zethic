const todo = document.getElementById("todo");
const todolist = document.getElementById("todolist");

function addtolist(){
    const todoValue = todo.value;
    if(todoValue === ""){
        alert("Please Enter a Task");
        return;
    }

    const li = document.createElement('li');
     li.style.position = "relative";


    const tasktext = document.createElement('span');
    tasktext.textContent = todoValue;
    tasktext.id = 'tasktext';

    
    
    const dustbin = document.createElement('span');
    dustbin.textContent = "🗑";
    dustbin.className = 'dustbin';

    dustbin.addEventListener('click',(event) => {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(tasktext);
    li.appendChild(dustbin);

    li.addEventListener('click',() => {
        li.classList.toggle('complete');
    });


    todolist.appendChild(li);

    todo.value='';
    todo.focus();
}

