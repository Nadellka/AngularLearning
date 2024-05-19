/*
Type                      Description
boolean                   true/false values
number                    supports integer and floating point numbers
string                    Text data. Enclosed in single or double quotes
any                       supports "any" datatype assignment
*/


/*
Define Variables

let <variable name>: <type> = <initial value> ;

Example: 
let found: boolean = true;
let grade: integer = 88.6;
let name: string = "Anup";
(or)
let name: string = 'Anup'

variable declarations are done using 'let' keyword as opposed to 'var' keyword in JavaScript.\
var - disadvantages -> scoping, capturing, shadowing etc

Since TypeScript is strongly typed, we can assign different values to above variables
found = false;
grade = 88.8;
name = "Anup Kumar";
(or)
name = 'Anup Kumar'


//any keyword
let myData: any = 50.0;

we can assign different values of any type
myData = "Anup"
myData = true;

Use any if u want to use a list, array.

Template strings - used for long strings with lot of concatenation instead oof using +, we 
use backticks: `
Reference variables with ${..}

Ex: console.log(` Hi ${firstName} ${lastName} `)
*/