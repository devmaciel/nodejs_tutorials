const tutorial = require('./tutorial');
console.log(tutorial);
/*
      Irá retornar um objeto
{
  sum: [Function: sum],
  PI: 3.14,
  SomeMathObject: [class SomeMathObject]
}

*/
// console.log(sum(1,1));

console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());


