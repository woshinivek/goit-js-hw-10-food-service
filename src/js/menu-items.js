import '../css/styles.css';
import menuItems from '../menu.json';
import menuItemsTpl from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = menuItemsTpl(menuItems);
menuRef.insertAdjacentHTML('beforeend', markup);
