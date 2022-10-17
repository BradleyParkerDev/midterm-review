let str1 = 'string';
let str2 = 'wow';
let str3 = 'hello world'

console.log(stringSpace(str1));
console.log(stringSpace(str2));
console.log(stringSpace(str3));

function stringSpace(str){
    let newString = '';
    let myArray = []
    // for(let i = 0; i < str.length; i++){
    //     myArray.push(str[i]);
    // }
    // newString = myArray.join(" ");
    // return newString;

    for(let i = 0; i < str.length; i++){
        if(i < (str.length-1)){
            newString = newString + str[i] + " ";
        }
        else{
            newString = newString + str[i]
        }
    }
    //console.log(newString.length);
    return newString;
}