function createTemplate() {
  // create element
  const template = document.createElement('template');

  const templateDiv = document.createElement('div');
  const checkboxButton = document.createElement('input');
  const taskListItemContent = document.createElement('div');
  const taskListItemContentWrapper = document.createElement('div');
  const taskContentTitle = document.createElement('div');
  const taskContentDescription = document.createElement('div');

  // set attributes
  template.setAttribute('id', 'task-template');
  templateDiv.classList = 'task';
  //Checkbox
  checkboxButton.setAttribute('type', 'checkbox');
  checkboxButton.classList.add('task_checkbox_button');
  // Div for description
  taskListItemContent.classList = 'task_list_item_content';
  taskListItemContentWrapper.classList = 'task_list_item_wrapper';
  taskContentTitle.classList = 'task_content_title';
  taskContentDescription.classList = 'task_content_description';

  // append
  template.content.appendChild(templateDiv);
  templateDiv.appendChild(checkboxButton);
  templateDiv.appendChild(taskListItemContent);
  taskListItemContent.appendChild(taskListItemContentWrapper);
  taskListItemContentWrapper.appendChild(taskContentTitle);
  taskListItemContentWrapper.appendChild(taskContentDescription);

  return template;
}

export default createTemplate;
