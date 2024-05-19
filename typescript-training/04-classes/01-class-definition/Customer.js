var Customer = /** @class */ (function () {
    //define constructor
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
//create objects
var customer = new Customer('Kavya', 'Nadella');
console.log("firstName is " + customer.firstName);
console.log("lastName is " + customer.lastName);
