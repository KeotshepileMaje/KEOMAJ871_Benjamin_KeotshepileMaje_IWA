// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
// Only edit below this comment

const createHTML = (athlete) => {
//Fetch element inside the object
const {firstName, surname, id, races} = data.response.data[athlete]

//Time and total time
let [first, second, third, fourth] = data.response.data[athlete].races[races.length-1].time
let totalTimeCal = first + second + third + fourth;

//Date of races
let date = data.response.data[athlete].races[races.length-1].date

let dateFormat = (new Date(date).toLocaleDateString('en-GB'))

//Total Numbers of race
let racesTotalCal =  races.length

//Create tags on HTML
const heading = document.createElement('h2')

const fullName = document.createElement('dt') //FullName
const getName =document.createElement('dd')

const totalRace = document.createElement('dt') //Total Races
const getTotalRace = document.createElement('dd')

const eventDate = document.createElement('dt') //Event Date
const getEventDate = document.createElement('dd')

const totalTime = document.createElement('dt') //Total time
const getTotalTime = document.createElement('dd')
 
//Fill tagd with Information
heading.textContent = id

fullName.textContent = 'Athlete:'
getName.textContent = `${firstName} ${surname}`

totalRace.textContent = 'Total Race:'
getTotalRace.textContent = racesTotalCal

eventDate.textContent = 'Event Date'
getEventDate.textContent = dateFormat

totalTime.textContent ='Total Time:'
getTotalTime.textContent = totalTimeCal

//Everything to be inside the dl element tag
const list = document.createElement('dl')

list.appendChild(heading)

list.appendChild(fullName)
list.appendChild(getName)

list.appendChild(totalRace)
list.appendChild(getTotalRace)

list.appendChild(eventDate)
list.appendChild(getEventDate)

list.appendChild(totalTime)
list.appendChild(getTotalTime)

//Store the data in list in Fragment before passing it to HTML
const fragData = document.createDocumentFragment()
fragData.appendChild(list)
console.log(fragData)

return fragData

}

const dataNM372 = createHTML('NM372');
const dataSV782 = createHTML('SV782');

const AthleteNM372 = document.querySelector('[data-athlete="NM372"')
const AthleteSV782 = document.querySelector('[data-athlete="SV782"')

AthleteNM372.appendChild(dataNM372)
AthleteSV782.appendChild(dataSV782)