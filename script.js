function addTask() {
    let taskText = document.getElementById('taskText').value;
    let taskCategory = document.getElementById('taskCategory').value;
    
    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }
    
    let taskList = document.getElementById(taskCategory).querySelector('ul');
    let listItem = document.createElement('li');
    
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        listItem.classList.toggle('completed');
    };
    
    let span = document.createElement('span');
    span.textContent = taskText;
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        taskList.removeChild(listItem);
    };
    
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    
    document.getElementById('taskText').value = '';
}