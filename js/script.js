fetch('https://raw.githubusercontent.com/sono81/semester-project-2/master/json/characters.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        getData(json);
    })
    .catch(function (error) {
        console.log(error);
    });


// Character Select Screen
const wrapper = document.querySelector('.wrapper');
const playerSelectInfo = document.querySelector('.info');
const card = document.querySelector('.character');
let charactersSelected = 0;

function getData(characters) {
    var cards = '';
    playerSelectInfo.innerHTML += `<h1>Select character</h1>
                                    <p>Player ${charactersSelected+1}</p>`
    for (i = 0; i < characters.length; i++) {
        cards += `<div class="character" id="character${i}" onclick="selectCard(this, ${characters[i].Id})">
                                     <img src="../images/characters/${characters[i].Id+'.png'}">
                                     <div class="info">
                                         <p class="name">${characters[i].Name}</p>
                                         <p class="culture">${characters[i].Culture}</p>
                                     </div>
                                 </div>`
    }
    document.querySelector('.wrapper').innerHTML = cards;
}

function selectCard(card, charactersId) {

    charactersSelected++

    if (charactersSelected === 1) {
        playerSelectInfo.innerHTML = `<h1>Select character</h1>
                                    <p>Player ${charactersSelected+1}</p>`
        card.style.border = '5px solid green';
        localStorage.setItem('player_one_id', charactersId);
    } else if (charactersSelected === 2) {
        card.style.border = '5px solid blue';
        localStorage.setItem('player_two_id', charactersId);
        playerSelectInfo.innerHTML = `<button id="btn_start" onclick="window.location.href = 'board.html';">Start Game</button>`;
    } else if (charactersSelected > 2) {
        card.style.border = '5px solid #3e2410';
    }
    console.log(charactersId);
    console.log('caracter' + charactersSelected);

}

// Board Game

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

let position1 = 0; //Starting position 1
let position2 = 0; //Starting position 2
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

tiles.forEach(function (tile) {
    const tileDiv = document.createElement('div');
    tileDiv.className = 'tiles';
    tileDiv.id = tile.id;
    tileDiv.style.left = tile.left + 'px';
    tileDiv.style.top = tile.top + 'px';
    tilesWrap.appendChild(tileDiv);
});


// Create buttons and make things move
const rollButton = document.getElementById('btn');
const tokenOne = document.querySelector('#token-one');
const tokenTwo = document.querySelector('#token-two');
tokenOne.style.backgroundImage = 'url(../images/tokens/' + localStorage.getItem('player_one_id') + '_btn.png)';
tokenTwo.style.backgroundImage = 'url(../images/tokens/' + localStorage.getItem('player_two_id') + '_btn.png)';
let turn = 1;


rollButton.addEventListener('click', function () {
    if (turn == 1) {
        const roll = rollDice();
        updateDice(roll);

        if (position1 + roll >= tiles.length) {
            position1 = tiles.length - 1;
        } else {
            position1 += roll;
        }

        tokenOne.style.left = tiles[position1].left + 'px';
        tokenOne.style.top = tiles[position1].top + 'px';
        if (roll == 6) {
            turn = 1;
        } else {
            turn = 2;
        }

        if (position1 === tiles.length - 1) {
            setTimeout(function () {
                alert('GG Player1!')
            }, 1);
        }
    } else {
        const roll = rollDice();
        updateDice(roll);

        if (position2 + roll >= tiles.length) {
            position2 = tiles.length - 1;
        } else {
            position2 += roll;
        }

        tokenTwo.style.left = tiles[position2].left + 'px';
        tokenTwo.style.top = tiles[position2].top + 'px';
        if (roll == 6) {
            turn = 2;
        } else {
            turn = 1;
        }

        if (position2 === tiles.length - 1) {
            setTimeout(function () {
                alert('GG Player2!')
            }, 1);
        }
    }


});