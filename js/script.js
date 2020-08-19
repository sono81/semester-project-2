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

const wrapper = document.querySelector('.wrapper');
const playerSelectInfo = document.querySelector('.info');
const card = document.querySelector('.character');
let charactersSelected = 0;

function getData(characters) {
    var cards = '';
    playerSelectInfo.innerHTML += `<h1>Select character</h1>
                                    <p>Player${charactersSelected+1}</p>`
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

//function selectCard(card, charactersSelected){
//    card.style.border = '5px solid green';
//
//    if (card.style.border == '5px solid green') {
//        playerSelectInfo.innerHTML = `<h1>Select character</h1>
//                                    <p>Player2</p>`
//    }
//}