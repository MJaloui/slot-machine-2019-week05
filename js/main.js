

//***When a User clicks a button 3 new images 
// or numbers appear on the screen. (5 images or number)

//***if there are 3 matchings the user wins money

//***if there aren't any matches the user lose money

//***The amount of money the user wins depends on if the user 
// chose a maxium or minimum bet.
// min = $10  max = 100

//***The user's wallet balance should update after a spin.

//***If the user runs out of money, an alert will present.


document.querySelector('#minBet').addEventListener('click', spinMinButton);
document.querySelector('#maxBet').addEventListener('click', spinMaxButton);

const minBet = 10;
const maxBet = 100;
let balance = 1000;


const slotImages = [
    'images/green.png',
    'images/rainbow.png',
    'images/blackandwhite.png',
    'images/pink.png',
    'images/smiley.png'
];

document.querySelector('#balance').innerText = balance;

function spinMinButton() {
    // The variable 's1' now gets its value from the new 'slotImages' array
    let s1 = slotImages[Math.floor(Math.random() * slotImages.length)];
    document.querySelector('#s1').innerHTML = `<img src="${s1}" alt="slot symbol">`;
    let s2 = slotImages[Math.floor(Math.random() * slotImages.length)];
    document.querySelector('#s2').innerHTML = `<img src="${s2}" alt="slot symbol">`;
    let s3 = slotImages[Math.floor(Math.random() * slotImages.length)];
    document.querySelector('#s3').innerHTML = `<img src="${s3}" alt="slot symbol">`;

    if (s1 === s2 && s2 === s3) {
        balance += (minBet * 2);
        document.querySelector('#balance').innerText = balance;
        alert("💰 You won $" + (minBet * 2) + "!💰");
    } else {
        balance -= minBet;
        document.querySelector('#balance').innerText = balance;
    }

    if (balance <= 0) {
        alert("😓 No more funds, sorry! 😓");
    }
}

function spinMaxButton() {
    // The variable 's1' now gets its value from the new 'slotImages' array
    let s1 = slotImages[Math.floor(Math.random() * slotImages.length)];
    document.querySelector('#s1').innerHTML = `<img src="${s1}" alt="slot symbol">`;
    let s2 = slotImages[Math.floor(Math.random() * slotImages.length)];
    document.querySelector('#s2').innerHTML = `<img src="${s2}" alt="slot symbol">`;
    let s3 = slotImages[Math.floor(Math.random() * slotImages.length)];
    document.querySelector('#s3').innerHTML = `<img src="${s3}" alt="slot symbol">`;

    if (s1 === s2 && s2 === s3) {
        balance += (maxBet * 1.5);
        document.querySelector('#balance').innerText = balance;
        alert("🎉Lets Go!!! you won!!! $" + (maxBet * 1.5) + "🎉");
    } else {
        balance -= maxBet;
        document.querySelector('#balance').innerText = balance;
    }

    if (balance <= 0) {
        alert("😭 Your balance is empty 😭");
    }
}