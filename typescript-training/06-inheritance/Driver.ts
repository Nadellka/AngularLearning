import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(20, 30);
console.log(myShape.getInfo());

let myCircle = new Circle(2,3,4);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(2,3,4,5);
console.log(myRectangle.getInfo());