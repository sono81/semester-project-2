const tiles = [{
    left: 30,
    top: 30,
    id: 1
},
{
    left: 30,
    top: 130,
    id: 2
},
{
    left: 30,
    top: 230,
    id: 3
},
{
    left: 130,
    top: 230,
    id: 4
},
{
    left: 230,
    top: 230,
    id: 5
},
{
    left: 230,
    top: 330,
    id: 6
},
{
    left: 230,
    top: 430,
    id: 7
},
{
    left: 130,
    top: 430,
    id: 8
},
{
    left: 130,
    top: 530,
    id: 9
},
{
    left: 130,
    top: 630,
    id: 10
},
{
    left: 230,
    top: 630,
    id: 11
},
{
    left: 330,
    top: 630,
    id: 12
},
{
    left: 430,
    top: 630,
    id: 13
},
{
    left: 530,
    top: 630,
    id: 14
},
{
    left: 630,
    top: 630,
    id: 15
},
{
    left: 730,
    top: 630,
    id: 16
},
{
    left: 830,
    top: 630,
    id: 17
},
{
    left: 930,
    top: 530,
    id: 17
},
{
    left: 1030,
    top: 530,
    id: 18
},
{
    left: 1130,
    top: 530,
    id: 19
},
{
    left: 1230,
    top: 430,
    id: 20
},
{
    left: 1330,
    top: 430,
    id: 21
},
{
    left: 1330,
    top: 330,
    id: 22
},
{
    left: 1330,
    top: 230,
    id: 23
},
{
    left: 1230,
    top: 230,
    id: 24
},
{
    left: 1130,
    top: 130,
    id: 25
},
{
    left: 1030,
    top: 30,
    id: 26
},
{
    left: 930,
    top: 30,
    id: 27
},
{
    left: 830,
    top: 30,
    id: 28
},
{
    left: 730,
    top: 30,
    id: 29
},
{
    left: 630,
    top: 30,
    id: 30
}
]

let position = 0; //Start here
let diceValue = [];

function rollDice() {
return Math.floor(Math.random() * 6) + 1;
}

const diceImgPosition = document.querySelector('.dice-wrap');

function updateDice(roll) {
diceValue.push(roll);
diceImgPosition.innerHTML = '';
diceValue.forEach(diceNumber);
function diceNumber(number) {
    diceImgPosition.innerHTML = `${number}`;
    if (`${number}` == 1) {
        diceImgPosition.innerHTML = `<img src="/images/dice/dice_1.png" class="dice"></img>`;
    } else if (`${number}` == 2) {
        diceImgPosition.innerHTML = `<img src="/images/dice/dice_2.png" class="dice"></img>`;
    } else if (`${number}` == 3) {
        diceImgPosition.innerHTML = `<img src="/images/dice/dice_3.png" class="dice"></img>`;
    } else if (`${number}` == 4) {
        diceImgPosition.innerHTML = `<img src="/images/dice/dice_4.png" class="dice"></img>`;
    } else if (`${number}` == 5) {
        diceImgPosition.innerHTML = `<img src="/images/dice/dice_5.png" class="dice"></img>`;
    } else if (`${number}` == 6) {
        diceImgPosition.innerHTML = `<img src="/images/dice/dice_6.png" class="dice"></img>`;
    }
};
};

//create tiles
const tilesWrap = document.getElementById('tiles');

tiles.forEach(tile => {
const tileDiv = document.createElement('div');
tileDiv.className = 'tiles';
tileDiv.id = tile.id;
tileDiv.style.left = tile.left + 'px';
tileDiv.style.top = tile.top + 'px';
tilesWrap.appendChild(tileDiv);
})


// Make it move
const button = document.getElementById('btn');
const token = document.getElementById('token');

button.addEventListener('click', (e) => {
const roll = rollDice();
updateDice(roll);

if (position + roll >= tiles.length) {
    position = tiles.length - 1;
} else {
    position += roll;
}

token.style.left = tiles[position].left + 'px';
token.style.top = tiles[position].top + 'px';

if (position === tiles.length - 1) {
    setTimeout(() => alert('You Win!'), 1);
}

});