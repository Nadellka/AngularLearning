import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(20, 30);

let myCircle = new Circle(2,3,4);

let myRectangle = new Rectangle(2,3,4,5);

//Declare an array of shapes initialized to empty
let shapes: Shape[] = [];
//add
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for(let shape of shapes){
    console.log(shape.getInfo());
}
