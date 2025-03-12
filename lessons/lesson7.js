//loops


//for i loop


for (let i=0; i<5; i++){
    console.log("hello " + i)
}

// for of
var cars = ["volvo", 'toyota', "Tesla"]

for (let car of cars){
    console.log(car)
    if(car == "toyota"){
        break
    }
}

//ES6 syntax for each loop

cars.forEach(c =>{
    console.log(c)
})