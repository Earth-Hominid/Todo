function renderLeftMenu() {
    // create elements
    const leftMenu = document.createElement('div'); // nav element
    // set attributes, images, and classes
    leftMenu.setAttribute('id', 'left_menu');
    
    const renderListHolder = (() => {
      const listHolder = document.createElement('div')
      listHolder.setAttribute('id', 'list_holder')
      listHolder.setAttribute('role', 'navigation')
      listHolder.setAttribute('aria-label', "Main Navigation: contains Projects")
      leftMenu.appendChild(listHolder)
    })();

    const taskGUI = () => {
      
    }

    return leftMenu;
  };


export default renderLeftMenu;