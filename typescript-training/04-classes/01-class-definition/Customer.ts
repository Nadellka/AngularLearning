class Customer{
    //define variables
    firstName: string;
    lastName: string;
    //define constructor
    public constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;

    }


}

//create objects
let customer = new Customer('Kavya','Nadella');
//if we don't have constructor, give variables as below
/*
customer.firstName = 'Kavya';
customer.lastName = 'Nadella';
*/
console.log("firstName is " + customer.firstName);
console.log("lastName is " + customer.lastName);