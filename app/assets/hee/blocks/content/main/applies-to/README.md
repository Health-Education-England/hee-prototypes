# Applies to

## Guidance
Used to describe that a particular piece of content / information only applies to England.

Guidance links for Northern Ireland, Scotland and Wales are displayed thereafter.

## Quick start example

### HTML markup

```html
<div class="hee-appliesto">
    <p>Applies to: <span>England</span>. See guidance for <a href="https://www.nimdta.gov.uk/">Northern Ireland</a>, <a href="https://www.nes.scot.nhs.uk/">Scotland</a> and <a href="https://heiw.nhs.wales/">Wales</a>.</p>
</div>
```

### Nunjucks macro

```html
{{ appliesTo() }}
```