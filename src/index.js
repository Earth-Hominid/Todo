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

const projectModule = (() => {
  const projectContainer = document.querySelector('[data-pojects]');
  const projectForm = document.querySelector('[data-project-form]');
  const projectInput = document.querySelector('[data-project-input]');

  let projects = [];

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectName = projectForm.value;
    if (projectName == null || projectName == '') return;
    const project = createProject(projectName);
    // clear project input once project name is typed
    projectForm.value = null;
    projects.push(project);
    renderProjectList();
  });

  function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: [] };
  }

  function renderProject() {
    clear(projectContainer);

    projects.forEach((project) => {
      //  create project
      const projectListItem = document.createElement('li');
      // set attributes
      projectListItem.classList.add('project-name');
      projectListItem.dataset.projectId = project.id;
      projectListItem.innerText = project.name;
      // append to the DOM
      projectContainer.appendChild(projectListItem);
    });
  }

  function clear(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  renderProject();
})();

document.querySelector('form').addEventListener('submit', (e) => {
  const formData = new FormData(e.target);
  // Now you can use formData.get('foo'), for example.
  // Don't forget e.preventDefault() if you want to stop normal form .submission
});

const form = document.querySelector('form');
const data = Object.fromEntries(new FormData(form).entries());
console.log(data);
