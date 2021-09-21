import './style.css';
import renderNavigation from './nav';
import renderLeftMenu from './leftMenu';
import renderProjectFormModal from './projectFormModal';
import renderOverlay from './overlay';
import renderMainTaskContentHolder from './mainContent';

document.body.appendChild(renderNavigation());
document.body.appendChild(renderLeftMenu());
document.body.appendChild(renderMainTaskContentHolder());
document.body.appendChild(renderProjectFormModal());
document.body.appendChild(renderOverlay());

// IIFE which generates a form modal popup when the add project button is clicked
const projectForm = (() => {
  const openProjectButton = document.querySelectorAll('[data-modal-target]');
  const closeProjectButton = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openProjectButton.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeProjectButton.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
})();

// IIFE which handles the logic when a new project name is entered by the user
const addProjectLogicModule = (() => {
  const projectList = document.querySelector('[data-project-list]');
  const newProjectForm = document.querySelector('[data-project-form]');
  const newProjectInput = document.querySelector('[data-project-input]');
  const addProjectButton = document.getElementById('add_project');
  const LOCAL_STORAGE_PROJECT_KEY = 'task.projects'; // name spacing to prevent overwriting
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId'; // returns null if nothing is selected

  let projects =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
  let selectedProjectId = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
  );

  // add event listener to a dynamically generated element by adding it to the div container, thus, hitting all of the list items.
  projectList.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedProjectId = e.target.dataset.projectId;
      saveAndRenderProject();
    }
  });

  function setProjectName() {
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === '') return;
    const project = createProject(projectName);
    newProjectInput.value = null;
    projects.push(project);
  }

  newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setProjectName();
    renderProjectName();
  });

  addProjectButton.addEventListener('click', (e) => {
    e.preventDefault();
    setProjectName();
    renderProjectName();
  });

  function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: [] };
  }

  const saveProject = () => {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
    localStorage.setItem(
      LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
      selectedProjectId
    );
  };

  // Function first clears project list and then renders.
  const renderProjectName = () => {
    clearElement(projectList);
    projects.forEach((project) => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-name');
      listElement.dataset.projectId = project.id;
      listElement.innerText = project.name;
      if (project.id === selectedProjectId)
        listElement.classList.add('active-project');
      projectList.appendChild(listElement);
    });
  };

  const saveAndRenderProject = () => {
    saveProject();
    renderProjectName();
  };

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  renderProjectName();
})();
