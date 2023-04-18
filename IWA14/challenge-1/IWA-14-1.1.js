const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

const message = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}
message()












































// //Method -> obj
// const video = {
//     title: 'a',
//     play() {
//         console.log(this)
//     }
// };
// video.play();
// video.stop = function() {
//     console.log(this)
// };    //created a stop function inside an object video
// video.stop();

// //functio -> global (window,global)  
// function Video(title) {
//     this.title = title;
//     console.log(this)
// }
// const v = new Video('b')

// const counter = {
//     value: 120,
//     actions: {    
//        add: function () {
//         this.value = this.value + 1
//     },
//        minus: function () {
//         this.value = this.value - 1
//     },}
// } 
// counter.add()
// //counter.add()
// //counter.add()
// counter.minus()
// console.log(counter.value)

