/**
* NHSUK-Cookie-Consent
* ---------
* 
*/

export default () => {
  class Cookies {
    constructor() {
      console.log("Cookies accepted: "+NHSCookieConsent.getConsented());

      // Policy page buttons
      this.acceptCookies = document.querySelector('#acceptCookies');
      this.rejectCookies = document.querySelector('#rejectCookies');

      // Policy page opt in or out status
      this.acceptedCookies = document.querySelector('#acceptedCookies');
      this.rejectedCookies = document.querySelector('#rejectedCookies');

      // Event listeners and adapt policy page
      this.toggleStatus();
      this.toggleCookies();
      
    }

    toggleCookies() {
      this.acceptCookies.addEventListener('click', evt => {
        evt.preventDefault()
        NHSCookieConsent.setConsented(true);
        location.reload();
      });

      this.rejectCookies.addEventListener('click', evt => {
        evt.preventDefault()
        NHSCookieConsent.setConsented(false);
        location.reload();
      });
    }

    toggleStatus() {
      if(NHSCookieConsent.getConsented()) {
        this.acceptedCookies.style.display = "inline-block";
        this.rejectedCookies.style.display = "none";
        this.rejectCookies.style.display = "block";
        this.acceptCookies.style.display = "none";
      } else {
        this.rejectedCookies.style.display = "inline-block";
        this.acceptedCookies.style.display = "none";
        this.acceptCookies.style.display = "block";
        this.rejectCookies.style.display = "none";
      }
    }

  }
  new Cookies(document);
}