function renderTaskForm() {
  const taskFormLineContainer = document.createElement('li');
  taskFormLineContainer = document.classList = 'task_manager';

  // IIFE to create
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

    const taskNameInput = document.createElement('input');
    const taskDescriptionInput = document.createElement('input');

    taskNameInput.classList = 'task_name';
    taskDescriptionInput.classList = 'task_description';
    taskEditorInputContainer.appendChild(taskNameInput);
    taskEditorInputContainer.appendChild(taskDescriptionInput);
  })();

  const renderTaskFormButtons = (() => {})();
}
