"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(20, 30);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(2, 3, 4);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(2, 3, 4, 5);
console.log(myRectangle.getInfo());
