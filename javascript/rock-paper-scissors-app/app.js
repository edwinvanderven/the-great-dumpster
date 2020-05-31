const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const matchScreen = document.querySelector('.match');

    playButton.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      matchScreen.classList.add('fadeIn');
    });
  };

  const playMatch = () => {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');
    hands.forEach((hand) => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      });
    });

    options.forEach((option) => {
      option.addEventListener('click', function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          updateScore();
  
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        // reset hands to rock while animating
        playerHand.src = './assets/rock.png';
        computerHand.src = './assets/rock.png';

        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }

    const playerWins = isPlayerWinner(playerChoice, computerChoice);
    winner.textContent = playerWins ? 'Player wins' : 'Computer wins';
    if (playerWins) {
      pScore++;
    } else {
      cScore++;
    }
  };

  const isPlayerWinner = (player, computer) => {
    if (player === 'rock' && computer === 'scissors') {
      return true;
    }
    if (player === 'scissors' && computer === 'paper') {
      return true;
    }
    if (player === 'paper' && computer === 'rock') {
      return true;
    }
    return false;
  };

  startGame();
  playMatch();
};

game();