export class Shape{

    constructor(private _x:number, private _y:number){

    }

    public get x():number{
        return this._y;
    }

    public set x(val1 : number){
        this._x = val1;

    }

    public get y():number{
        return this._y;
    }

    public set y(val2 : number){
        this._y = val2;
    }

    getInfo(){
        return `x = ${this._x} , y = ${this._y}`;
    }

}