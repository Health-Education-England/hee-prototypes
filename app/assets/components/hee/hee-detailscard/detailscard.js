/*
var getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

console.log(getInitials('FirstName LastName'));
console.log(getInitials('FirstName MiddleName LastName'));
console.log(getInitials('1stName 2ndName 3rdName 4thName 5thName'));

Get First and Last Initial: John Doe Smith => JS
name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()

*/

export default () => {
    /**
    * DetailsCard
    * Elements with the selector 'hee-person' are passed into this class
    */
    class DetailsCard {
      constructor(detailscard) {

        this.init();
      }
  
      init() {
          console.log(detailscard);
        //this.getInitials();
      }
      
      getInitials() {
        //this.requiredInputs.forEach(input => {
          //input.addEventListener("focusout", c => this.validate(c.target));
        //})
      }
  
    }
    [...document.getElementsByClassName('hee-detailscard')].forEach((person) => new DetailsCard(detailscard));
  }