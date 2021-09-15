import renderNavigation from "./nav";

function renderLeftMenu() {
  // Create an element to  anchor to HTML content div
  const navigation_bar = document.getElementById("nav")
  // Function to generate nav element and its contents
  const createLeftMenu = () => {
    // create elements
    const leftMenu = document.createElement('div'); // nav element
    
    // set attributes, images, and classes
    left_menu.setAttribute('id', 'left_menu');
    left_menu.style.backGroundColor = 'grey'
    left_menu.height = '100%'
    left_menu.width = '20%'

    // append to the DOM
    documentBody.append(leftMenu)

    return leftMenu;
  };
  // append to the DOM
  navigation_bar.append(renderLeftMenu());
}

export default renderLeftMenu;