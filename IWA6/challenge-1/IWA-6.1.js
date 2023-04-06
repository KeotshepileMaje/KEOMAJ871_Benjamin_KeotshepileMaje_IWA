/*
 *This is a more recognised method
 */
const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = !Number.isNaN(parseInt(primaryPhone))
const secondaryValid = !Number.isNaN(parseInt(secondaryPhone))

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

/*
 *Another method
 */
// const primaryPhone = 'O748105141'
// const secondaryPhone = '0219131568'
// const  onlyNumbers = /^[0-9]+$/ 
// const primaryValid = onlyNumbers.test(primaryPhone) 
// const secondaryValid = onlyNumbers.test(secondaryPhone)
// console.log('Primary phone is valid numerical string:', primaryValid)
// console.log('Secondary phone is valid numerical string:', secondaryValid )

// /^[0-9]+$/ -->This regular expression matches any string that consists of only digits from 0-9 and nothing else.
// .test() -->Tests if this string contain only digits.

