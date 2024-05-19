import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myCircle = new Circle(10,20,30);
let myRectangle = new Rectangle(10,20, 30,40);

let shapes:Shape[] = [];

shapes.push(myCircle);
shapes.push(myRectangle);

for(let shape of shapes){
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
