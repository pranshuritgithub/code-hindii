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



for(let i=0; i<=20; i++)
{
     if(i == 5)
     {
        console.log('Detected 5');
        break
     }
     console.log(`value of index is ${i}`);
     
}