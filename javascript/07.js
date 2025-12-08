// OBJECTS

let phone = {
    Company : 'Apple',
    Model : 'IPhone 17 Pro Max',
    Colour : 'Cosmic Orange',
    Price : '1,40,000',
    Storage : '1TB',
    ratings : {
        Starts : 4.8,
        noofViwers : '92%'
    },
    displayPrice: function(){
        return `Price of the Phone is ₹${phone.Price}`
    },
    displayModel: function(){
        return `And Model of the Phone is ${phone.Model}`
    }
}
// console.log(phone);
// console.log(phone.Price);
// phone.Company = 'Samsung';
// delete phone.Company;
// phone.CE0 = 'Tim Cook'
// phone.AvailableAt = 'Imagine MosaaramBagh'
// phone.ratings.liked = '95%'
// delete phone.ratings.liked;
// console.log(phone);
console.log(phone.displayPrice(), phone.displayModel());