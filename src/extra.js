import Clipboard from './images/clipboard.png';

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
    const projectListElementLine = document.createElement('li');
    const invisibleSpace = document.createElement('div');
    const projectTable = document.createElement('table');
    const tableBody = document.createElement('tbody');
    const rowOfCells = document.createElement('tr');
    const dataCellIconHolder = document.createElement('td');
    const dataCellIconDiv = document.createElement('div');
    const dataCellProjectTitle = document.createElement('td');
    const spanTitleHolder = document.createElement('span');
    const dataCellCounter = document.createElement('td');
    const counter = document.createElement('div');
    const dataCellMenuIcon = document.createElement('td');
    const iconMenu = document.createElement('div');
    const iconImage = new Image();

    // set class, attributes, images
    projectHolder.classList = 'project_header';
    projectHolder.id = 'project_header';
    projectTitle.classList = 'project_title';
    projectTitle.setAttribute('data-project-title', '');
    projectTitle.innerText = 'Projects';
    projectTitle.id = 'project_title';
    projectList.classList = 'project_list';
    projectList.id = 'project_list';
    projectListElementLine.classList = 'clickable';
    projectListElementLine.setAttribute('data-type', 'project_list_item');
    invisibleSpace.classList = 'invisible_space';
    projectTable.setAttribute('cellpadding', '0');
    projectTable.setAttribute('cellSpacing', '0');
    projectTable.classList = 'item_table';
    dataCellIconHolder.classList = 'td_icon';
    dataCellIconDiv.classList = 'project_icon';
    dataCellProjectTitle.classList = 'cell_project_name';
    spanTitleHolder.classList = 'text';
    spanTitleHolder.setAttribute('data-project-title-left', '');
    dataCellCounter.classList = 'counter';
    counter.classList = 'counter_count';
    dataCellMenuIcon.classList = 'menu';
    iconMenu.classList = 'icon_menu';
    iconImage.src = Clipboard;
    iconImage.classList = 'icon_image';

    // append to DOM
    projectContainer.appendChild(projectHolder);
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectList);
    projectList.append(projectListElementLine);
    projectListElementLine.appendChild(invisibleSpace);
    projectListElementLine.appendChild(projectTable);
    projectTable.appendChild(tableBody);
    tableBody.appendChild(rowOfCells);
    rowOfCells.appendChild(dataCellIconHolder); // first td
    dataCellIconHolder.appendChild(dataCellIconDiv);
    dataCellIconDiv.appendChild(iconImage);
    rowOfCells.appendChild(dataCellProjectTitle); // second td
    dataCellProjectTitle.appendChild(spanTitleHolder);
    rowOfCells.appendChild(dataCellCounter); // third td
    dataCellCounter.appendChild(counter);
    rowOfCells.appendChild(dataCellMenuIcon); // fourth td
    dataCellMenuIcon.appendChild(iconMenu);
  })();

  return projectContainer;
}

export default renderProjectContainer;
