const nickname= "";
const firstname = "";
const user = (nickname || firstname)
const ans1 = `Good Morning, ${user}!`
const ans2 = `Good Morning!`

if (user){
    console.log(ans1)
}else {
    console.log(ans2)
}

//console.log(`Good Morning, ${nickname || firstname}!`)