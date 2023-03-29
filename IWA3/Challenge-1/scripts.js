import {company, year} from "./configuration.js";
// import {year} from "./configuration.js";



console.log(company, year);

const message = '© ' + company + '(' + year + ')'
document.querySelector('footer').innerText = message



// const message = "© " + company + ' '+ year
// document.querySelector('footer').innerText = message