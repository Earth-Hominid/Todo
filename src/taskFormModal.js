function renderTaskFormModal() {
  const formModal = document.createElement('div');
  formModal.setAttribute('id', 'modal');
  formModal.classList = 'modal';

  //IIFE to create header
  const renderTaskFormHeader = (() => {
    const modalHeader = document.createElement('div');
    const modalTitle = document.createElement('div');
    const closeButton = document.createElement('button');
    modalHeader.classList = 'modal_header';
    modalTitle.classList = 'modal_title';
    modalTitle.textContent = 'Add task';
    closeButton.classList = 'close_button';
    closeButton.setAttribute('data-close-button', '');
    // append to DOM
    formModal.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
  })();

  //IIFE to create task form body
  const taskForm = (() => {
    const taskForm = document.createElement('form');
    const formField = document.createElement('div');
    const taskLabel = document.createElement('label');
    const taskInput = document.createElement('input');
    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('input');

    // set attributes, classes etc
    taskForm.id = 'task_form';
    taskForm.setAttribute('data-task-form', '');
    formField.classList = 'form_field';
    taskLabel.textContent = 'Name';
    taskLabel.id = 'task_modal_label';
    taskInput.id = 'task_title_input';
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('name', 'name');
    taskInput.setAttribute('maxlength', '50');
    taskInput.setAttribute('value', '');
    taskInput.setAttribute('placeholder', 'e.g. Dentist Tuesday at 11:00am');
    taskInput.setAttribute('autocomplete', 'off');
    taskInput.setAttribute('data-project-input', 'id');
    taskInput.required = true;
    descriptionLabel.id = 'description_modal_label';
    descriptionInput.id = 'description_input';
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('maxlength', '50');
    descriptionInput.setAttribute('value', '');
    descriptionInput.setAttribute(
      'placeholder',
      'Parking entrance adjacent to St. Thomas street'
    );
    descriptionInput.setAttribute('autocomplete', 'off');

    // append to DOM
    formModal.appendChild(taskForm);
    taskForm.appendChild(formField);
    formField.appendChild(taskLabel);
    formField.appendChild(taskInput);
    formField.appendChild(descriptionLabel);
    formField.appendChild(descriptionInput);
  })();

  //IIFE to create form footer
  const renderModalFooter = (() => {
    const footer = document.createElement('footer');
    const addButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    // set class, attributes
    footer.classList = 'modal_footer';
    addButton.setAttribute('type', 'submit');
    addButton.classList = 'add_form_button';
    addButton.textContent = 'Add';
    addButton.setAttribute('id', 'add_project');
    addButton.setAttribute('data-project-form', '');
    cancelButton.setAttribute('type', 'button');
    cancelButton.classList = 'cancel_form_button';
    cancelButton.setAttribute('data-close-button', '');
    cancelButton.textContent = 'Cancel';
    // append to the DOM
    formModal.appendChild(footer);
    footer.appendChild(cancelButton);
    footer.appendChild(addButton);
  })();

  return formModal;
}

export default renderTaskFormModal;
