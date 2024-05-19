import { Shape } from './Shape';

export class Rectangle extends Shape{

    constructor(_x:number, _y:number, private _l:number, private _w:number){
        super(_x,_y);
    }

    public get l():number{
        return this._l;
    }

    public set l(value:number){
        this._l = value;
    }

    public get w():number{
        return this._w;
    }

    public set w(value:number){
        this._w = value;
    }

    public getInfo(): string {
        return super.getInfo() + `, length = ${this._l} , width = ${this._w}`;
    }

    calculateArea(): number {
        return this._l * this._w;
    }
    

}