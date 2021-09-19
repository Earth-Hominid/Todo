import renderProjectContainer from './projecCreation';

function renderLeftMenu() {
    // create elements
    const leftMenu = document.createElement('div'); // nav element
    // set attributes, images, and classes
    leftMenu.setAttribute('id', 'left_menu');
    leftMenu.classList = ('left_menu')
    
    const renderListHolder = (() => {
      const listHolder = document.createElement('div')
      listHolder.setAttribute('id', 'list_holder')
      listHolder.setAttribute('role', 'navigation')
      listHolder.setAttribute('aria-label', "Main Navigation: contains Projects")
      leftMenu.appendChild(listHolder)
      leftMenu.appendChild(renderProjectContainer());
    })();

    const renderNewProjectButton = (() => {
      // create elements
      const newProjectButtonDiv = document.createElement('div')
      const newProjectButton = document.createElement('button')
      // Set attributes, class, text
      newProjectButtonDiv.classList = 'new_project_panel'
      newProjectButton.setAttribute('type', 'button')
      newProjectButton.setAttribute('aria-label', 'Add Project')
      newProjectButton.classList = 'add_project'
      newProjectButton.textContent = "New Project"
      newProjectButton.setAttribute('data-modal-target','#modal')
      // Append to the DOM
      leftMenu.appendChild(newProjectButtonDiv)
      newProjectButtonDiv.appendChild(newProjectButton)
    })()

    return leftMenu;
  };


export default renderLeftMenu;