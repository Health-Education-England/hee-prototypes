# imageCard
Custom component to display an image in a box for the sidebar 

## Nunjucks macro

```
{%- from 'image-card/macro.njk' import imageCard %}

{{ imageCard({
    "imgURL" : "/images/placeholders/dental-region-map.png",
    "imgALT" : "Dental region map",
    "imgCaption" : "Yorkshire and Humber region"
    }) 
}}

```

## Example HTML
<figure class="nhsuk-image--card">
    <img class="nhsuk-image__img" src="{{ basePath }}/images/placeholders/dental-region-map.png" alt="Dental region map" />
    <figcaption class="nhsuk-image__caption">
    Yorkshire and Humber region
    </figcaption>
</figure>


---

### Nunjucks arguments

The sidebarImage macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **imgURL**                 | string   | Yes       | The URL of the image 
| **imgALT**                 | string   | No        | The alternative text of the image
| **imgCaption**             | string   | No        | The caption to be displayed under the image