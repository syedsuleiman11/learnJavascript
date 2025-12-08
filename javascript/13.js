//ACCUMULATOR PATTERN
let num = [34,56,7,3,2,98,6];
let sum = 0;
for(let i = 0; i < num.length; i ++){
    sum += num[i];
}
console.log(sum);

let sRoot = [];
for(let i = 0; i < num.length; i++){
    sRoot.push(num[i] * num[i]);
}
console.log(sRoot);
