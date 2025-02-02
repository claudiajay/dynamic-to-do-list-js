document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to load tasks from Local Storage and display them
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' ensures tasks are not saved again
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
      // If taskText is empty, alert the user
      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      // Create a new list item element
      const newTask = document.createElement('li');
      newTask.textContent = taskText;

      // Create the "Remove" button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');

      // Attach the event listener to the remove button
      removeButton.addEventListener('click', function() {
          // Remove the task from the list
          taskList.removeChild(newTask);

          // Remove the task from Local Storage
          const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
          const updatedTasks = storedTasks.filter(task => task !== taskText);
          localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      });

      // Append the remove button to the task item
      newTask.appendChild(removeButton);

      // Append the new task to the task list
      taskList.appendChild(newTask);

      // Save the new task to Local Storage
      if (save) {
          const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
          storedTasks.push(taskText);
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }

      // Clear the input field
      taskInput.value = '';
  }

  // Event listener for the "Add Task" button click
  addButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      addTask(taskText);
  });

  // Event listener for the "Enter" key press to add a task
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          const taskText = taskInput.value.trim();
          addTask(taskText);
      }
  });

  // Load tasks from Local Storage when the page is loaded
  loadTasks();
});
