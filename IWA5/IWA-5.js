const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

//Gloabal variables
let getlocation = "RSA";
let currency;
let shipping; 
const customers = 1

//Buying conditions
if (getlocation === 'RSA') { 
	shipping = 400
	currency = 'R'
} else {
	shipping = 800
	currency = '$'	
}

if (getlocation === 'NAM'){
    shipping = 600
	currency = "$"
}

//Items to buy
const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 

//Delivery conditions
if ( ( (shoes + toys + batteries + pens + shirts) >= 1000 && 
	(currency === 'R') && (customers === 1) && 
	(getlocation === ('NAM' || 'RSA')) ) 
        ||
	( (shoes + toys + batteries + pens + shirts) >= 60 && (currency === '$') &&(customers === 1) && 
	(getlocation === ('NAM' || 'RSA')) ) ){
	shipping = 0
	} 

/*Buying conditions and 
 *Total price for items on the cart
 */
if ((customers !== 1)) { console.log(FREE_WARNING) }

if (getlocation === 'NK') {
    console.log(BANNED_WARNING)
}   else { 
		console.log('Price:', currency, shoes + toys + batteries + pens + shirts + shipping)
	    }
