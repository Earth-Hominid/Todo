import DeleteIcon from './images/delete.png';
import renderTaskForm from './taskForm';

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

  const createTaskGUI = (() => {
    const editTaskContentHolder = document.createElement('div');
    editTaskContentHolder.setAttribute('id', 'editor');
    editTaskContentHolder.setAttribute('data-project-edit-holder', 'id');
    mainTaskContentHolder.appendChild(editTaskContentHolder);

    const projectEditor = document.createElement('div');
    projectEditor.classList = 'project_view';
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

    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.setAttribute('aria-label', 'Delete project');
    projectDeleteButton.setAttribute('data-delete-project-button', '');
    projectDeleteButton.classList = 'project_delete_button';
    // append icon to button
    projectDeleteButton.appendChild(deleteIcon);
    headerActionButtonHolder.appendChild(projectDeleteButton);

    const taskListContentHolder = document.createElement('div');
    taskListContentHolder.setAttribute('tabindex', '-1');
    taskListContentHolder.classList = 'task_list_box';
    projectEditor.appendChild(taskListContentHolder);

    const taskListEditor = document.createElement('div');
    taskListEditor.classList = 'task_list_editor';
    taskListContentHolder.appendChild(taskListEditor);

    const taskInputList = document.createElement('ul');
    taskInputList.classList = 'task_input_list';
    taskListEditor.appendChild(taskInputList);

    const taskFormLineContainer = document.createElement('li');
    taskFormLineContainer.classList = 'task_manager';
    taskInputList.appendChild(taskFormLineContainer);

    const taskForm = document.createElement('form');
    taskForm.setAttribute('id', 'task_form');
    taskForm.classList = 'task_form';
    taskFormLineContainer.appendChild(taskForm);

    const taskEditorArea = document.createElement('div');
    taskEditorArea.classList = 'task_editor_area';
    taskForm.appendChild(taskEditorArea);

    const taskEditorInputContainer = document.createElement('div');
    taskEditorInputContainer.classList = 'task_input_container';
    taskEditorArea.appendChild(taskEditorInputContainer);

    const taskContent = document.createElement('div');
    taskContent.classList = 'task_content';
    taskEditorInputContainer.appendChild(taskContent);

    const textHolder = document.createElement('div');
    textHolder.classList = 'text_input';
    taskContent.appendChild(textHolder);

    const textEditor = document.createElement('div');
    textEditor.classList = 'draft';
    textHolder.appendChild(textEditor);

    const textEditorPlaceholder = document.createElement('div');
    textEditorPlaceholder.classList = 'draft_edit';
    textEditor.appendChild(textEditorPlaceholder);

    const textPlaceholder = document.createElement('div');
    textPlaceholder.setAttribute('placeholder', 'e.g., Lane swimming at 7am');
    textPlaceholder.setAttribute('id', 'task_placeholder');
    textPlaceholder.classList = 'task_placeholder';
    textEditorPlaceholder.appendChild(textPlaceholder);

    const draftEditor = document.createElement('div');
    draftEditor.classList = 'draft_editor_container';
    textHolder.appendChild(draftEditor);

    const textBox = document.createElement('div');
    textBox.classList = 'content';
    textBox.setAttribute('contenteditable', 'true');
    textBox.setAttribute('rol', 'textbox');
    textBox.setAttribute('spellcheck', 'true');
    draftEditor.appendChild(textBox);

    const textBoxDataContent = document.createElement('div');
    textBoxDataContent.setAttribute('data-contents', 'true');
    textBox.appendChild(textBoxDataContent);

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.classList = 'task_description';
    taskDescriptionInput.setAttribute('placeholder', 'Description');
    taskEditorInputContainer.appendChild(taskDescriptionInput);
  })();

  return mainTaskContentHolder;
}

export default renderMainTaskContentHolder;
