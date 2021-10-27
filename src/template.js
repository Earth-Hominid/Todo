function createTemplate() {
  // create element
  const template = document.createElement('template');
  const templateDiv = document.createElement('div');
  const checkboxButton = document.createElement('input');
  const nameLabel = document.createElement('label');
  const nameSpan = document.createElement('span');

  // set attributes
  template.setAttribute('id', 'task-template');
  templateDiv.classList = 'task';
  checkboxButton.setAttribute('type', 'checkbox');

  checkboxButton.classList.add('task_checkbox_button');
  nameSpan.classList = 'custom-checkbox';

  // append
  template.content.appendChild(templateDiv);
  templateDiv.appendChild(checkboxButton);
  templateDiv.appendChild(nameLabel);
  nameLabel.appendChild(nameSpan);

  return template;
}

export default createTemplate;
