
console.log(stringCompareCounter('cat','cow')); 
console.log(stringCompareCounter('count','touch')); 
console.log(stringCompareCounter('well','sell'));
 
function stringCompareCounter(str1, str2){
    let myNum = 0;

    for(let i = 0; i < str1.length; i++){
        if(str1[i] == str2[i]){
            myNum++;
        }
    }

    return myNum;
}