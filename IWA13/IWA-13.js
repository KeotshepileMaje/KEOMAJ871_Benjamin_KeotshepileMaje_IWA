let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated == 'string' 
    let calculatedAsNumber = isString ? parseInt(calculated) : calculated
    console.log(calculatedAsNumber)
    calculated = calculatedAsNumber + 6 ;
}

const calcUser = () => {  
  logCalc()
  if (calculated >= 2) {
      user = 'John'
      state = 'requesting'
      console.log('great')
      } 
  if (calculated > 3) { 
      state = 'idle'
      console.log('oih')
}
}
calcUser()

const checkUser = () => {
  calcUser()
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()