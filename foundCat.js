const prompt = require('prompt-sync')({sigint:true});

let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];

console.log(foundCat(catArray));
console.log(foundCat(noCatArray));

function foundCat(arr){
    // return (arr.includes("cat"))
    let cat = '';
    for(let i = 0; i < arr.length; i++){ 
        if(arr[i] === "cat"){
            // cat = "cat";
            return true;
        }      
    }
    return false;
}
