// const counter = {
//     value: 120, 
//     add: function() {
//         this.value = this.value + 1 
//     },
//     minus: function() {
//         this.value = this.value - 1
//     },
// }

// counter.add()
// counter.add()
// counter.add()
// counter.minus()
// console.log(counter.value)


// //function that adds two numbers 
// const sum = (a, b) => {
//     return a + b;
//   }
  
//   // calling sum() function  
//   var result = sum.call(sum, 5 , 10);
  
//   console.log(result);
  
//   //Output:
//   // 15

// script.js

const add = (a, b) => a + b 

const multiply = ( a, b) =>  a * b 

function internal() {
	const added = this.add(this.internal.a, this.internal.b)
	const multiplied = this.multiply(added, this.internal.c)
	console.log(multiplied)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}
example1.calculate()
example2.calculate()
