const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line


const owed = ((-1*leoBalance) + (-1*sarahBalance))

const leo = `${leoName}  ${leoSurname}  (Owed: R ${-leoBalance})`
const sarah = `${sarahName}  ${sarahSurname}  (Owed:  R ${parseFloat(-sarahBalance).toFixed(2)})`
const total = `Total amount owed: R ${owed.toFixed(2)}`
const result = `\n${leo} \n${sarah} \n${divider} \n${total} \n${divider} `
console.log(result)




