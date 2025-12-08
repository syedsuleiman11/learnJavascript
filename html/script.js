// let quantity = 0;
// document.querySelector('.Wel').innerHTML = `Your bag has ${quantity} items`;

// let phone = {
//     Company : 'Apple',
//     Model : 'IPhone 17 Pro Max',
//     Colour : 'Cosmic Orange',
//     Price : '1,40,000',
//     Storage : '1TB',
//     ratings : {
//         Starts : 4.8,
//         noofViwers : '92%'
//     }
// }

// localStorage.setItem('SRK', 'KING');
// console.log(localStorage.getItem('SRK'));

// localStorage.setItem('phone',JSON.stringify(phone));
// console.log(localStorage.getItem('phone'));
// localStorage.clear();

// let myDate = new Date();
// console.log(myDate);

let numofClicks = localStorage.getItem('numofClicks') || 0;
function buttonClick() {
    numofClicks++;
    localStorage.setItem('numofClicks', numofClicks)
    updateBtn();
}

function updateBtn() {
    let button = document.querySelector('#my-button')
    if (numofClicks % 2 === 0) {
        button.classList.remove('odd');
        button.classList.add('even');
    } else {
        button.classList.remove('even');
        button.classList.add('odd');
    }
    button.innerText = numofClicks;
}
updateBtn();

function greeting(personName) {
    let date = new Date();
    // console.log(date);

    let hrs = date.getHours();
    let title = document.querySelector('#greeting');
    // console.log(hrs);

    if (hrs > 5 && hrs < 12) {
        title.innerText = `Good Morning ${personName}`;
    } else if (hrs > 12 && hrs < 18) {
        title.innerText = `Good Afternoon ${personName}`;
    } else {
        title.innerText = `Good Night ${personName}`;
    }
}
greeting('Suleiman');

let btnEle = document.querySelector('.click');
let whenClicked = () => console.log('Clicked Hogaye Bhaiya');
btnEle.addEventListener('click', whenClicked);

let printDate = () => console.log(new Date());
btnEle.addEventListener('click', printDate);

btnEle.removeEventListener('click', printDate)