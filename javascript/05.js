// Functions
// function randomMove(){
//     let randomValue = Math.random() * 3;
//     let randomNum = randomValue * 3;
//     return randomNum;
// }
// console.log(randomMove());

// function validAge(){
//     let age = 32
//     if(age === undefined){
//         return 'Aap Bail Ke Paanchve Hai'
//     }
//     if(age > 18){
//         return 'You can Drive'
//     } else {
//         return 'You cant Drive'
//     }
// }
// console.log(validAge());

// function addSum(a,b){
//     let addSum = a + b;
//     return addSum;
// }
// console.log(addSum(10,5));

function greeting(name = 'Hussain'){
    return `${name} Namaste Ji`
}
console.log((greeting('Suleiman')));