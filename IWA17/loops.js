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

const firstDay = new Date(current.getFullYear(), current.getMonth(), 1);
const startDay = firstDay.getDay() //which day of the week start the month
const daysInMonth = getDaysInMonth(current) //numbers of day in a 

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



const addCell = (existing, classString) => {
    return /* html */ `
      <td class="${classString}">${existing}</td>
    `;
  };
  const createHtml = (data) => {
    let result = '';
    for (const week of data) {
      let inner = '';
      inner = addCell(`Week ${week.week}`, 'table__cell table__cell_sidebar', inner);
      for (const day of week.days) {
        let classString = 'table__cell';
        const isToday = new Date(current.getDate());
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        if (isToday) classString = `${classString} table__cell_today`
        if (isWeekend) classString = `${classString} table__cell_weekend`
        
        inner += addCell(day.value);
      }

      result += `<tr>${inner}</tr>`;
    }
    return result;
  };















  
// const addCell = (existing, classString, value) => {
//     return   result = /*html*/
//      `<td ${classString}> ${value}</td>`
// }

// const createHtml = (data) => {
//     let result = ''

   
//     for ( let week = 0; week < data ; week++) {
//         let inner = ''
//         inner = addCell('table__cell table__cell_sidebar', 'Week {week}')
    
//         for (const day in week ) {
//             let classString = table__cell
// 			const isToday = new Date() === new Date(current.getFullYear(), current.getMonth(), day.value).toDateString()
//             const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7
//             //const isAlternate = Math.floor(week%2)

// 			if (isToday) classString = `${classString} table__cell_today`
//             if (isWeekend) classString = `${classString} table__cell_weekend`
//             //if (isAlternate) classString = `${classString} table__cell_alternate`
//             addCell(inner, classString, value)
//         }

//         result = `<tr class='table_row'>${inner}</tr>`
//     }
//     return result
// }
// console.log(createHtml())
// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)