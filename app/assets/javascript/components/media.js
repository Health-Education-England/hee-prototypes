/**
* Media transcript
* Elements with the selector '.nhsuk-transcript' are passed into this class
*/
class Transcript {
  constructor(container) {
    this.container = container
    this.toggles = container.querySelectorAll(".nhsuk-transcript-expand, .nhsuk-transcript-contract")
    this.addEventListeners()
  }

  addEventListeners() {
    if (this.toggles) {
      this.toggles.forEach(toggle => toggle.addEventListener('click', evt => this.toggletranscript(evt)))
    }
  }

  toggletranscript() {
    if (this.isCollapsed()) {
      this.container.classList.remove("transcript-collapsed")
    } else {
      this.container.classList.add("transcript-collapsed")
    }
  }

  isCollapsed() {
    if(this.container.classList.contains("transcript-collapsed")){
      return true
    } else {
      return false
    }
  }
}

[...document.getElementsByClassName('nhsuk-transcript')].forEach(transcript => new Transcript(transcript))
