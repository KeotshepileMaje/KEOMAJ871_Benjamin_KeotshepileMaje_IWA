const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}
//console.log(holidays)
const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log( holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`)

let copied = holidays[6]
    copied.name = 'X-mas Day'

const correctDate = new Date(copied.date)
correctDate.setHours(00)
correctDate.setMinutes(00)
isEarlier = correctDate.getTime() < holidays[6].date.getTime()
console.log('New date is earlier:', isEarlier)

if (isEarlier) { 
console.log('ID change:', holidays[6].id != copied.id )
console.log('Name change:', holidays[6].name != copied.name || copied.name)
console.log('Date change:', holidays[6].date != copied.date || copied.date)
}


/*
 *https://stackoverflow.com/questions/7143399/min-max-of-dates-in-an-array
 *Method used here still tobe studied
*/
let dates = []
    dates.push(new Date(holidays[0].date))
    dates.push(new Date(holidays[1].date))
    dates.push(new Date(holidays[2].date))
    dates.push(new Date(holidays[3].date))
    dates.push(new Date(holidays[4].date))
    dates.push(new Date(holidays[5].date))
    dates.push(new Date(holidays[6].date))
    dates.push(new Date(holidays[7].date))
    dates.push(new Date(holidays[8].date))

    let minDate=new Date(Math.min.apply(null,dates));
    console.log(minDate)
    let maxDate=new Date(Math.max.apply(null,dates));
    console.log(maxDate)

const firstDay = minDate.getDate()
const firstMonth = minDate.getMonth()
const lastDay = maxDate.getDate()
const lastMonth = maxDate.getMonth()

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random())];
console.log(randomHoliday);