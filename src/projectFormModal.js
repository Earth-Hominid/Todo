function renderProjectFormModal() {
  // create element
  const modalDiv = document.createElement('div');
  // set attribute
  modalDiv.setAttribute('id', 'modal');
  modalDiv.classList = 'modal';
  // IIFE to create header
  const renderModalHeader = (() => {
    // create elements
    const modalHeader = document.createElement('div');
    const modalTitle = document.createElement('div');
    const closeButton = document.createElement('button');
    //set class
    modalHeader.classList = 'modal_header';
    modalTitle.classList = 'modal_title';
    modalTitle.textContent = 'Add project';
    closeButton.classList = 'close_button';
    closeButton.setAttribute('data-close-button', '');
    // append to DOM
    modalDiv.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
  })();
  // IIFE to create form body
  const projectForm = (() => {
    // create elements
    const projectForm = document.createElement('form');
    const formField = document.createElement('div');
    const projectLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    // set attributes, classes etc
    projectForm.id = 'project_form';
    projectForm.setAttribute('data-project-form', '');
    formField.classList = 'form_field';
    projectLabel.textContent = 'Name';
    projectLabel.id = 'project_modal_label';
    nameInput.id = 'project_title_input';
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('maxlength', '50');
    nameInput.setAttribute('value', '');
    nameInput.setAttribute('placeholder', 'Enter project name');
    nameInput.setAttribute('autocomplete', 'off');
    nameInput.setAttribute('data-project-input', 'id');
    nameInput.required = true;
    // append to DOM
    modalDiv.appendChild(projectForm);
    projectForm.appendChild(formField);
    formField.appendChild(projectLabel);
    formField.appendChild(nameInput);
  })();
  // IIFE to create form footer
  const renderModalFooter = (() => {
    // create elements
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
    modalDiv.appendChild(footer);
    footer.appendChild(cancelButton);
    footer.appendChild(addButton);
  })();

  return modalDiv;
}

export default renderProjectFormModal;
