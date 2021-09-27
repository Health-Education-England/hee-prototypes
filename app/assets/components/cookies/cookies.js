export default () => {
    class Cookies {
        constructor() {
            console.log("Constructor says hi")
            this.banner = document.querySelector('.nhsuk-cookie-banner')
            this.setCookies()

        }

        cookieShow() {
            console.log("cookieHide")
            this.banner.style.display = "block"
        }
        
        cookieHide() {
            console.log("cookieHide")
            this.banner.style.display = "none"
        }

        setCookies() {
            console.log("setCookies")
            if (localStorage.getItem('analyticsCookie') === null) {
                this.cookieShow()
                document.querySelector('#nhsuk-cookie-banner__link_accept_analytics').addEventListener('click', evt => {
                    evt.preventDefault()
                    this.cookieHide()
                    localStorage.setItem('analyticsCookie', true)
                })
                document.querySelector('#nhsuk-cookie-banner__link_decline_analytics').addEventListener('click', evt => {
                    evt.preventDefault()
                    this.cookieHide()
                    localStorage.setItem('analyticsCookie', false)
                })
            }
        }
    }

    new Cookies(document)
}

// Use localStorage.removeItem('analyticsCookie') to reset