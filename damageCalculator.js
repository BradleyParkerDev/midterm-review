let character1 = {
    name: 'Cloud',
    atk: 100,
    def: 90
}
  
let character2 = {
    name: 'Sephiroth',
    atk: 150,
    def: 50
}

console.log(damageCalculator(character1, character2));
console.log(damageCalculator(character2, character1));

function damageCalculator(char1, char2){
    let damage = Number(char1.atk) - Number(char2.def);
    if(damage <= 0){
        return "NO DAMAGE!"
    }
    else{
        return damage;
    }
}


