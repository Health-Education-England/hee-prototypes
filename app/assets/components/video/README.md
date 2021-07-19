For now, this component is intended for YouTube videos only. Funcionality may be added later to allow different types

"videoId" | String

Find you video reference on YouTube. This will be a code in the URL for example:

https://www.youtube.com/watch?v=sHzqS03AVj8

Or if you click on "Share"

https://youtu.be/sHzqS03AVj8

The video ID is "sHzqS03AVj8"

Please be carefull not to include any extra code at the end after a "?" such as https://youtu.be/sHzqS03AVj8?t=1 or https://www.youtube.com/embed/sHzqS03AVj8?start=2 unless you are deliberately enabling features from the "Embed" window.

"title" | String

Give your video a relevant title, ideally the same as the YouTube Video.

"transcript" | Array

If you have a transcript, write it out as a basic array. For example:

Let's start at the very beginning
A very good place to start
When you read you begin with A-be-see
When you sing you begin with do-re-mi

Becomes

[
    "Let's start at the very beginning",
    "A very good place to start",
    "When you read you begin with A-be-see",
    "When you sing you begin with do-re-mi"
]