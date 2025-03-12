//conditional statement

//if (condition){
    //execute code
//} else {
    //execute this code
//}

//if hour between 6 and 12 print "Good morning"
// if between 12 and 18 "good afternoon
// othervise 'good evening'

var hor = 165

if (hor >= 6 && hor < 12){
    console.log("good morning")
} else if (hor >= 12 && hor < 18){
    console.log('good afternoon')
} else {
    console.log('good evening')
}


var ageIsMoreThan18 = true
var isUsCitizen = true
if (ageIsMoreThan18 && isUsCitizen){
    console.log('license approved')
} else {
    console.log('license denied')
}