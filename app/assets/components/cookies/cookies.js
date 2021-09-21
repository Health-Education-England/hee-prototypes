export default () => {
    class Foo {
        constructor(container) {
            this.container = container;

            console.log("Constructor says hi")
            this.setCookies()
        }

        setCookies() {
            console.log("hello world")
            if (localStorage.getItem('analyticsCookie') === null) {
                this.heeShow('.nhsuk-cookie-banner')
                document.querySelector('#nhsuk-cookie-banner__link_accept_analytics').onclick = function(e) {
                    e.preventDefault();
                    this.heeHide('.nhsuk-cookie-banner')
                    localStorage.setItem('analyticsCookie', true)
                }
                document.querySelector('#nhsuk-cookie-banner__link_decline_analytics').onclick = function(e) {
                    e.preventDefault();
                    this.heeHide('.nhsuk-cookie-banner')
                    localStorage.setItem('analyticsCookie', false)
                }
            }
        }
    
        heeShow(item){
            document.querySelector(item).style.display = "block"
        }
        
        heeHide(item){
            document.querySelector(item).style.display = "none"
        }
    }
}