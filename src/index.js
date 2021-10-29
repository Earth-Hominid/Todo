import './style.css';
import renderNavigation from './nav';
import renderLeftMenu from './leftMenu';
import renderOverlay from './overlay';
import renderMainTaskContentHolder from './mainContent';
import renderProjectFormModal from './projectFormModal';
import createTemplate from './template';

// IIFE which renders the initial page
const renderInitialpage = (() => {
  document.body.appendChild(renderNavigation());
  document.body.appendChild(renderLeftMenu());
  document.body.appendChild(renderMainTaskContentHolder());
  document.body.appendChild(renderProjectFormModal());
  document.body.appendChild(renderOverlay());
  document.body.appendChild(createTemplate());
})();

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
  // Project Elements
  const projectList = document.querySelector('[data-project]');
  const newProjectForm = document.querySelector('[data-project-form]');
  const newProjectInput = document.querySelector('[data-project-input]');
  const addProjectButton = document.getElementById('add_project');
  const projectEditContainer = document.querySelector(
    '[data-project-edit-holder]'
  );
  const projectNameElement = document.querySelector('[data-project-name]');
  const projectNameContent = document.getElementById('project-name-content');
  // name spacing to prevent overwriting
  const LOCAL_STORAGE_PROJECT_KEY = 'task.projects';
  // returns null if nothing is selected
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId';
  const deleteProjectButton = document.querySelector(
    '[data-delete-project-button]'
  );
  let projects =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
  let selectedProjectId = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
  );

  // Task Elements
  const taskCountElement = document.querySelector('[data-task-count]');
  const tasksContainer = document.querySelector('[data-tasks]');
  const taskTemplate = document.getElementById('task-template');
  const newTaskForm = document.querySelector('[data-new-task-form]');

  const newTaskNameInput = document.querySelector('[data-new-task-name-input]');
  const newTaskDescriptionInput = document.getElementById('description');

  const addTaskRevealButton = document.querySelector('[data-task-target]');
  const formContainer = document.getElementById('form-container');
  const taskAction = document.getElementById('task_actions');
  const cancelButton = document.getElementById('cancel-task');

  // Project Logic

  // add event listener to a dynamically generated element by adding it to the div container, thus, hitting all of the list items.
  projectList.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedProjectId = e.target.dataset.projectId;
      saveAndRenderProject();
    }
  });

  const deleteProjectAlert = () => {
    if (
      confirm(
        `Are you sure you want to delete the ${projectNameContent.innerText} project`
      )
    ) {
      projects = projects.filter((project) => project.id !== selectedProjectId);
      selectedProjectId = null;
      saveAndRenderProject();
      hideFormAndShowAddTaskButton();
    } else {
      return;
    }
  };

  deleteProjectButton.addEventListener('click', deleteProjectAlert);

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
    saveAndRenderProject();
  });

  addProjectButton.addEventListener('click', (e) => {
    e.preventDefault();
    setProjectName();
    renderProjectName();
  });

  function createProject(name) {
    return {
      id: Date.now().toString(),
      name: name,
      tasks: [],
    };
  }

  function createTask(name, description) {
    return {
      id: Date.now().toString(),
      name: name,
      description: description,
      complete: false,
    };
  }

  function save() {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
    localStorage.setItem(
      LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
      selectedProjectId
    );
  }

  const renderProjects = () => {
    projects.forEach((project) => {
      const projectElement = document.createElement('li');
      projectElement.classList.add('list-name');
      projectElement.dataset.projectId = project.id;
      projectElement.innerText = project.name;
      if (project.id === selectedProjectId)
        projectElement.classList.add('active-project');
      projectList.appendChild(projectElement);
    });
  };

  // Clear the project list and render / re-render the project names.
  const renderProjectName = () => {
    removeElement(projectList);
    renderProjects();

    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    return selectedProjectId == null
      ? (projectEditContainer.style.display = 'none')
      : ((projectEditContainer.style.display = ''),
        (projectNameElement.innerText = selectedProject.name),
        removeElement(tasksContainer),
        renderTasks(selectedProject));
  };

  const saveAndRenderProject = () => {
    save();
    renderProjectName();
  };

  function removeElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  // Task Logic

  tasksContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') {
      const selectedProject = projects.find(
        (project) => project.id === selectedProjectId
      );
      const selectedTask = selectedProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.complete = e.target.checked;
      save();
      // renderTaskCount(selectedProject);
      removeElement(tasksContainer);
      renderTasks(selectedProject);
    }
  });

  function setTaskName() {
    const taskName = newTaskNameInput.value;
    const taskDescription = newTaskDescriptionInput.value;
    if (
      taskName == null ||
      taskName === '' ||
      taskDescription == null ||
      taskDescription === ''
    )
      return;
    const task = createTask(taskName, taskDescription);
    console.log(task);
    newTaskNameInput.value = null;
    newTaskDescriptionInput.value = null;
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    selectedProject.tasks.push(task);
    console.log(selectedProject.tasks);
  }

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setTaskName();
    saveAndRenderProject();
  });

  function renderTasks(selectedProject) {
    selectedProject.tasks.forEach((task) => {
      const taskElement = document.importNode(taskTemplate.content, true);
      const checkbox = taskElement.querySelector('.task_checkbox_button');
      checkbox.id = task.id;
      checkbox.checked = task.complete;
      const taskItemWrapper = taskElement.querySelector(
        '.task_list_item_wrapper'
      );
      const taskTitle = taskElement.querySelector('.task_content_title');
      const taskDescription = taskElement.querySelector(
        '.task_content_description'
      );
      taskItemWrapper.htmlFor = task.id;
      taskTitle.innerText = task.name;
      taskDescription.innerText = task.description;
      tasksContainer.appendChild(taskElement);
    });
  }

  const showFormAndHideAddTaskButton = () => {
    formContainer.style.display = 'block';
    formContainer.scrollIntoView();
    taskAction.style.display = 'none';
  };

  const hideFormAndShowAddTaskButton = () => {
    formContainer.style.display = 'none';
    taskAction.style.display = 'block';
  };

  addTaskRevealButton.addEventListener('click', showFormAndHideAddTaskButton);
  cancelButton.addEventListener('click', hideFormAndShowAddTaskButton);

  //taskAction.classList.add('active-task');

  renderProjectName();
})();
