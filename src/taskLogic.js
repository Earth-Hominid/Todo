const addTaskLogicModule = (() => {
  const renderTasks = (selectedProject) => {
    selectedProject.tasks.forEach((task) => {
      const projectTaskList = document.createElement('ul');
      const taskElement = document.createElement('li');
      taskElement.classList.add('task-name');
      taskElement.dataset.taskId = task.id;
      taskElement.innerText = task.name;
      projectTaskList.appendChild(taskElement);
    });
  };

  const projectTaskList = document.createElement('ul');
  projectTaskList.classList = 'items';
  projectTaskList.setAttribute('data-project-list', '');
  taskListEditor.appendChild(projectTaskList); // taskListEditor is on the main index page.

  const taskLine = document.createElement('li');
  taskLine.classList = 'task_list_item';
  taskLine.setAttribute('data-task-line', '');
  taskListEditor.appendChild(taskLine);

  // task holder and task button holder
  const taskRoot = document.createElement('div');
  taskRoot.setAttribute('tabindex', '0');
  taskRoot.classList('task_list_item_body');
  taskLine.appendChild(taskRoot);

  const taskCheckBoxButton = document.createElement('button');
  taskCheckBoxButton.setAttribute('role', 'checkbox');
  taskCheckBoxButton.setAttribute('type', 'button');
  taskCheckBoxButton.classList('task_checkbox');
  taskCheckBoxButton.setAttribute('data-checkbox', 'id');
  taskRoot.appendChild(taskCheckBoxButton);

  const taskCheckBoxCircle = document.createElement('div');
  taskCheckBoxCircle.classList = 'task_checkbox_circle';
  taskCheckBoxButton.appendChild('taskCheckBoxCircle');
  taskCheckBoxButton.appendChild(taskCheckBoxCircle);

  // circle svg goes here

  const taskListItemContent = document.createElement('div');
  taskListItemContent = 'task_list_item';

  const taskHolder = document.createElement('div');
  const taskTitle = document.createElement('div');
  const taskDescription = document.createElement('div');

  taskHolder.classList = 'task_item';
  taskTitle.classList = 'task_title';
  taskTitle.setAttribute('data-task-title', 'id');
  taskDescription.classList = 'task_description';
  taskDescription.classList = 'data-task-description';

  const renderTaskTemplate = () => {
    const taskHolder = document.createElement('div');
    const taskInput = document.createElement('input');
    const labelElement = document.createElement('label');
    const checkboxSpan = document.createElement('span');

    taskHolder.classList = 'task-holder';
    taskInput.setAttribute('type', 'checkbox');
    checkBoxSpan.classList = 'task-checkbox';
  };
})();
