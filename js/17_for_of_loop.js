// ++++++++++++++++++ for of loop +++++++++++++++

// ["" "" ""]
// [{} {} {}]

const arr = [1, 2, 3, 4 ,10]
for (const num of arr) {
   // console.log(num);
    
}


const greet = "hello world!"
for (const aim of greet) {
   // console.log(aim);
    
} 


// +++++++++++ MAPS ++++++++++++

const map = new Map()             // they contain unique identity
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map);

for (const ot of map) {
   // console.log(map);
    
}

for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}


const myobject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobject) {              // in object we are using (for in) loop
  // console.log(myobject[key]);
   
}



// ++++++++++++++++++ for each loop (imp) +++++++++++++++

const coding = ["js", "c++", "java"]

coding.forEach( function (val){                  // callback ka kaaran fun() ka naam nhi hota
   // console.log(val);
     
})

coding.forEach( (item) =>{                  // arrow fun()
   // console.log(item);
     
})

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
    
})




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Cpp",
        languageFileName: "C++"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item);
    
})
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})