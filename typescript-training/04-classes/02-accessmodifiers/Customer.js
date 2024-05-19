var Customer = /** @class */ (function () {
    function Customer() {
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
var customer1 = new Customer();
customer1.firstName = 'Kavya';
customer1.lastName = 'Nadella';
console.log("firstName is " + customer1.firstName);
console.log("lastName is " + customer1.lastName);
