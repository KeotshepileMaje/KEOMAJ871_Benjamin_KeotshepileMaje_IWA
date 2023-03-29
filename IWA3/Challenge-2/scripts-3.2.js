import {firstname, surname, role} from './alex.js'
// import {fistname1, surname1, role1} from './johannes.js'
// import {fistname, surname, role, firstname} from './nwabisa.js'

console.log(firstname,surname, role)
const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display

// const display= firstname + " " + surname + " (" + role + ")"
// document.querySelector('#johannes').innerText = display

// private display= firstname + " " + surname + " (" + role + ")"
// document.querySelector('#nwabisa').innerText = display
