import { toggleAttribute, toggleClass } from '../../common';

export default () => {
  const toggleLink = document.querySelectorAll('.nhsuk-header__has-submenu > a');

  const toggleMenu = (event) => {
    event.preventDefault();
    const thisElem = event.target;
    console.log(thisElem)
    toggleAttribute(thisElem, 'aria-expanded');
    toggleClass(thisElem, 'is-active');
    // toggleClass(nav, 'js-show');
  };

  const addEvents = () => {
    toggleLink.forEach((elem) => {

      elem.addEventListener('click', toggleMenu);
    });
  };

  if (toggleLink) addEvents();
};
