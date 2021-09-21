function renderMainTaskContentHolder() {
  // create elements
  const mainTaskContentHolder = document.createElement('main');
  // set attributes, images, and classes
  mainTaskContentHolder.classList = 'main_content';
  mainTaskContentHolder.setAttribute('id', 'content');
  mainTaskContentHolder.setAttribute('tabindex', '-1');
  mainTaskContentHolder.setAttribute('role', 'navigation');
  mainTaskContentHolder.setAttribute(
    'aria-label',
    'Main Navigation: contains Tasks'
  );

  const rendermainTaskContentHolder = (() => {
    mainTaskContentHolder.appendChild();
  })();

  const taskGUI = (() => {})();

  return mainTaskContentHolder;
}

export default renderMainTaskContentHolder;
