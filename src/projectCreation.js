function renderProjectContainer() {
  // create element
  const projectContainer = document.createElement('div');
  // set attribute
  projectContainer.setAttribute('id', 'project_container');
  projectContainer.setAttribute('data-project-display-container', '');
  projectContainer.classList = 'project_container';
  // IIFE to create header
  const renderModalHeader = (() => {
    // create elements
    const projectHolder = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const projectList = document.createElement('ul');

    // set class, attributes, images
    projectHolder.classList = 'project_header';
    projectHolder.id = 'project_header';
    projectTitle.classList = 'project_title';
    projectTitle.setAttribute('data-project-title', '');
    projectTitle.innerText = 'Projects';
    projectTitle.id = 'project_title';
    projectList.classList = 'project_list';
    projectList.id = 'project_list';
    projectList.setAttribute('data-project', '');

    // append to DOM
    projectContainer.appendChild(projectHolder);
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectList);
  })();

  return projectContainer;
}

export default renderProjectContainer;
