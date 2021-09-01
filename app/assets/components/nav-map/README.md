# Macro fields

**heading** string, title of the map

**src** string, URL of the SVG file

**items** array, each item containing:

*id*: string, must be unique. to be copied into the correct region in the SVG
*url*: string, target URL for the region
*text*: string, link text

Example:
...
{{ navMap({
  "heading": "Higher regions",
  "src": "/images/nav-maps/higher-regions.svg",
  "items": [
    {
      "id": "east",
      "url": "/",
      "text": "East of England"
    },
    {
      "id": "lon",
      "url": "/",
      "text": "London"
    },
    {
      "id": "mid",
      "url": "/",
      "text": "Midlands"
    },
    {
      "id": "ney",
      "url": "/",
      "text": "North East and Yorkshire"
    },
    {
      "id": "nw",
      "url": "/",
      "text": "North West"
    },
    {
      "id": "se",
      "url": "/",
      "text": "South East"
    },
    {
      "id": "sw",
      "url": "/",
      "text": "South West"
    }
  ]
}) }}
...

** Applying the region list to the map

You should have a list of all regions required. As mentioned above, you will need to assign each region an ID, which you will then copy into the map. This mapping must be 1:1 for the component to work correctly.


# Map Preparation

Please ensure the svg file complies with the following rules, or the functionality will not work properly.

'' style

Make  there are only two style for blue and grey and that the colors are correct. The script will add styling for hover and focus.

Ensure the correct classes are applied to the paths.

...
<style type="text/css">
	.st0{fill:#005EB8;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}
	.st1{fill:#425563;}
</style>
...

## body

The body should contain only countries, eg Ireland, Scotland, Wales and England. If you are using a map containing N. Ireland you will need to break Ireland into it's two parts.

These country level groups should contain only one level of groups underneath them in the form of regions. Any paths depicting areas within those regions should be moved to within the correct groups. Any further nested groups **must** be removed for the maps to function properly.

For active regions, add the class *class="nhsuk-region"* and the ID correcsponding to the regions ID in the region list.

If you are not using regions within a country group, you do not need to have any grouping at all.

Example:

<g id="ireland">*paths go here*</g>
<g id="scotland">*paths go here*</g>
<g id="wales">*paths go here*</g>
<g id="england">
	<g id="me" class="nhsuk-region">*paths go here*</g>
	<g id="sw" class="nhsuk-region">*paths go here*</g>
	<g id="tvw" class="nhsuk-region">*paths go here*</g>
	<g id="nw" class="nhsuk-region">*paths go here*</g>
	<g id="lk" class="nhsuk-region">*paths go here*</g>
	<g id="nenc" class="nhsuk-region">*paths go here*</g>
	<g id="yh" class="nhsuk-region">*paths go here*</g>
</g>

See the maps contained in images/nav-maps in this repository if you require further examples, or run this project and inspect the map elements at http://localhost:3000/lks/nav-maps