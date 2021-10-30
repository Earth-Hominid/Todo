import DeleteIcon from './images/delete.png';
import SecondDeleteIcon from './images/delete.png';
import RightArrow from './images/right_arrow.png';
import MenuButtonIcon from './images/three_dot_blue_small.png';

function renderMainTaskContentHolder() {
  const deleteIcon = new Image();
  deleteIcon.src = DeleteIcon;
  deleteIcon.classList = 'delete_icon';
  deleteIcon.setAttribute('id', 'delete_icon');
  const secondDeleteIcon = new Image();
  secondDeleteIcon.src = SecondDeleteIcon;
  secondDeleteIcon.classList = 'delete_icon';
  const menuButtonIcon = new Image();
  menuButtonIcon.src = MenuButtonIcon;
  menuButtonIcon.id = 'menu_button';
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

    const tasksRemaining = document.createElement('p');
    tasksRemaining.classList = 'task-count';
    tasksRemaining.setAttribute('data-task-count', '');
    headerActionButtonHolder.appendChild(tasksRemaining);

    const headerActionText = document.createElement('div');
    headerActionText.classList = 'header_action_text';
    headerActionButtonHolder.appendChild(headerActionText);

    const menuButtonHolder = document.createElement('div');
    menuButtonHolder.classList = 'project_button_holder';
    headerActionButtonHolder.appendChild(menuButtonHolder);

    const menuButton = document.createElement('button');
    menuButton.setAttribute('aria-label', 'Project Menu');
    menuButton.classList = 'project_menu_button';
    menuButton.id = 'project_menu_button';

    menuButton.appendChild(menuButtonIcon);
    menuButtonHolder.appendChild(menuButton);

    const menuDropDown = document.createElement('div');
    menuDropDown.classList = 'menu_content';
    menuDropDown.classList.add('hidden');
    menuDropDown.id = 'menu_content';
    menuButtonHolder.appendChild(menuDropDown);

    const menuList = document.createElement('ul');
    menuList.classList = 'project_menu';
    menuList.setAttribute('aria-labelledby', 'menubutton');
    menuList.setAttribute('role', 'menu');
    menuDropDown.appendChild(menuList);

    const menuLineSep = document.createElement('li');
    menuLineSep.classList = 'menu_separator';
    menuLineSep.setAttribute('aria-hidden', 'true');
    menuList.appendChild(menuLineSep);

    const firstMenuLine = document.createElement('li');
    firstMenuLine.classList = 'menu_item';
    firstMenuLine.classList.add('menu_icon');
    firstMenuLine.setAttribute('role', 'menuitem');
    firstMenuLine.setAttribute('tabindex', '0');
    // firstMenuLine.setAttribute('data-delete-project-button', '');
    menuList.appendChild(firstMenuLine);

    const firstLineIconHolder = document.createElement('div');
    firstLineIconHolder.classList = 'menu_icon';
    firstLineIconHolder.appendChild(deleteIcon);
    firstMenuLine.appendChild(firstLineIconHolder);

    const firstLineContent = document.createElement('div');
    firstLineContent.classList = 'menu_item_content';
    firstLineContent.classList.add('menu_text');
    firstLineContent.textContent = 'Delete Completed Tasks';
    firstMenuLine.appendChild(firstLineContent);

    const menuLineSeparator = document.createElement('li');
    menuLineSeparator.classList = 'menu_separator';
    menuLineSeparator.setAttribute('aria-hidden', 'true');
    menuList.appendChild(menuLineSeparator);

    const secondMenuLine = document.createElement('li');
    secondMenuLine.classList = 'menu_item';
    secondMenuLine.classList.add('menu_icon');
    secondMenuLine.setAttribute('data-delete-project-button', '');
    secondMenuLine.setAttribute('role', 'menuitem');
    secondMenuLine.setAttribute('tabindex', '0');
    menuList.appendChild(secondMenuLine);

    const secondLineIconHolder = document.createElement('div');
    secondLineIconHolder.classList = 'menu_icon';
    secondLineIconHolder.appendChild(secondDeleteIcon);
    secondMenuLine.appendChild(secondLineIconHolder);

    const secondLineContent = document.createElement('div');
    secondLineContent.classList = 'menu_item_content';
    secondLineContent.classList.add('menu_text');
    secondLineContent.textContent = 'Delete Project';
    secondMenuLine.appendChild(secondLineContent);

    // const deleteProjectActionHolder = document.createElement('div');
    // deleteProjectActionHolder.classList = 'delete_project';
    // deleteProjectActionHolder.setAttribute('data-delete-project-button', '');
    // headerActionButtonHolder.appendChild(deleteProjectActionHolder);

    // const projectDeleteButton = document.createElement('button');
    // projectDeleteButton.setAttribute('aria-label', 'Delete project');
    // projectDeleteButton.classList = 'project_delete_button';
    // // append icon to button
    // projectDeleteButton.appendChild(deleteIcon);
    // deleteProjectActionHolder.appendChild(projectDeleteButton);

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
    const projectTaskAddButtonLine = document.createElement('li');
    const addTaskButton = document.createElement('button');
    const rightArrow = new Image();
    // const deleteTaskButton = document.createElement('button');

    taskListHolder.classList = 'tasks';
    taskListHolder.setAttribute('data-tasks', '');

    projectTaskAddButtonLine.classList = 'task_actions';
    projectTaskAddButtonLine.id = 'task_actions';
    projectTaskAddButtonLine.setAttribute('data-task-action', '');
    addTaskButton.setAttribute('type', 'button');
    addTaskButton.classList = 'task_add_button';
    addTaskButton.textContent = 'Add task';
    addTaskButton.setAttribute('data-task-target', '');
    rightArrow.src = RightArrow;
    rightArrow.setAttribute('id', 'arrow_icon');

    // deleteTaskButton.classList = 'task_delete_button';
    // deleteTaskButton.textContent = 'Remove completed';
    // deleteTaskButton.setAttribute('data-task-delete', '');

    taskSectionElement.appendChild(taskListHolder);
    taskSectionElement.appendChild(projectTaskAddButtonLine);
    projectTaskAddButtonLine.appendChild(addTaskButton);
    addTaskButton.appendChild(rightArrow);
    // projectTaskAddButtonLine.appendChild(deleteTaskButton);
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
    form.setAttribute('data-new-task-form', '');
    form.setAttribute('action', '');
    taskDetails.classList.add('task-details');
    taskDetailsInputFields.classList = 'task_editor_input_fields';
    nameDiv.classList.add('input-box');
    nameInput.id = 'name';
    nameInput.setAttribute('data-new-task-name-input', '');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute(
      'placeholder',
      'e.g., Sunday dinner, pick up desert 6:00pm'
    );
    nameInput.setAttribute('autocomplete', 'off');
    nameInput.required = true;
    nameInput.setAttribute('aria-label', 'new-task-name');
    descriptionDiv.classList.add('input-box');
    descriptionInput.id = 'description';
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('data-new-task-description-input', '');
    descriptionInput.setAttribute('rows', '4');
    descriptionInput.setAttribute('cols', '50');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('placeholder', 'Description');
    descriptionInput.setAttribute('autocomplete', 'off');
    editor.setAttribute('id', 'task-editor');
    taskEditorExtraField.classList = 'extra-field';
    taskActionFillerDiv.classList = 'extra-field-buttons';
    taskEditorSubmitField.classList = 'task-editor-submit';
    addTaskFormButton.classList = 'add-task';
    addTaskFormButton.textContent = 'Add';
    cancelTaskFormButton.classList = 'cancel-task';
    cancelTaskButtonDiv.setAttribute('id', 'cancel-task');
    cancelTaskFormButton.textContent = 'Cancel';
    priorityDiv.setAttribute('id', 'task-item-action');
    priorityButton.classList.add('item-actions-priority');
    priorityButtonSpan.setAttribute('data-action', 'priority-picker');

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
