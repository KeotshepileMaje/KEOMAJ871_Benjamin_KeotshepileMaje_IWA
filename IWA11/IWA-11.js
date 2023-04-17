const Root_1 = document.querySelector('[data-key="order1"]');
const Biscuits_1 = Root_1.querySelector('.biscuits .count');
const Donuts_1 = Root_1.querySelector('.donuts .count');
const Pancakes_1 = Root_1.querySelector('.pancakes .count');
const Status_1 = Root_1.querySelector('.status > dd');

Biscuits_1.textContent = Root_1.getAttribute('data-biscuits');
Donuts_1.textContent = Root_1.getAttribute('data-donuts');
Pancakes_1.textContent = Root_1.getAttribute('data-pancakes');
Status_1.textContent = Root_1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const Root_2 = document.querySelector('[data-key="order2"]');
const Biscuits_2 = Root_2.querySelector('.biscuits .count');
const Donuts_2 = Root_2.querySelector('.donuts .count');
const Pancakes_2 = Root_2.querySelector('.pancakes .count');
const Status_2 = Root_2.querySelector('.status > dd');

Biscuits_2.textContent = Root_2.getAttribute('data-biscuits');
Donuts_2.textContent = Root_2.getAttribute('data-donuts');
Pancakes_2.textContent = Root_2.getAttribute('data-pancakes');
Status_2.textContent = Root_2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const Root_3 = document.querySelector('[data-key="order3"]');
const Biscuits_3 = Root_3.querySelector('.biscuits .count');
const Donuts_3 = Root_3.querySelector('.donuts .count');
const Pancakes_3 = Root_3.querySelector('.pancakes .count');
const Status_3 = Root_3.querySelector('.status > dd');

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


/*-----------------------------*/
/*
*Method 3
*for my learner buddy*/

// // Order1
// const order1Root = document.querySelector('body > section:nth-child(3) > dl');

// const order1Biscuits = document.querySelector('body section:nth-child(3) dl  div.biscuits dd');
// order1Biscuits.innerText = order1Root.dataset.biscuits ;

// const order1Donuts = document.querySelector('body > section:nth-child(3) > dl > div.donuts > dd')
// order1Donuts.innerText = order1Root.dataset.donuts;

// const order1Pancakes = document.querySelector('body > section:nth-child(3) > dl > div.pancakes > dd')
// order1Pancakes.innerText = order1Root.dataset.pancakes;

// const order1Status = document.querySelector('body > section:nth-child(3) > dl > div.status > dd')
// order1Status.innerText = order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

// /*Called the root by adding order1 and ensuring that I camelCase. I used inspect to copy selectior of the path i wanted in the elements tab.
// Ussed innerText to get the iner text of the particular element and dataSet to get values of data attributes that are on the HTML.*/
// //Order 2
// const order2Root = document.querySelector('body > section:nth-child(4) > dl');

// const order2Biscuits = document.querySelector('body > section:nth-child(4) > dl > div.biscuits > dd');
// order2Biscuits.innerText = order2Root.dataset.biscuits ;

// const order2Donuts = document.querySelector('body > section:nth-child(4) > dl > div.donuts > dd')
// order2Donuts.innerText = order2Root.dataset.donuts;

// const order2Pancakes = document.querySelector('body > section:nth-child(4) > dl > div.pancakes > dd')
// order2Pancakes.innerText = order2Root.dataset.pancakes;

// const order2Status = document.querySelector('body > section:nth-child(4) > dl > div.status > dd')
// order2Status.innerText = order2Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

// // Order 3
// const order3Root = document.querySelector('body > section:nth-child(5) > dl');

// const order3Biscuits = document.querySelector('body > section:nth-child(5) > dl > div.biscuits > dd');
// order3Biscuits.innerText = order3Root.dataset.biscuits ;

// const order3Donuts = document.querySelector('body > section:nth-child(5) > dl > div.donuts > dd')
// order3Donuts.innerText = order3Root.dataset.donuts;

// const order3Pancakes = document.querySelector('body > section:nth-child(5) > dl > div.pancakes > dd')
// order3Pancakes.innerText = order3Root.dataset.pancakes;

// const order3Status = document.querySelector('body > section:nth-child(5) > dl > div.status > dd')
// order3Status.innerText = order3Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';