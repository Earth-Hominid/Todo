import Clipboard from './images/clipboard.png';

const createLineforProjectList = () => {
  const listElement = document.createElement('li');
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
  // set class, attributes, images
  listElement.classList = 'clickable';
  listElement.setAttribute('data-type', 'project_list_item');
  invisibleSpace.classList = 'invisible_space';
  projectTable.setAttribute('cellpadding', '0');
  projectTable.setAttribute('cellSpacing', '0');
  projectTable.classList = 'item_table';
  dataCellIconHolder.classList = 'td_icon';
  dataCellIconDiv.classList = 'project_icon';
  dataCellProjectTitle.classList = 'cell_project_name';
  spanTitleHolder.classList = 'project_name_left_menu';
  spanTitleHolder.setAttribute('data-project-title-left', '');
  dataCellCounter.classList = 'counter';
  counter.classList = 'counter_count';
  // append
  listElement.appendChild(invisibleSpace);
  listElement.appendChild(projectTable);
  projectTable.appendChild(tableBody);
  tableBody.appendChild(rowOfCells);
  rowOfCells.appendChild(dataCellIconHolder); // first td
  dataCellIconHolder.appendChild(dataCellIconDiv);
  rowOfCells.appendChild(dataCellProjectTitle); // second td
  dataCellProjectTitle.appendChild(spanTitleHolder);
  rowOfCells.appendChild(dataCellCounter); // third td
  dataCellCounter.appendChild(counter);
};

export default createLineforProjectList;
