const prompt = require('prompt-sync')({sigint:true});

let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];

console.log(foundCat(catArray));
console.log(foundCat(noCatArray));

function foundCat(arr){
    // if(arr.includes("cat")){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    let cat = '';
    for(let i = 0; i < arr.length; i++){ 
        if(arr[i] === "cat"){
            cat = "cat";
        }  
    }
    if(cat === "cat"){
        return true;
    }
    else{
        return false;
    }
}
