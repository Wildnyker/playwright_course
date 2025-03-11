// logical "AND"
console.log(true && true) // all values have to be true for expresion to be true

console.log(true && false) 

// logical "OR"

console.log(true || false) // any value should be true to expression to be true


var ageIsMoreThan18 = true
var isUsCitizen = false

var eligibleForLicense = ageIsMoreThan18 || isUsCitizen
console.log('This customer is eligeble for license: ' + eligibleForLicense)

// logical NOT
console.log(!true)
console.log(6 !== 10)// 6 is not = to 10