const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let getlocation = "t4";
let currency;
let shipping; 
const customers = 1


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

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED 

if ( ( (shoes + toys + batteries + pens + shirts) >= 1000 && currency === 'R' && customers === 1) ||
	 ( (shoes + toys + batteries + pens + shirts) >= 60 && currency === '$' && customers === 1 )
	 ) {
		shipping = 0
		}

if ((customers !== 1)) { console.log(FREE_WARNING) }

if (getlocation === 'NK') {
    console.log(BANNED_WARNING)
}   else { 
		console.log('Price:', currency, shoes + toys + batteries + pens + shirts + shipping)
	    }
