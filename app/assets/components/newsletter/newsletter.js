export default () => {
  /**
  * Newsletter
  * Elements with the selector 'nhsuk-newsletter-form' are passed into this class
  */
  class Newsletter {
    constructor(newsletter) {
      this.newsletter = newsletter;
      this.requiredInputs = newsletter.querySelectorAll("[required]");
      this.errors = [];
      this.init();
    }

    init() {
      this.resetForm();
      this.addEvents()      ;
    }
    
    addEvents() {
      this.requiredInputs.forEach(input => {
        input.addEventListener("focusout", c => this.validate(c.target));
      })
    }

    validate(target) {
      var targetError = document.getElementById("errors-"+target.name);
      var targetSummaryError = document.getElementById("error-summary-"+target.name);
      if (target.name == "firstname" || target.name == "lastname") {
        this.errorEmpty(target, targetError, targetSummaryError);
      }
      else if (target.name == "email") {
        this.errorEmail(target, targetError, targetSummaryError);
      }
      else if (target.name == "consent") {
        this.errorConsent(target, targetError, targetSummaryError);
      }
      this.updateSummary();
    }

    updateSummary() {
      var errorSummary = document.getElementById("error-summary");
      if (this.errors.length > 0)
      {        
        errorSummary.style.display = 'block';
      }
      else {
        errorSummary.style.display = 'none';
      }
    }

    errorEmpty(target, targetError, targetSummaryError) {
      if (this.isEmpty(target.value)) {        
        this.showError(target, targetError, targetSummaryError);
      }
      else {
        this.hideError(target, targetError, targetSummaryError);
      }
    }

    errorEmail(target, targetError, targetSummaryError) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(target.value)) {        
        this.showError(target, targetError, targetSummaryError);
      }
      else {
        this.hideError(target, targetError, targetSummaryError);
      }
    }

    errorConsent(target, targetError, targetSummaryError) {
      if (!target.checked) {
        this.showError(target, targetError, targetSummaryError);
      }
      else {
        this.hideError(target, targetError, targetSummaryError);
      }
    }

    hideError(target, targetError, targetSummaryError) {
      target.parentElement.classList.remove('nhsuk-form-group--error');
      targetError.style.display = 'none';
      targetSummaryError.style.display = 'none';
      this.errors = this.errors.filter(item => item !== target.name);
    }

    showError(target, targetError, targetSummaryError) {
      target.parentElement.classList.add('nhsuk-form-group--error');
      targetError.style.display = 'block';
      targetSummaryError.style.display = 'block';
      this.errors = this.errors.filter(item => item !== target.name);
      this.errors.push(target.name);
    }

    isEmpty(str) {
      return !str.trim().length;
    }

    resetForm() {
      const errors = this.newsletter.querySelectorAll('.nhsuk-error-message');
      errors.forEach(error => {
        error.style.display = 'none';
      })
      const errorClasses = this.newsletter.querySelectorAll('.nhsuk-form-group--error');
      errorClasses.forEach(errorclass => {
        errorclass.classList.remove('nhsuk-form-group--error');
      })
      const errorSummary = this.newsletter.querySelectorAll('.nhsuk-error-summary');
      errorSummary.forEach(errorsummary => {
        errorsummary.style.display = 'none';
      })
      const errorSummaryItems = this.newsletter.querySelectorAll('.error-summary-item');
      errorSummaryItems.forEach(summaryitem => {
        summaryitem.style.display  = 'none';
      })
    }
  }
  [...document.getElementsByClassName('nhsuk-newsletter-form')].forEach((newsletter) => new Newsletter(newsletter));
}