/* Game over screen */

const winnerName = document.querySelector('#winner');
const winnerImage = document.getElementById('winner-img');

if (localStorage.getItem('winner') === 'Player 1') {
    winnerName.innerHTML += localStorage.getItem('winner');
    winnerImage.innerHTML += '<img src="../images/characters/' + localStorage.getItem('player_one_id') + '.png">';
} else {
    winnerName.innerHTML += localStorage.getItem('winner');
    winnerImage.innerHTML += '<img src="../images/characters/' + localStorage.getItem('player_two_id') + '.png">';
};