import './style.css';
import renderNavigation from './nav';
import renderLeftMenu from './leftMenu';
import renderProjectFormModal from './projectFormModal';
import renderOverlay from './overlay';

document.body.appendChild(renderNavigation());
document.body.appendChild(renderLeftMenu());
document.body.appendChild(renderProjectFormModal());
document.body.appendChild(renderOverlay());

const projectForm = (() => {
  const openProjectButton = document.querySelectorAll('[data-modal-target]');
  const closeProjectButton = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');
  const addProjectButton = document.getElementById('add_project');

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

const addProjectLogicModule = (() => {
  const projectList = document.querySelector('[data-project-list]');
  const newProjectForm = document.querySelector('[data-project-form]');
  const newProjectInput = document.querySelector('[data-project-input]');
  const addProjectButton = document.getElementById('add_project');

  let projects = [
    { id: 1, name: 'example1' },
    { id: 2, name: 'example2' },
  ];

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

  const renderProjectName = () => {
    clearElement(projectList);
    projects.forEach((project) => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-name');
      listElement.dataset.projectId = project.id;
      listElement.innerText = project.name;
      projectList.appendChild(listElement);
    });
  };

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  renderProjectName();
})();
