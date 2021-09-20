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

  function working() {
    const projectList = document.getElementById('project_list');
    const projectInput = document.getElementById('project_title_input');

    // dynamically create project title which appends to project div
    const createProjectTitle = document.createElement('li');
    createProjectTitle.setAttribute('id', projectInput.value);
    createProjectTitle.textContent = projectInput.value;
    projectList.appendChild(createProjectTitle);
  }

  addProjectButton.addEventListener('click', working);

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

// const addProjectLogicModule = (() => {
const addProjectButton = document.getElementById('add_project');

function addProject() {
  const projectList = document.getElementById('project_list');
  const projectInput = document.getElementById('project_title_input');

  // dynamically create project title which appends to project div
  const createProjectTitle = document.createElement('li');
  createProjectTitle.setAttribute('id', projectInput.value);
  createProjectTitle.textContent = projectInput.value;
  projectList.appendChild(createProjectTitle);
}

function working() {
  console.log('working');
}

addProjectButton.addEventListener('onclick', working);
// })();
