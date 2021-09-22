function renderTaskForm() {
  const taskFormLineContainer = document.createElement('li');
  taskFormLineContainer = document.classList = 'task_manager';

  // IIFE to create task form
  const renderTaskForm = (() => {
    const taskForm = document.createElement('form');
    taskForm = document.setAttribute('id', 'task_form');
    taskForm = document.classList = 'task_form';
    taskFormLineContainer.appendChild(taskForm);

    const taskEditorArea = document.createElement('div');
    taskEditorArea.classList = 'task_editor_area';
    taskForm.appendChild(taskEditorArea);

    const taskEditorInputContainer = document.createElement('div');
    taskEditorInputContainer.classList = 'task_input_container';
    taskEditorArea.appendChild(taskEditorInputContainer);

    const taskContent = docoment.createElement('div');
    taskContent.classList = 'task_content';
    taskEditorInputContainer.appendChild(taskContent);

    // Create task name input and description text area
    const taskNameInput = document.createElement('input');
    const taskDescriptionInput = document.createElement('textarea');

    taskNameInput.classList = 'task_name';
    taskDescriptionInput.classList = 'task_description';
    taskDescriptionInput.setAttribute('placeholder', 'Description');
    taskContent.appendChild(taskNameInput);
    taskContent.appendChild(taskDescriptionInput);
  })();

  const renderTaskFormButtons = (() => {})();

  return taskFormLineContainer;
}

export default renderTaskForm;
