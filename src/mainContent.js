import DeleteIcon from './images/delete.png';

function renderMainTaskContentHolder() {
  const deleteIcon = new Image();
  deleteIcon.src = DeleteIcon;
  deleteIcon.setAttribute('id', 'delete_icon');
  const mainTaskContentHolder = document.createElement('main');
  mainTaskContentHolder.classList = 'main_content';
  mainTaskContentHolder.setAttribute('id', 'content');
  mainTaskContentHolder.setAttribute('tabindex', '-1');
  mainTaskContentHolder.setAttribute('role', 'navigation');
  mainTaskContentHolder.setAttribute(
    'aria-label',
    'Main Navigation: contains Tasks'
  );

  const createProjectTaskArea = (() => {
    const editTaskContentHolder = document.createElement('div');
    editTaskContentHolder.setAttribute('id', 'editor');
    editTaskContentHolder.setAttribute('data-project-edit-holder', '');
    mainTaskContentHolder.appendChild(editTaskContentHolder);

    const projectEditor = document.createElement('div');
    projectEditor.classList = 'project_view';
    projectEditor.setAttribute('id', 'project_view');
    editTaskContentHolder.appendChild(projectEditor);

    const projectHeader = document.createElement('header');
    projectHeader.classList = 'project_view_header';
    projectEditor.appendChild(projectHeader);

    const projectHeaderViewContent = document.createElement('div');
    projectHeaderViewContent.classList = 'header_content';
    projectHeader.appendChild(projectHeaderViewContent);

    const header = document.createElement('h1');
    header.classList = 'project_name_content';
    header.setAttribute('id', 'project-name-content');
    header.setAttribute('data-project-name', '');
    header.setAttribute('tabindex', '0');
    projectHeaderViewContent.appendChild(header);

    const headerActionButtonHolder = document.createElement('div');
    headerActionButtonHolder.classList = 'header_actions';
    projectHeaderViewContent.appendChild(headerActionButtonHolder);

    const deleteProjectActionHolder = document.createElement('div');
    deleteProjectActionHolder.classList = 'delete_project';
    deleteProjectActionHolder.setAttribute('data-delete-project-button', '');
    headerActionButtonHolder.appendChild(deleteProjectActionHolder);

    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.setAttribute('aria-label', 'Delete project');
    projectDeleteButton.classList = 'project_delete_button';
    // append icon to button
    projectDeleteButton.appendChild(deleteIcon);
    deleteProjectActionHolder.appendChild(projectDeleteButton);

    const headerActionText = document.createElement('div');
    headerActionText.classList = 'header_action_text';
    headerActionText.textContent = 'Delete project';
    deleteProjectActionHolder.appendChild(headerActionText);

    const taskListBox = document.createElement('div');
    const listViewEditor = document.createElement('div');
    const taskAreaList = document.createElement('ul');
    const taskLineElement = document.createElement('li');
    const taskSectionElement = document.createElement('section');

    taskListBox.setAttribute('id', 'listbox');
    listViewEditor.classList = 'list_editor';
    taskAreaList.classList = 'section_list';
    taskSectionElement.classList = 'task_section';
    taskLineElement.classList = 'task_line_element';

    projectEditor.appendChild(taskListBox); // appending add task area
    taskListBox.appendChild(listViewEditor);
    listViewEditor.appendChild(taskAreaList);
    taskAreaList.appendChild(taskLineElement);
    taskLineElement.appendChild(taskSectionElement);

    const taskListHolder = document.createElement('div');
    const projectTaskList = document.createElement('ul');
    const projectTaskListLine = document.createElement('li');
    const projectTaskAddButtonLine = document.createElement('li');
    const taskListItemBody = document.createElement('div');
    const taskCheckBox = document.createElement('button');

    const taskListItemContent = document.createElement('div');
    const taskListItemContentWrapper = document.createElement('div');
    const taskContentTitle = document.createElement('div');
    const taskContentDescription = document.createElement('div');

    taskListItemContent.classList = 'task_list_item_content';
    taskListItemContentWrapper.classList = 'task_list_item_wrapper';
    taskContentTitle.classList = 'task_content_title';
    taskContentTitle.innerText = 'This is a task';
    taskContentDescription.classList = 'task_content_description';
    taskContentDescription.innerText = 'This is a description';

    const addTaskButton = document.createElement('button');

    taskListHolder.classList = 'task_list_holder';
    projectTaskList.classList = 'task_items';

    projectTaskListLine.classList = 'items';
    projectTaskListLine.setAttribute('data-task-item', '');

    taskListItemBody.classList = 'task_list_item_body';
    taskListItemBody.setAttribute('role', 'button');
    taskListItemBody.setAttribute('tabindex', '0');

    taskCheckBox.setAttribute('type', 'button');
    taskCheckBox.setAttribute('role', 'checkbox');
    taskCheckBox.setAttribute('aria-label', 'Mark task complete');
    taskCheckBox.classList = 'task_checkbox_button';
    taskCheckBox.setAttribute('tabindex', '0');
    projectTaskAddButtonLine.classList = 'task_actions';
    addTaskButton.setAttribute('type', 'button');
    addTaskButton.classList = 'task_add_button';
    addTaskButton.textContent = 'Add task';
    addTaskButton.setAttribute('data-task-target', '#task');

    taskSectionElement.appendChild(taskListHolder);
    taskListHolder.appendChild(projectTaskList);
    projectTaskList.appendChild(projectTaskListLine);
    projectTaskList.appendChild(projectTaskAddButtonLine);
    projectTaskListLine.appendChild(taskListItemBody);
    taskListItemBody.appendChild(taskCheckBox); // can add cirlce to append here
    taskListItemBody.appendChild(taskListItemContent);
    taskListItemContent.appendChild(taskListItemContentWrapper);
    taskListItemContentWrapper.appendChild(taskContentTitle);
    taskListItemContentWrapper.appendChild(taskContentDescription);

    projectTaskAddButtonLine.appendChild(addTaskButton);
  })();

  const createForm = (() => {
    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    // formContainer.setAttribute('style', 'display:none');
    mainTaskContentHolder.appendChild(formContainer);

    const content = document.createElement('div');
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
      'e.g., Sunday dinner, pick up desert 6:00pm'
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
  return mainTaskContentHolder;
}

export default renderMainTaskContentHolder;
