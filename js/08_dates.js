let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024,0,24)   // month zero sa start hota hai
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreateddates = new Date("11-07-2004")
console.log(myCreateddates.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log( myCreateddates.getTime());  // they giving a answer in millisecond
console.log(Math.floor(Date.now()/1000));  //  they giving a answer in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDay() + 1);


newDate.toLocaleString('default', {
    weekday: "long",          // press ctrl + space
})




