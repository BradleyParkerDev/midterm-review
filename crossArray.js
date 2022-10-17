const prompt = require('prompt-sync')({sigint:true});

let myArray1 = [4,5,2,6,7];
let myArray2 = [1,3,9,8,10];


console.log(crossArray(myArray1, myArray2));


function crossArray(arr1, arr2){
    let myArray3 = [];
    for(let i = 0; i < arr1.length; i++){
        myArray3.push(arr1[i]);
        myArray3.push(arr2[i]);
    }

    return myArray3;
}

