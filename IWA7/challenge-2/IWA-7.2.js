const nickname= "Timmy";
const firstname = "Timothy";
const user = `${(nickname || firstname)}`
const ans1 = `Good Morning, ${user}!`
const ans2 = `Good Morning!`

if (user || nickname || firstname){
    console.log(ans1)
}else {
    console.log(ans2)
}