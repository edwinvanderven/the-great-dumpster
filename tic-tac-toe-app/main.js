let origBoard;
let gameIsDone = true;
const humanPlayer = 'O';
const aiPlayer = 'X';
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
  gameIsDone = false;
  document.querySelector('.endgame').style.display = 'none';
  origBoard = Array.from(Array(9).keys());

  for( let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);
  }
}

function turnClick(event) {
  if (typeof origBoard[event.target.id] == 'number') {
    turn(event.target.id, humanPlayer);
    if (!gameIsDone && !checkTie()) {
      turn(bestSpot(), aiPlayer);
    }
  }
}

function turn(id, player) {
  origBoard[id] = player;
  document.getElementById(id).innerText = player;
  let isWinner = checkWin(origBoard, player);
  if (isWinner) {
    gameIsDone = true;
    gameOver(isWinner);
  }
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => (e == player) ? a.concat(i) : a, []);
  let gameWon = null;
  for (let [index, win] of winningCombinations.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon) {
  for (let index of winningCombinations[gameWon.index]) {
    document.getElementById(index).style.backgroundColor = gameWon.player == humanPlayer ? 'blue' : 'red';
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false);
  }

  declareWinner(gameWon.player === humanPlayer ? 'You win!' : 'You lose!')
}

function declareWinner(who) {
  document.querySelector('.endgame').style.display = 'block';
  document.querySelector('.endgame .text').innerText = who;
}

function emptySquares() {
  return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
  return minimax(origBoard, aiPlayer).index
}

function checkTie() {
  if (emptySquares().length === 0) {
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = 'green';
      cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner('Tie Game!');
    return true;
  }
  return false;
}

function minimax(newBoard, player) {
  let availableSpots = emptySquares(newBoard);
  if (checkWin(newBoard, player)) {
    return { score: -10 };
  }
  else if (checkWin(newBoard, aiPlayer)) {
    return { score: 10 };
  }
  else if (availableSpots.length === 0) {
    return { score: 0 };
  }

  let moves = [];
  for (let i = 0; i < availableSpots.length; i++) {
    let move = {};
    move.index = newBoard[availableSpots[i]];
    newBoard[availableSpots[i]] = player;

    let result;
    if (player == aiPlayer) {
      result = minimax(newBoard, humanPlayer);
      move.score = result.score;
    }
    else {
      result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    newBoard[availableSpots[i]] = move.index;
    moves.push(move);
  }

  let bestMove;
  if (player === aiPlayer) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if( moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}
