class Customer{

    constructor(private _firstName:string, private _lastName:string){

    }

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(value:string){
        this._firstName = value;
    }

    
}

let customer = new Customer('Kavya', 'Nadella');
console.log("firstName previously is " + customer.firstName);
customer.firstName = 'Devi';
console.log("firstName now is " + customer.firstName);