"use strict";
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        //get accessor
        get: function () {
            return this._firstName;
        },
        //set accessor --> no return type, not even void
        set: function (name) {
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customer1 = new Customer('Kavya', 'Nadella');
console.log("firstName is " + customer1.firstName);
console.log("lastName is " + customer1.lastName);
