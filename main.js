const message = document.querySelector('.message');
const score = document.querySelector('.score');
const winnerScores = [0, 0];

function playGame() {
    let randOptions = ["Rock", "Paper", "Scissors"]
    let compSelection = Math.floor(Math.random() * randOptions.length)
    // player's selection
    let playerSelection = event.target.value;
    //setup a random number to select for computerplayGame(e)

    let computerSelection = randOptions[compSelection];

    // compare winners and return result
    let result = checkWinner(playerSelection, computerSelection);


    if (result === 'Player') {
        result += ' wins, Computer looses!';
        //update score
        winnerScores[0]++;
    }

    if (result === 'Computer') {
        result += ' wins, Player looses!';
        winnerScores[1]++;
    }

    if (result === 'Draw') {
        result += '. It\'s a tie!'
    }

    score.innerHTML = 'Player:<strong>  ' + winnerScores[0] + ' </strong> Computer: <strong> ' + winnerScores[1] + ' </strong>';

    messenger('Player:  <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    }

    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper') {
        if (computer === 'Scissors') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}