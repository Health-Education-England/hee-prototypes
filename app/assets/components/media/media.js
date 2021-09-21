export default () => {
  /**
  * Media transcript
  * Elements with the selector '.nhsuk-transcript' are passed into this class
  */
  class Transcript {
    constructor(container) {
      this.container = container
      this.toggles = container.querySelectorAll("a")

      console.log(this.container)
      console.log(this.toggles)
      this.addEventListeners()
    }

    addEventListeners() {
      if (this.toggles) {
        this.toggles.forEach(toggle => toggle.addEventListener('click', evt => this.toggletranscript(evt)))
      }
    }

    toggletranscript() {
      if (this.isCollapsed()) {
        this.container.classList.remove("nhsuk-media__transcript-expanded")
      } else {
        this.container.classList.add("nhsuk-media__transcript-expanded")
      }
    }

    isCollapsed() {
      if(this.container.classList.contains("nhsuk-media__transcript-expanded")){
        return true
      } else {
        return false
      }
    }

  }

  [...document.getElementsByClassName('nhsuk-media__transcript')].forEach(transcript => new Transcript(transcript))
}