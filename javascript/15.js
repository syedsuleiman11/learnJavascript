// SEARCHING IN ARRAYS THOROUGH LOOPS

let arr = [1,34,5,4,2,7,890,9,10];
for(let i = 0; i < arr.length; i++){
    if(i === 8){
        console.log(`Num Found @ Index ${i}`);
        break;
    }
    console.log('Still looking');
}