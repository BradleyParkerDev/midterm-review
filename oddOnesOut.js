const prompt = require('prompt-sync')({sigint:true});

let myArray1 = [1,2,1,1,3,5,1]
let myArray2 = [0,-1,5,1,5,0]
let myArray3 = [1,1,1,1,1,1]

console.log(oddOnesOut(myArray1));
console.log(oddOnesOut(myArray2));
console.log(oddOnesOut(myArray3));

function oddOnesOut(arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 1){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

