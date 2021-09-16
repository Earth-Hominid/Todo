function renderRightMenu() {
  // create elements
  const rightMenu = document.createElement('div'); // nav element
  // set attributes, images, and classes
  rightMenu.setAttribute('id', 'right_menu');
  
  const renderTaskHolder = (() => {
    const taskHolder = document.createElement('div')
    taskHolder.setAttribute('id', 'task_holder')
    taskHolder.setAttribute('role', 'navigation')
    taskHolder.setAttribute('aria-label', "Main Navigation: contains Tasks")
    rightMenu.appendChild(taskHolder)
  })();

  const taskGUI = (() => {
    
  })()

  return rightMenu;
};


export default renderRightMenu;