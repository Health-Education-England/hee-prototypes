# Tabs

## Quick start example

### HTML markup

```html
<div class="nhsuk-tabs">
    <h2 class="nhsuk-tabs__title">HEE Tabs Full Width</h2>
    <div class="nhsuk-tabs__list" role="tablist" aria-label="HEE Tabs Full Width" data-module="nhsuk-tabs">
        <button class="nhsuk-tabs__list-item nhsuk-tabs__list-item--selected" role="tab" aria-selected="true"
            aria-controls="tabstwo-panel-1" id="tabstwo-tab-1" tabindex="0">
            Tab one
        </button>
        <button class="nhsuk-tabs__list-item" role="tab" aria-selected="false" aria-controls="tabstwo-panel-2"
            id="tabstwo-tab-2" tabindex="0">
            Tab two
        </button>
        <button class="nhsuk-tabs__list-item" role="tab" aria-selected="false" aria-controls="tabstwo-panel-3"
            id="tabstwo-tab-3" tabindex="0">
            Tab three
        </button>
    </div>
    <div class="nhsuk-tabs__panel" id="tabstwo-panel-1" role="tabpanel" tabindex="0" aria-labelledby="tabstwo-tab-1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
    </div>
    <div class="nhsuk-tabs__panel" id="tabstwo-panel-2" role="tabpanel" tabindex="0" aria-labelledby="tabstwo-tab-2"
        hidden="">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.</p>
    </div>
    <div class="nhsuk-tabs__panel" id="tabstwo-panel-3" role="tabpanel" tabindex="0" aria-labelledby="tabstwo-tab-3"
        hidden="">
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>
</div>
```

### Nunjucks macro

```html
{% from 'components/tabs/macro.njk' import tabs %}

{% set tabOneContent %}
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>        
{% endset -%}

{% set tabTwoContent %}
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>        
{% endset -%}

{% set tabThreeContent %}
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>        
{% endset -%}

{{ tabs({
  uniqueId: "tabstwo",
  title: "HEE Tabs Full Width",
  items: [
    {
      label: "Tab one",
      panel: {
        html: tabOneContent
      }
    },
    {
      label: "Tab two",
      panel: {
        html: tabTwoContent
      }
    },
    {
      label: "Tab three",
      panel: {
        html: tabThreeContent
      }
    }
  ]
}) }}
```

## Nunjucks arguments

The tabs Nunjucks macro takes the following arguments:

| Name           | Type     | Required  | Description  |
| -----------------------|------------|-----------|--------------|
| **uniqueId** | string | No | This is made available to allow multiple tab components to exist on a page |
| **title** | string | No | Title for the tabs table of contents |
| **items** | array | Yes | Array of tab items. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
