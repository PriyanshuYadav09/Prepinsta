function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('task-list');
  
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${taskText}
      <button onclick="toggleTask(this)">Mark as Completed</button>
    `;
    taskList.appendChild(listItem);
  
    taskInput.value = '';
  }
  
  function toggleTask(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle('completed');
  
    if (listItem.classList.contains('completed')) {
      button.textContent = 'Mark as Incomplete';
    } else {
      button.textContent = 'Mark as Completed';
    }
  }
  
  function clearCompleted() {
    const taskList = document.getElementById('task-list');
    const completedTasks = taskList.querySelectorAll('.completed');
  
    completedTasks.forEach(task => {
      task.remove();
    });
  }
  