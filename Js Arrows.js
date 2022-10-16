 //Arrow Function with One Argument
let greet = x => console.log(x);
greet('Hello'); // Hello 


// Arrow Function as an Expression
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby
