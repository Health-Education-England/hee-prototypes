# Tabs

## Quick start example

### HTML markup

```html
<div class="nhsuk-tabs">
  <h2 class="nhsuk-tabs__title" id="hee5">HEE Tabs Width With RH</h2>
  <div class="nhsuk-tabs__desktop">
    <div class="nhsuk-tabs__list" role="tablist" aria-label="HEE Tabs Width With RH" data-module="nhsuk-tabs">
      
        
          <button class="nhsuk-tabs__list-item nhsuk-tabs__list-item--selected" role="tab" aria-selected="true" aria-controls="tabsone-panel-1" id="tabsone-tab-1" tabindex="0">
            Tab one
          </button>
        
      
        
          <button class="nhsuk-tabs__list-item" role="tab" aria-selected="false" aria-controls="tabsone-panel-2" id="tabsone-tab-2" tabindex="0">
            Tab two
          </button>
        
      
        
          <button class="nhsuk-tabs__list-item" role="tab" aria-selected="false" aria-controls="tabsone-panel-3" id="tabsone-tab-3" tabindex="0">
            Tab three
          </button>
        
      
    </div>
    
      
        <div class="nhsuk-tabs__panel" id="tabsone-panel-1" role="tabpanel" tabindex="0" aria-labelledby="tabsone-tab-1">
          
              <img src="/images/young-child-using-tablet-device.jpg" alt="">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>        
            
        </div>
      
    
      
        <div class="nhsuk-tabs__panel" id="tabsone-panel-2" role="tabpanel" tabindex="0" aria-labelledby="tabsone-tab-2" hidden="">
          
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>        
            
        </div>
      
    
      
        <div class="nhsuk-tabs__panel" id="tabsone-panel-3" role="tabpanel" tabindex="0" aria-labelledby="tabsone-tab-3" hidden="">
          
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>        
            
        </div>
      
    
  </div>
  <div class="nhsuk-tabs__mobile">
    <div class="nhsuk-tabs__list" role="tablist" aria-label="HEE Tabs Width With RH" data-module="nhsuk-tabs">
      
        
          <button class="nhsuk-tabs__list-item" role="tab" aria-selected="false" aria-controls="tabsone-panel-mobile-1" id="tabsone-tab-mobile-1" tabindex="0">
            Tab one
          </button>
          <div class="nhsuk-tabs__panel" id="tabsone-panel-mobile-1" role="tabpanel" tabindex="0" aria-labelledby="tabsone-tab-mobile-1" hidden="">
            
              <img src="/images/young-child-using-tablet-device.jpg" alt="">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>        
            
          </div>
        
      
        
          <button class="nhsuk-tabs__list-item" role="tab" aria-selected="false" aria-controls="tabsone-panel-mobile-2" id="tabsone-tab-mobile-2" tabindex="0">
            Tab two
          </button>
          <div class="nhsuk-tabs__panel" id="tabsone-panel-mobile-2" role="tabpanel" tabindex="0" aria-labelledby="tabsone-tab-mobile-2" hidden="">
            
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>        
            
          </div>
        
      
        
          <button class="nhsuk-tabs__list-item" role="tab" aria-selected="false" aria-controls="tabsone-panel-mobile-3" id="tabsone-tab-mobile-3" tabindex="0">
            Tab three
          </button>
          <div class="nhsuk-tabs__panel" id="tabsone-panel-mobile-3" role="tabpanel" tabindex="0" aria-labelledby="tabsone-tab-mobile-3" hidden="">
            
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>        
            
          </div>
        
      
    </div>
  </div>
</div>
```

### Nunjucks macro

```html
{% from 'components/tabs/macro.njk' import tabs %}

{% set tabOneContent %}
  <img src="/images/young-child-using-tablet-device.jpg" alt="" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>        
{% endset -%}

{% set tabTwoContent %}
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>        
{% endset -%}

{% set tabThreeContent %}
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>        
{% endset -%}

{{ tabs({
  uniqueId: "tabsone",
  title: "HEE Tabs Width With RH",
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
