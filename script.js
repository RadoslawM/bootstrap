//let names = ['Ania','Ewelina','Karina','Elina'];
//
//console.log(names);
//names.push('Andromeda','Natasha');
//
//let startIndex = names.indexOf('Ewelina'); console.warn('shold be ${1} and get', startIndex);
//startIndex += 2;
//
//let newNames =names.slice(startIndex,names.indexOf ('Natasha'));
//console.warn('sholud be Elina and Andromeda', newNames);
//newNames.unshift('Shepard');
//
//console.log(names, newNames, newNames[1] === names[3]);
//
//
//
//let number = [];
//
//for(let i=1; i <=35; i++){
//
//    number.push(i);
//    console.log(number);
//
//}
//
//console.log()
//for(let i=1; i<=number.length; i++){
//if(i<15){
//    console.log(i);
//}
//if(i>=15 && i<=26) {
//    console.log('continue');
//continue;
//}
//if (i> 25 && i % 2 === 0){
//    console.warn(i);
//}
//if(i === 31){
//    console.log('break');
//    break;
//}
//
//console.log('Iteration', i);
//}
//
////next task
//
//let hero = {
//    strength: +Number(Math.random()*100).toPrecision(4),
//    knowledge: 'intelligence',
//    stamina: +Number(Math.random()*100).toPrecision(4)
//};
//
//let enemy = {
//    strength: +Number(Math.random()*100).toPrecision(4),
//    knowledge: 'intelligence',
//    stapmina: +Number(Math.random()*100).toPrecision(4),
//    loot: ['gold', 'silver', 'sword']
//};
//
//if(hero.strength > enemy.strength){
//    for(let i=0; i < enemy.loot.length; i++){
//        if(enemy.loot[i] === 'gold') {
//            console.warn('GOLD!!!');
//        }
//    }       
//}else{
//    console.warn('you died');
//}
//
////next tesk
//
//let a = new String('STRElanger THinevgsen');
//let b = new String('STRElanger THinevgsen');
//let c = b;
//
//if(a === b){
//    //never reached
//}else{   
//    console.error("poor me");
//}
//if (c === b){
//        let result = a.slice(3, 5) + a.slice(15,17) + a.slice(19,21);
//        console.warn(`I am ${result}`);
//    }
//
//// next task
//
let groundZerg = {
    power: 10,
    health: 10,
    armor: 10,
    range: 1
}

let flyingZerg = {
    power: 10,
    health: 10,
    armor: 10,
    range: 10
}
//
function evolutionPool(zerg, evolutionMethod){
evolutionMethod(zerg);
}

function groundEvolutionMethod(zerg) {
    if(zerg.range !== 1){
        return;
    }
        zerg.armor +=10;
        zerg.health +=10; 
}


function flyingEvolutionMethod(zerg) {
    if(zerg.range <= 1){
        return;
    }
        zerg.power +=5;
        zerg.range +=5; 
}

evolutionPool(groundZerg, groundEvolutionMethod);
evolutionPool(flyingZerg, groundEvolutionMethod);
evolutionPool(groundZerg, flyingEvolutionMethod);

console.log(groundZerg, flyingZerg);
    

var name = 'Ania';
function test(){
console.log(name);
var name ='Kasia';
}

test();
