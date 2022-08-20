import Logo from './images/logo.png';

// Function which creates the very top navigation bar.
function renderNavigation() {
  // create elements
  const nav = document.createElement('NAV'); // nav element
  const logo = new Image(); // logo
  const navBar = document.createElement('div'); // a div within nav to hold icons

  // set attributes, images, and classes
  nav.setAttribute('id', 'nav');
  logo.src = Logo;
  logo.setAttribute('id', 'logo');
  logo.setAttribute('alt', 'todo logo');
  navBar.classList.add('nav-bar');

  // append to the DOM
  nav.appendChild(logo);
  nav.appendChild(navBar);

  return nav;
}

export default renderNavigation;
