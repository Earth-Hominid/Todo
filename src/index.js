import './style.css';
import renderNavigation from './nav';
import renderLeftMenu from './leftMenu';
import renderProjectFormModal from './projectFormModal';
import renderOverlay from './overlay';

document.body.appendChild(renderNavigation());
document.body.appendChild(renderLeftMenu());
document.body.appendChild(renderProjectFormModal());
document.body.appendChild(renderOverlay());
