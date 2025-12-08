// JSON
let phone = {
    Company : 'Apple',
    Model : 'IPhone 17 Pro Max',
    Colour : 'Cosmic Orange',
    Price : '1,40,000',
    Storage : '1TB',
    ratings : {
        Starts : 4.8,
        noofViwers : '92%'
    }
}
let str = JSON.stringify(phone);
console.log(str);
let newObj = JSON.parse(str)
console.log(newObj);
