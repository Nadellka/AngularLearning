import { Shape } from './Shape';

export class Rectangle extends Shape{

    constructor(_x:number, _y:number, private _length:number, private _width:number){
        super(_x,_y);

    }

    public get length():number{
        return this._length;
    }

    public set length(value : number){
        this._length = value;
    }

    public get width():number{
        return this._width;
    }

    public set width(value : number){
        this._width = value;
    }

    getInfo(): string{

        return super.getInfo() + `, length = ${this._length} , width = ${this._width}`;

    }

}