/* Game over screen */

const winnerName = document.querySelector('#winner');
const winnerImage = document.getElementById('winner-img');

if (localStorage.getItem('winner') === 'Player 1') {
    winnerName.innerHTML += localStorage.getItem('winner');
    winnerImage.innerHTML += '<img src="images/characters/' + localStorage.getItem('player_one_id') + '.png">';

} else {
    winnerName.innerHTML += localStorage.getItem('winner');
    winnerImage.innerHTML += '<img src="images/characters/' + localStorage.getItem('player_two_id') + '.png">';
};

//canvas

const push_text = 0.8;
let canvas = document.querySelector('#credits');
let ctx = canvas.getContext('2d');
ctx.font = '28px Walter Turncoat'
let x = 500;
let content = 'Thank you for playing "Fall of The Wall! Design, coding, images and music by Sondre Nordjore 2020';
let textWidth = ctx.measureText(content).width;
ctx.fillStyle = '#e6e4e4';
ctx.fillText(content, x, 50);

window.requestAnimationFrame(animateContent);
function animateContent() {
    ctx.clearRect (0,0,500,50);
    if (x > -textWidth) {
        x = x - push_text;
    } else {
        x = 500;
    }
    ctx.fillText(content, x, 35);
    window.requestAnimationFrame(animateContent);
}