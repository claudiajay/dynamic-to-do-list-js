// Wait for the DOM to fully load before executing the code
document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
      // Get the task input value and trim any extra spaces
      const taskText = taskInput.value.trim();

      // If the input is empty, prompt the user to enter a task
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
          taskList.removeChild(newTask); // Remove the task from the list
      });

      // Append the remove button to the task item
      newTask.appendChild(removeButton);

      // Append the new task to the task list
      taskList.appendChild(newTask);

      // Clear the input field
      taskInput.value = '';
  }

  // Event listener for the "Add Task" button click
  addButton.addEventListener('click', addTask);

  // Event listener for the "Enter" key press to add a task
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});
