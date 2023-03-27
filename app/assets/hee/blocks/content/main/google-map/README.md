# Google Map

## Guidance

This component provides a simple Google Maps embed with an optional title and description content below.

It requires iframe embed code, taken from the Google Maps "share" button feature for a particular address. 

## Quick start example

#### HTML markup

```html
<div class="hee-google-map">
  <div class="hee-google-map__wrapper">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38876.46420375777!2d-1.945322588878691!3d52.48313681174725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bdaa5d4e3383%3A0xc9d525245d0b1f47!2sHealth%20Education%20England!5e0!3m2!1sen!2suk!4v1669730967510!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <figcaption class="hee-google-map__caption">
    <h3>Location</h3> HEE Yorkshire and the Humber, Dental Street, Yorkshire, YA1 1AA.
  </figcaption>
</div>
```

#### Nunjucks macro

```
{{ googleMap({
  embedCode: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38876.46420375777!2d-1.945322588878691!3d52.48313681174725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bdaa5d4e3383%3A0xc9d525245d0b1f47!2sHealth%20Education%20England!5e0!3m2!1sen!2suk!4v1669730967510!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  title: "Location",
  caption: "23 Stephenson St, Birmingham B2 4BJ, UK"
}) }}
```

### Nunjucks arguments

The macro takes the following arguments:

| Name         | Type     | Required | Description                            |
|--------------|----------|----------|----------------------------------------|
| embedCode    | string   | Yes      | Embed code taken from Google Maps.     |
| title        | string   | No       | Title heading displayed above caption. |
| caption      | string   | No       | Caption text displayed below map.      |
