import { Customer } from "./Customer";

let myCustomer = new Customer('Kavya', 'Nadella');
console.log("firstName previously is " + myCustomer.firstName);
myCustomer.firstName = 'Devi';
console.log("firstName now is " + myCustomer.firstName);