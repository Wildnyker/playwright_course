//functions
// declarative
//declarative function can be called even before functioin is declared in code
//it must be in code but can be located before it's invocation

helloThere()
function helloThere(){
    console.log("Hello there!")
}

helloThere()

//anonymus function

var helloHere = function(){
    console.log('Hello here!')
}

helloHere()

//es6 function or arrow function

var hello3 = () => {
    console.log('Hello3')
}
hello3()

//function with arguments

function printName(name, lastName){
    console.log(name + ' ' + lastName)
}

printName("star", 'killer')

//function with return

function multiplyByTwo (number){
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)
//or
console.log(multiplyByTwo(10))

//import function
import {printAge} from '../helpers/printHelper.js'

printAge(10)

//imort everything

import * as helper from '../helpers/printHelper.js'

helper.printAge(11)


let familySize = 2
let plannedDistanceToDrive = 100

function recommendedCar(familySize, plannedDistanceToDrive) {
    if (familySize <= 4 && plannedDistanceToDrive < 200) {
        return('Tesla')
    } else if (familySize <= 4 && plannedDistanceToDrive >= 200){
        return('Toyota Camry')
    } else if (familySize > 4){
        return('Minivan')
    }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));