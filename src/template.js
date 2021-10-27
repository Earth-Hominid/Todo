function createTemplate() {
  // create element
  const template = document.createElement('template');
  const templateDiv = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const span = document.createElement('span');
  // set attributes
  template.setAttribute('id', 'task-template');
  templateDiv.classList = 'task';
  input.setAttribute('type', 'checkbox');
  span.classList = 'custom-checkbox';

  // append
  template.content.appendChild(templateDiv);
  templateDiv.appendChild(input);
  templateDiv.appendChild(label);
  label.appendChild(span);

  return template;
}

export default createTemplate;
