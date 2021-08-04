# LKS-Header

Includes all functionality of the NHS header, refer to that documentation for more deatail on setting up the header with logo, search options etc.

To add a submenu, simply add a "children" object to the normal header template, like so:

{{ lksHeader({
    "showNav": "true",
    "showSearch": "true",
    "organisation": {
      "name": "Health Education England",
      "descriptor": "Library and Knowledge Services"
    },
    "primaryLinks": [
      {
        "url": "/",
        "label": "Item with children",
        "children": [
          {
            "url": "/",
            "label": "Lorem"
          },
          {
            "url": "/",
            "label": "Ipsum"
          },
          {
            "url": "/",
            "label": "Dolor Set"
          },
          {
            "url": "/",
            "label": "Amet"
          }
        ]
      },
      {
        "url": "/",
        "label": "Single Item"
      },
    ]
  })
}}

The macro will shuffle the URL down into the submenu automatically.

HTML example:

<nav class="nhsuk-header__navigation js-show" id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation">
      <div class="nhsuk-width-container">
        <p class="nhsuk-header__navigation-title"><span id="label-navigation">Menu</span>
          <button class="nhsuk-header__navigation-close" id="close-menu">
            <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
            </svg>
            <span class="nhsuk-u-visually-hidden">Close menu</span>
          </button>
        </p>
        <ul class="nhsuk-header__navigation-list">
          <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
            <a class="nhsuk-header__navigation-link" href="/">
              Home
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item nhsuk-subheader" aria-haspopup="true" aria-expanded="false">
            <a class="nhsuk-header__navigation-link" href="#">
              <span class="nhsuk-header__link-text">COVID-19</span>
              <span class="nhsuk-header__back-text">Back</span>
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
              <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
              </svg>
            </a>
            <ul class="nhsuk-subheader__list">
              <li class="nhsuk-subheader-item">
                <a class="nhsuk-subheader-link" href="/landing">
                  COVID-19
                </a>
              </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Lorem
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Ipsum
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Dolor Set
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Amet
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
            </ul>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link" href="/landing">
              Learning and development
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link" href="/landing">
              Mobilising knowledge
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item nhsuk-subheader" aria-haspopup="true" aria-expanded="false">
            <a class="nhsuk-header__navigation-link" href="#">
              <span class="nhsuk-header__link-text">Patient information</span>
              <span class="nhsuk-header__back-text">Back</span>
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
              <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
              </svg>
            </a>
            <ul class="nhsuk-subheader__list">
              <li class="nhsuk-subheader-item">
                <a class="nhsuk-subheader-link" href="/landing">
                  Patient information
                </a>
              </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Lorem
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Ipsum
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Dolor Set
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Amet
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
            </ul>
          </li>
          <li class="nhsuk-header__navigation-item nhsuk-subheader" aria-haspopup="true" aria-expanded="false">
            <a class="nhsuk-header__navigation-link" href="#">
              <span class="nhsuk-header__link-text">Resource discovery</span>
              <span class="nhsuk-header__back-text">Back</span>
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
              <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
              </svg>
            </a>
            <ul class="nhsuk-subheader__list">
              <li class="nhsuk-subheader-item">
                <a class="nhsuk-subheader-link" href="/landing">
                  Resource discovery
                </a>
              </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Lorem
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Ipsum
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Dolor Set
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Amet
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
            </ul>
          </li>
          <li class="nhsuk-header__navigation-item nhsuk-subheader" aria-haspopup="true" aria-expanded="false">
            <a class="nhsuk-header__navigation-link" href="#">
              <span class="nhsuk-header__link-text">About</span>
              <span class="nhsuk-header__back-text">Back</span>
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
              <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
              </svg>
            </a>
            <ul class="nhsuk-subheader__list">
              <li class="nhsuk-subheader-item">
                <a class="nhsuk-subheader-link" href="/landing">
                  About
                </a>
              </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Lorem
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Ipsum
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Dolor Set
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
                <li class="nhsuk-subheader-item">
                  <a class="nhsuk-subheader-link" href="/">
                    Amet
                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                    </svg>
                  </a>
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

