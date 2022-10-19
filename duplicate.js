myArray1 = ['hi', 'wow', 'hey', 'hi'];
myArray2 = ['one', 'two', 'three'];
myArray3 = [1,7,32,1,10,2,11]

console.log(duplicate(myArray1));
console.log(duplicate(myArray2));
console.log(duplicate(myArray3));

function duplicate(arr){
    let counter = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[0] === arr[i]){
            counter++;
        }
    }
    if(counter > 0){
        return true;
    }
    else{
        return false;
    }
}

