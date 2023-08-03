# Media embed

## Guidance

This component provides a media embed from providers YouTube, Vimeo and Spotify / Anchor FM. Content editors are
able to provide transcript text, as well as last reviewed dates to accompany the media embed.

## Quick start example

#### HTML markup (Youtube)

```html
<div class="hee-media">
    <h2>Pellentesque sit amet nulla</h2>
    <div class="hee-media__description">
        <p>Fusce at neque laoreet mauris consectetur mollis at a nisl. Curabitur sit amet sapien rhoncus.</p>
    </div>
    <iframe class="youtube" src="https://youtube.com/embed/C0DPdy98e4c" title="Pellentesque sit amet nulla" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"></iframe>
    <div class="hee-media__info">
        <div class="hee-media__transcript">
            <a href="javascript:void(0);">
                <span class="hee-media__show-text">Show transcript</span>
                <span class="hee-media__hide-text">Hide transcript</span>
            </a>
            <div class="hee-media__transcript-text">
                <p>Donec pulvinar sollicitudin massa, nec pulvinar turpis dictum maximus.</p>
            </div>
        </div>
        <div class="hee-media__reviews">
            <p> Page last reviewed: 09/05/2022 </p>
            <p> Next review due: 09/05/2023 </p>
        </div>
    </div>
</div>
```

#### Nunjucks macro (Youtube)

```
{{ media({
    title: "Pellentesque sit amet nulla",
    description: "Fusce at neque laoreet mauris consectetur mollis at a nisl. Curabitur sit amet sapien rhoncus.",
    type: "youtube",
    transcript: ["Donec pulvinar sollicitudin massa, nec pulvinar turpis dictum maximus."],
    mediaId: "C0DPdy98e4c",
    lastReview: "09/05/2022",
    reviewDue: "09/05/2023"
}) }}
```

#### HTML markup (Vimeo)

```html
<div class="hee-media">
    <h2>Pellentesque sit amet nulla</h2>
    <div class="hee-media__description">
        <p>Fusce at neque laoreet mauris consectetur mollis at a nisl. Curabitur sit amet sapien rhoncus.</p>
    </div>
    <iframe class="vimeo" src="https://player.vimeo.com/video/226053498" title="Pellentesque sit amet nulla" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"></iframe>
    <div class="hee-media__info">
        <div class="hee-media__transcript">
            <a href="javascript:void(0);">
                <span class="hee-media__show-text">Show transcript</span>
                <span class="hee-media__hide-text">Hide transcript</span>
            </a>
            <div class="hee-media__transcript-text">
                <p>Donec pulvinar sollicitudin massa, nec pulvinar turpis dictum maximus.</p>
            </div>
        </div>
        <div class="hee-media__reviews">
            <p> Page last reviewed: 09/05/2022 </p>
            <p> Next review due: 09/05/2023 </p>
        </div>
    </div>
</div>
```

#### Nunjucks macro (Vimeo)

```
{{ media({
    title: "Pellentesque sit amet nulla",
    description: "Fusce at neque laoreet mauris consectetur mollis at a nisl. Curabitur sit amet sapien rhoncus.",
    type: "vimeo",
    transcript: ["Donec pulvinar sollicitudin massa, nec pulvinar turpis dictum maximus."],
    mediaId: "226053498",
    lastReview: "09/05/2022",
    reviewDue: "09/05/2023"
}) }}
```

#### HTML markup (Spotify / AnchorFM)

```html
<div class="hee-media">
    <h2>Anchor.fm Example</h2>
    <div class="hee-media__container anchor">
        <iframe src="https://anchor.fm/health-education-england/embed/episodes/Robyn-Scargill---Trainee-nursing-associate-eqe7mk/a-a4l5nun" frameborder="0" scrolling="no"></iframe>
    </div>
    <div class="hee-media__info">
        <div class="hee-media__reviews">
            <p> Page last reviewed: 01/01/2021 </p>
            <p> Next review due: 01/01/2022 </p>
        </div>
    </div>
</div>
```

#### Nunjucks macro (Vimeo)

```
{{ media({
  "type": "anchor",
  "src": "https://anchor.fm/health-education-england/embed/episodes/Robyn-Scargill---Trainee-nursing-associate-eqe7mk/a-a4l5nun",
  "title": "Anchor.fm Example",
  "lastReview": "01/01/2021",
  "reviewDue": "01/01/2022"
}) }}
```

### Nunjucks arguments

The macro takes the following arguments:

| Name         | Type     | Required | Description                                              |
|--------------|----------|----------|----------------------------------------------------------|
| type         | string   | Yes      | Supported values: "youtube", "vimeo", "anchor"           |
| mediaId      | string   | Yes      | Media id obtained from video media provider              |
| src          | string   | Yes      | AnchorFM embed string                                    |
| title        | string   | No       | Title displayed at top of component                      |
| transcript   | string[] | No       | Each array item represents a text line in the transcript |
