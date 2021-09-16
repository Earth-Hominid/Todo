function renderProjectFormModal() {
  // create element
  const modalDiv = document.createElement('div');
  // set attribute
  modalDiv.setAttribute('id', 'form_modal');
  //IIFE to create header
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
    // append to DOM
    modalDiv.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
  })();
  //IIFE to create body
  const projectForm = (() => {
    // create element
    const projectForm = document.createElement('form');
    const nameInput = document.createElement('input');
    // set attributes
    projectForm.id = 'project_form';
    nameInput.id = 'title';
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'title');
    nameInput.setAttribute('placeholder', 'Enter name');
    nameInput.setAttribute('autocomplete', 'off');
    nameInput.required = true;
    // append to DOM
    modalDiv.appendChild(projectForm);
    projectForm.appendChild(nameInput);
  })();

  return modalDiv;
}

export default renderProjectFormModal;
