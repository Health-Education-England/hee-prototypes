/**
 * Javascript assets for standalone global menu widget.
 **/
import GlobalMenu from '../global-menu';

const getRemoteComponentMarkup = async () => {
  try {
    let response = await fetch('https://health-education-england.github.io/hee-prototypes/widgets/global-menu/component.html');

    if (!response.ok) {
      throw new Error('Non 200 request code received: ' + response.status);
    }

    return response.text();

  } catch (err) {
    console.log('Error retrieving NHSE menu component: ' + err);
  }
};

const createMenuElement = (html) => {
  let menu = document.createElement('template');
  menu.innerHTML = html;
  return menu.content;
};

document.addEventListener('DOMContentLoaded', () => {
  let menuContainer = document.getElementById('nhse-global-menu');

  if (menuContainer === null) {
    throw new Error('#nhse-global-menu container element does not exists, cannot initialise menu.')
  }

  // Async call to retrieve component markup remotely.
  getRemoteComponentMarkup().then((html) => {
    if (html === null) {
      throw new Error('Could not retrieve remote component markup.');
    }

    // Replace menuContainer with remote component markup.
    const remoteMenu = createMenuElement(html);
    menuContainer.replaceWith(remoteMenu);

    // Initialise javascript behaviour.
    GlobalMenu();
  });
});
