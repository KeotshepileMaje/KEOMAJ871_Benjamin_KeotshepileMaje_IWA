const Root_1 = document.querySelector('[data-key="order1"]');
const Biscuits_1 = Root_1.querySelector('.biscuits .count');
const Donuts_1 = Root_1.querySelector('.donuts .count');
const Pancakes_1 = Root_1.querySelector('.pancakes .count');
const Status_1 = Root_1.querySelector('.status dd');

Biscuits_1.textContent = Root_1.getAttribute('data-biscuits');
Donuts_1.textContent = Root_1.getAttribute('data-donuts');
Pancakes_1.textContent = Root_1.getAttribute('data-pancakes');
Status_1.textContent = Root_1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const Root_2 = document.querySelector('[data-key="order2"]');
const Biscuits_2 = Root_2.querySelector('.biscuits .count');
const Donuts_2 = Root_2.querySelector('.donuts .count');
const Pancakes_2 = Root_2.querySelector('.pancakes .count');
const Status_2 = Root_2.querySelector('.status dd');

Biscuits_2.textContent = Root_2.getAttribute('data-biscuits');
Donuts_2.textContent = Root_2.getAttribute('data-donuts');
Pancakes_2.textContent = Root_2.getAttribute('data-pancakes');
Status_2.textContent = Root_2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const Root_3 = document.querySelector('[data-key="order3"]');
const Biscuits_3 = Root_3.querySelector('.biscuits .count');
const Donuts_3 = Root_3.querySelector('.donuts .count');
const Pancakes_3 = Root_3.querySelector('.pancakes .count');
const Status_3 = Root_3.querySelector('.status dd');

Biscuits_3.textContent = Root_3.getAttribute('data-biscuits');
Donuts_3.textContent = Root_3.getAttribute('data-donuts');
Pancakes_3.textContent = Root_3.getAttribute('data-pancakes');
Status_3.textContent = Root_3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';


/*--------------------------*/


/*
 *Method 2
 *Solution from Chatgpt
*/
// // script.js

// // Select all <dl> elements on the page.
// const orders = document.querySelectorAll('dl');

// // Loop over each <dl> element.
// orders.forEach((order) => {
//   // Get the data attributes for this order.
//   const key = order.dataset.key;

//   const biscuits = order.dataset.biscuits;

//   const biscuitsElement = order.querySelector('.biscuits .count');
//   biscuitsElement.textContent = biscuits;

//   const donuts = order.dataset.donuts;

//   const donutsElement = order.querySelector('.donuts .count');
//   donutsElement.textContent = donuts;

//   const pancakes = order.dataset.pancakes;

//   const pancakesElement = order.querySelector('.pancakes .count');
//   pancakesElement.textContent = pancakes;

//   const delivered = order.dataset.delivered;

//   const statusElement = order.querySelector('.status dd');
//   statusElement.textContent = delivered ? 'Delivered' : 'Pending';
// })


