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

  const createProjectHeader = (() => {
    const editTaskContentHolder = document.createElement('div');
    editTaskContentHolder.setAttribute('id', 'editor');
    editTaskContentHolder.setAttribute('data-project-edit-holder', '');
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
  })();

  /* const createAddTaskButtonArea = (() => {

    const editTaskContentHolder = document.createElement('div');
    const projectEditor = document.createElement('div');
    const projectHeader = document.createElement('header');
    const projectHeaderViewContent = document.createElement('div');
    const header = document.createElement('h1');
    const headerActionButtonHolder = document.createElement('div');
    const projectDeleteButton = document.createElement('button');

    editTaskContentHolder.setAttribute('id', 'editor');
    editTaskContentHolder.setAttribute('data-project-edit-holder', 'id');
    projectEditor.classList = 'project_view';
    editTaskContentHolder.appendChild(projectEditor);
    projectHeader.classList = 'project_view_header';
    projectHeaderViewContent.classList = 'header_content';
    header.classList = 'project_name_content';
    header.setAttribute('id', 'project-name-content');
    header.setAttribute('data-project-name', '');
    header.setAttribute('tabindex', '0');
    headerActionButtonHolder.classList = 'header_actions';
    projectDeleteButton.setAttribute('aria-label', 'Delete project');
    projectDeleteButton.setAttribute('data-delete-project-button', '');
    projectDeleteButton.classList = 'project_delete_button';
    
    mainTaskContentHolder.appendChild(editTaskContentHolder);
    projectEditor.appendChild(projectHeader);
    projectHeader.appendChild(projectHeaderViewContent);
    projectHeaderViewContent.appendChild(header);
    projectHeaderViewContent.appendChild(headerActionButtonHolder);
    projectDeleteButton.appendChild(deleteIcon);
    headerActionButtonHolder.appendChild(projectDeleteButton);
  })(); */

  return mainTaskContentHolder;
}

export default renderMainTaskContentHolder;
