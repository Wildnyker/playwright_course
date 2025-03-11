//OBJECTS

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["volvo", 'toyota', "Tesla"]
}

console.log(customer.lastName)
//or
console.log(customer['lastName'])
// change value of a key
//dot
customer.firstName = "Mike"
//bracket
customer['lastName'] = "Wazowski"

console.log(customer)
console.log(`${customer.lastName} ${customer.firstName}`)

//ARRAY

var cars = ["volvo", 'toyota', "Tesla"]
cars[1] = 'morda'
console.log(cars[1])
console.log(customer.cars[0])
