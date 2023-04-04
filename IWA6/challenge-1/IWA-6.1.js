const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const  onlyNumbers = /^[0-9]+$/
const primaryValid = onlyNumbers.test(primaryPhone)
const secondaryValid = onlyNumbers.test(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

/*Method 1
 *accurate
*/

// const primaryPhone = 'O748105141'
// const secondaryPhone = '0219131568'

// // Only change below this line
// const  onlyNumbers = (/^[0-9]+$/)

// const primaryValid = typeof primaryPhone === 'string' &&  onlyNumbers.test(primaryPhone)
// const secondaryValid = typeof secondaryPhone === 'string' &&  onlyNumbers.test(secondaryPhone)

// console.log('Primary phone is valid numerical string:', primaryValid)
// console.log('Secondary phone is valid numerical string:', secondaryValid )

/*Method 2
 *Not accurate
*/

// const primaryPhone = 'O748105141'
// const secondaryPhone = '0219131568'

// console.log('Primary phone is valid numerical string:' , isNaN(primaryPhone))
// console.log('Secondary phone is valid numerical string:', isNaN(secondaryPhone))



/*Method 3
 *Still to work on it
 *ToDo
*/

// const primaryPhone = 'O748105141'
// const secondaryPhone = '0219131568'

// // Only change below this line

// const primaryValid = typeof primaryPhone == isNaN(primaryPhone)
// const secondaryValid = typeof secondaryPhone == isNaN(secondaryPhone)

// console.log('Primary phone is valid numerical string:', primaryValid)
// console.log('Secondary phone is valid numerical string:', secondaryValid )

