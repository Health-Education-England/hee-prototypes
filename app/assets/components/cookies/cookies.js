export default () => {
  class Cookies {
    constructor() {
      // banner
      this.banner = document.querySelector('.nhsuk-cookie-banner')
      this.showCookies = document.getElementById('showCookies')
      this.removeCookies = document.getElementById('removeCookies')
      this.host = this.getHost()

      this.setCookies()
      this.addEventListeners()

      // policy page
      this.Status = document.querySelector('.nhsuk__cookieStatus')
      this.In = document.querySelectorAll('.nhsuk__cookiesIn')
      this.Out = document.querySelectorAll('.nhsuk__cookiesOut')

      this.toggleStatus()
    }

    getHost(){
      const host = window.location.host.toString().split(":")[0]
      return host
    }

    addEventListeners() {
      if(this.showCookies) {
        this.showCookies.addEventListener('mousedown', this.showCookie)
      }
      if(this.removeCookies) {
        this.removeCookies.addEventListener('mousedown', this.removeCookie)
      }
    }

    bannerShow() {
      if(this.banner) {
        this.banner.style.display = "block"
      }
    }
    
    bannerHide() {
      if(this.banner) {
        this.banner.style.display = "none"
      }
    }

    setCookies() {
        if (document.cookie === '') {
          this.bannerShow()
          document.querySelector('#nhsuk-cookie-banner__link_accept_analytics').addEventListener('click', evt => {
            evt.preventDefault()
            this.bannerHide()
            this.useCookie()
          })
          document.querySelector('#nhsuk-cookie-banner__link_decline_analytics').addEventListener('click', evt => {
            evt.preventDefault()
            this.bannerHide()
            this.noCookie()
          })
        }
    }

    useCookie() {
      document.cookie = `analyticsCookie=true; domain=${this.host}; max-age=7776000`
      location.reload()
    }

    noCookie() {
      document.cookie = `analyticsCookie=false; domain=${this.host}; max-age=7776000`
      location.reload()
    }

    toggleStatus() {
      if(this.Status){
        document.querySelector('button.nhsuk__cookiesOut').addEventListener('click', evt => {
          evt.preventDefault()
          this.bannerHide()
          this.useCookie()
          location.reload()
        })

        document.querySelector('button.nhsuk__cookiesIn').addEventListener('click', evt => {
          evt.preventDefault()
          this.bannerHide()
          this.noCookie()
          location.reload()
        })

        if (document.cookie === '' || document.cookie === "analyticsCookie=false") {
          this.displayBlock(this.Out)
          this.displayNone(this.In)
        } else {
          this.displayNone(this.Out)
          this.displayBlock(this.In)
        }
      }
    }

    displayBlock(item) {
      item.forEach(e => e.style.display="inline-block")
    }

    displayNone(item) {
      item.forEach(e => e.style.display="none")
    }

    // redundant but useful
    showCookie() {
      const output = document.getElementById('cookies')
      output.textContent = '> ' + document.cookie
    }
    
    removeCookie() {
      document.cookie = "analyticsCookie=false; max-age=0"
      location.reload()
    }

  }

  new Cookies(document)
}