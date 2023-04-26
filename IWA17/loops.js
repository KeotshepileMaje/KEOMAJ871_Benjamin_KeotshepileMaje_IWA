// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() //last day of the month

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i =0; i < length; i++) {
        result.push(i)
    }
    return result
}

const createData = () => {
    
const current = new Date() //Today's day
current.setDate(1)

// const startDay = current.getDate() //first day of the month = 1
const firstDay = new Date(current.getFullYear(), current.getMonth(), 1);
const startDay = firstDay.getDay()
const daysInMonth = getDaysInMonth(current) //numbers of day in a month= 30
const daysInCalendar = daysInMonth

const weeks = createArray(6) //no of weeks
const days = createArray(7) //days in a week
let value = []

for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
    const value = {
           week: weekIndex + 1,
           days: []
    }
    for (let dayIndex = 0; dayIndex <  days.length; dayIndex++) {
        const day = (dayIndex - startDay) + 1 + (weekIndex * 7);
        const isValid = day > 0 && day <= daysInMonth;

        value.days.push({
            dayOfWeek: dayIndex + 1,
            value: isValid ? day : null,
        })
        
    }
    weeks[weekIndex] = value
    console.log(value)
}
return weeks
}
console.log(createData())

const addCell = (existing, classString, value) => {
    return    `<td> ${classString}  ${value}</td>`
}

const createHtml = (data) => {
    let result = ''

    for (i = 0; i < data.length; i++) {
        let inner = addCell('table__cell table__cell_sidebar', 'Week {week}')
    
        for (dayOfWeek, value in days) {
            let classString = table__cell
			const isToday = new Date() === value
            const isWeekend = dayOfWeek === 1 && dayOfWeek === 7
            const isAlternate = Math.floor(weeks/2)

			if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === `${classString} table__cell_weekend`
            if (isAlternate) classString === `${classString} table__cell_alternate`
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)