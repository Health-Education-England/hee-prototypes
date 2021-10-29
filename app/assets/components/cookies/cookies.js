export default () => {
    class Cookies {
        constructor() {
            this.banner = document.querySelector('.nhsuk-cookie-banner')
            this.showCookies = document.getElementById('showCookies')
            this.removeCookies = document.getElementById('removeCookies')
            this.host = this.getHost()

            this.setCookies()
            this.addEventListeners()
        }

        getHost(){
          // split out into it's own function as this could potentially get fiddly
          const host = window.location.host.toString().split(":")[0]
          // console.log(host)
          return host
        }

        addEventListeners() {
            // console.log("addEventListeners")
            if(this.showCookies) {
                this.showCookies.addEventListener('mousedown', this.showCookie)
            }
            if(this.removeCookies) {
                this.removeCookies.addEventListener('mousedown', this.removeCookie)
            }
        }

        bannerShow() {
            // console.log("bannerShow")
            this.banner.style.display = "block"
        }
        
        bannerHide() {
            // console.log("bannerHide")
            this.banner.style.display = "none"
        }

        setCookies() {
            // console.log("setCookies")
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
            // console.log("useCookie")
            document.cookie = `analyticsCookie=true; domain=${this.host}; max-age=7776000`
            // console.log(document.cookie)
        }

        noCookie() {
            // console.log("noCookie")
            document.cookie = `analyticsCookie=false; domain=${this.host}; max-age=7776000`
            // console.log(document.cookie)
        }

        removeCookie() {
            // console.log("removeCookie")
            document.cookie = "analyticsCookie=false; max-age=0";
            // console.log(document.cookie)
        }

        showCookie() {
            // console.log("showCookie")
            const output = document.getElementById('cookies')
            output.textContent = '> ' + document.cookie
        }
    }

    new Cookies(document)
}

// Use document.cookie = "analyticsCookie=false; max-age=0" and refresh to remove

// read all cookies
// allCookies = document.cookie;

// *.hee.nhs.uk
// analyticsCookie