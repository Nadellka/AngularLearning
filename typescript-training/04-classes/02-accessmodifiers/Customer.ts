class Customer{
    /*

    //second way of writing get and set
    private firstName: string;
    private lastName: string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFirstName():string{
        return this.firstName;
    }

    public setFirstName(value:string) : void{
        this.firstName = value;
    }

    public getLastName():string{
        return this.lastName;
    }

    public setLastName(value:string) : void{
        this.lastName = value;
    }
    
    
    
    */

    //using special typescript accessors

    //1.change variable names
    private _firstName: string;
    private _lastName: string;


    //get accessor
    public get firstName():string{
        return this._firstName;
    }

    //set accessor --> no return type, not even void
    public set firstName(name: string){
        this._firstName = name;

    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }



}

let customer1 = new Customer();
customer1.firstName = 'Kavya';
customer1.lastName = 'Nadella';
console.log("firstName is " + customer1.firstName );
console.log("lastName is " + customer1.lastName );