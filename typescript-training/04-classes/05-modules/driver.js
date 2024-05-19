"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer('Kavya', 'Nadella');
console.log("firstName previously is " + myCustomer.firstName);
myCustomer.firstName = 'Devi';
console.log("firstName now is " + myCustomer.firstName);
