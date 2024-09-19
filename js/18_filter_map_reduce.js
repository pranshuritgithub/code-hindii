// ++++++++++++++++ filter +++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter( (num) => num > 4)

// //console.log(newNums);



// const myNumss = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNumss = myNums.filter( (num) => {               //agrr scope means {} agrr isko open krta hai too aapko return ka use krna hai complsry
//     return num > 5
// })

//console.log(newNumss);



const newNums = []

myNums.forEach( (num) => {
    if (num > 4)
    {
        newNums.push(num)
    }
})
//console.log(newNums);



// +++++++++++++++++ Map +++++++++++++++++

const newNumer =  [1, 2, 3, 4, 5, 6, 7, 8, 9] 

const nume = newNumer.map( (num) => num + 10)
//console.log(nume);

const numes = newNumer.map( (num) => { return num + 10})
//console.log(nume);



const newwNums = newNumer
           .map( (num) => num * 10)
           .map( (num) => num + 1)
           .filter( (num) => num >= 10)

//console.log(newwNums);






// ++++++++++++++++ Reduce ++++++++++++++++++++++

const hg = [1, 2, 3]                       // acc = accumulator

// const myTotal = hg.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


const myTotal = hg.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);
           