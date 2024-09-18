// Iterations means for loop

for(let i=0; i<=10; i++)
{
    const element = i
    if (element == 5)
    {
       // console.log("its great");
    }
    //console.log(element);
    
}


for(let i=0; i<10; i++)
{
    //console.log(`Outer loop value: ${i}`);
    
    for(let j=0; j<10; j++)
    {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);

        //console.log(i + '*' + j + '=' + i*j);
    }
}


for(let i=0; i<10; i++)
{
    //console.log(`ans: ${i}`);
    
}


// +++++++++++ Array ++++++++++++++

let myArray = ['flash', 'batman', 'spider-man']
//console.log(myArray.length);

for(let i=0; i<myArray.length; i++ )
{
    const element = myArray[i];
    //console.log(element);
}



//   Break and Continue

for(let i=0; i<=20; i++)
{
     if(i == 5)
     {
       // console.log('Detected 5');
        break                                   // break mtlb hota hai ki agrr ek baar detect hoo gyaa too aage execute nhi krega
     }
     //console.log(`value of index is ${i}`);
     
}

for(let i=0; i<=20; i++)
    {
         if(i == 5)
         {
            //console.log('Detected 5');
            continue                                  // continue mtlb hota hai ki agrr ek baar detect hoo gyaa too bhii aage process krega
         }
         //console.log(`value of index is ${i}`);
         
    }









    // ++++++++++++++++++++ while do while loop +++++++++++++++

    let index = 0
    while(index <= 10)
    {
       // console.log(`Value of index is ${index}`);
        index = index + 2
    } 


    let myArrays = ['flash', 'batman', 'spider-man']

    let arr = 0      // arr is a variable

    while(arr < myArrays.length)
    {
        console.log(`Value is ${myArrays[arr]}`);
        arr++
        
    }


  // +++++++++++ do while ++++++++

    let score = 1

    do{                                              // isma pehla kaam krta hai phir condition check krta hai
        console.log(`value of score is ${score}`);
        score++
    } while(score <= 10)


    

        let scores = 11

        do{
            console.log(`value of score is ${score}`);
            score++
        } while(score <= 10)    


