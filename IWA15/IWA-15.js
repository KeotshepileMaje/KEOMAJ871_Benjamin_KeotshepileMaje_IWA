
// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const firstList = data.lists[0][1]
const secondList = data.lists[1][1]
const thirdList = data.lists[2][1]

const result = []

const extractBiggest = () => {
	const lastOfFirst = firstList[firstList.length-1]
	const lastOfSecond = secondList[secondList.length-1]
	const lastOfThird = thirdList[thirdList.length-1]

	if (lastOfFirst > lastOfSecond && lastOfFirst > lastOfThird) {
		return firstList.pop()	
	};
	if (lastOfSecond > lastOfFirst && lastOfSecond > lastOfThird) {
		return secondList.pop()
	 };
    if (lastOfThird > lastOfFirst && lastOfThird > lastOfSecond)  {
	    return thirdList.pop()
	};
}


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

//console.log(result)

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)


