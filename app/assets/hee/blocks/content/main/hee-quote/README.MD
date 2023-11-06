# Quote

## Guidance

Component allowing editors to insert a specific quote within page content.

### Quick start example

#### HTML markup

```html
<div class="hee-quote">
  <div class="hee-quote__text"> Pellentesque id posuere sapien vestibulum, quam pellentesque at libero. Aliquam at id fames hendrerit in vulputate orci aliquet augue. Massa penatibus sociis et nisl. Enim aliquam mauris suscipit turpis non hendrerit felis. </div>
  <div class="hee-quote__source"> Joe Soap </div>
</div>
```

#### Nunjucks macro

```
{{ quote({
  text: "Pellentesque id posuere sapien vestibulum, quam pellentesque at libero. Aliquam at id fames hendrerit in vulputate orci aliquet augue. Massa penatibus sociis et nisl. Enim aliquam mauris suscipit turpis non hendrerit felis.",
  source: "Joe Soap"
}) }}
```

### Nunjucks arguments

The macro takes the following arguments:

| Name   | Type     | Required | Description   |
|--------|----------|----------|---------------|
| text   | string   | Yes      | Quote text.   |
| source | string   | No       | Quote source. |
