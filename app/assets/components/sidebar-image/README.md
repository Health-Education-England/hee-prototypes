# sidebarImage
Custom component to display an image in a box for the sidebar 

## Nunjucks macro

```
{%- from 'sidebar-image/macro.njk' import sidebarImage %}

{{ sidebarImage({
    "imgURL" : "/images/placeholders/dental-region-map.png",
    "imgALT" : "Dental region map"
    }) 
}}

```

## Example HTML
<div class="nhsuk-sidebar-image">
    <img class="nhsuk-sidebar-image__img" src="/images/placeholders/dental-region-map.png" alt="Dental region map" />
</div>


---

### Nunjucks arguments

The sidebarImage macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **imgURL**                 | string   | Yes       | The URL of the image 
| **imgALT**                 | string   | No        | The alternative text of the image
