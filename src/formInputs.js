const createForm = () => {
  const formContainer = document.createElement('div');
  formContainer.id = 'form-container';
  // formContainer.setAttribute('style', 'display:none');

  const renderTaskForm = (() => {
    const content = document.createElement('div');
    const addTaskOriginalButton = document.createElement('button');
    const addTaskOriginalSpan = document.createElement('span');
    const form = document.createElement('form');
    const taskDetails = document.createElement('div');
    const taskDetailsInputFields = document.createElement('div');
    const nameDiv = document.createElement('div');
    const nameInput = document.createElement('input');
    const descriptionDiv = document.createElement('div');
    const descriptionInput = document.createElement('textarea');
    const editor = document.createElement('div');
    const taskEditorExtraField = document.createElement('div');
    const taskEditorSubmitField = document.createElement('div');
    const taskActionFillerDiv = document.createElement('div');
    const addTaskButtonDiv = document.createElement('div');
    const cancelTaskButtonDiv = document.createElement('div');
    const addTaskFormButton = document.createElement('button');
    const cancelTaskFormButton = document.createElement('button');
    const priorityDiv = document.createElement('div');
    const priorityButton = document.createElement('button');
    const priorityButtonSpan = document.createElement('span');
    const submitFormField = document.createElement('div');
    addTaskOriginalButton.setAttribute('data-add-task-navigation', '');
    addTaskOriginalButton.classList = 'plus-add-button';
    addTaskOriginalButton.textContent = 'Add Task';
    addTaskOriginalSpan.classList = 'plus-icon';
    content.classList.add('content');
    form.id = 'addtaskform';
    taskDetails.classList.add('task-details');
    taskDetailsInputFields.classList = 'task_editor_input_fields';
    nameDiv.classList.add('input-box');
    nameInput.id = 'name';
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute(
      'placeholder',
      'Add task e.g., Sunday dinner, pick up desert 6:00pm'
    );
    nameInput.setAttribute('autocomplete', 'off');
    nameInput.required = true;
    descriptionDiv.classList.add('input-box');
    descriptionInput.id = 'description';
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('placeholder', 'Description');
    descriptionInput.setAttribute('autocomplete', 'off');
    descriptionInput.required = true;
    editor.setAttribute('id', 'task-editor');
    taskEditorExtraField.classList = 'extra-field';
    taskActionFillerDiv.classList = 'extra-field-buttons';
    taskEditorSubmitField.classList = 'task-editor-submit';
    addTaskFormButton.classList = 'add-task';
    addTaskFormButton.textContent = 'Add';
    cancelTaskFormButton.classList = 'cancel-task';
    cancelTaskFormButton.textContent = 'Cancel';
    priorityDiv.setAttribute('id', 'task-item-action');
    priorityButton.classList.add('item-actions-priority');
    priorityButtonSpan.setAttribute('data-action', 'priority-picker');
    priorityButtonSpan;

    // Append
    formContainer.append(content);
    content.appendChild(addTaskOriginalButton);
    addTaskOriginalButton.appendChild(addTaskOriginalSpan);
    content.appendChild(form);
    form.append(taskDetails);
    taskDetails.append(taskDetailsInputFields);
    taskDetailsInputFields.appendChild(nameDiv);
    nameDiv.append(nameInput);
    taskDetailsInputFields.append(descriptionDiv);
    descriptionDiv.append(descriptionInput);
    taskDetails.appendChild(editor);
    editor.appendChild(taskEditorExtraField);
    taskEditorExtraField.appendChild(taskActionFillerDiv);
    editor.appendChild(priorityDiv);
    editor.appendChild(priorityDiv);
    priorityDiv.append(priorityButton);
    priorityButton.appendChild(priorityButtonSpan);
    editor.appendChild(submitFormField);
    form.appendChild(taskEditorSubmitField);
    taskEditorSubmitField.appendChild(addTaskButtonDiv);
    addTaskButtonDiv.appendChild(addTaskFormButton);
    taskEditorSubmitField.appendChild(cancelTaskButtonDiv);
    cancelTaskButtonDiv.appendChild(cancelTaskFormButton);
  })();

  return formContainer;
};

export default createForm;
