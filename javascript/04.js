let age = 72;
let gender = 'male';
let finalDis = '';

if(age <= 5){
    finalDis = 100;
} else if (gender === 'female'){
    finalDis = 50; 
} else if (age <= 8){
    finalDis = 50;
} else if (age >= 65){
    finalDis = 30;
} else {
    finalDis = 0;
}
console.log(`Your Final Discount is ${finalDis}`);