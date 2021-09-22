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
    taskListEditor.setAttribute('data-tasks', '');
    taskListContentHolder.appendChild(taskListEditor);
  })();

  return mainTaskContentHolder;
}

export default renderMainTaskContentHolder;
