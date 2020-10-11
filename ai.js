function bestMove() {
    // AI tager sin tur
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // tjekker om spottet er taget
        if (board[i][j] == '') {
          board[i][j] = ai;
          let score = robot(board, 0, false);
          board[i][j] = '';
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    board[move.i][move.j] = ai;
    currentPlayer = spiller;
  }
  
  let scores = {
    X: 10,
    O: -10,
    tie: 0
  };
  
  function robot(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {
      return scores[result];
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // tjekker om spottet er tager
          if (board[i][j] == '') {
            board[i][j] = ai;
            let score = robot(board, depth + 1, false);
            board[i][j] = '';
            bestScore = max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // tjekker om spottet er taget
          if (board[i][j] == '') {
            board[i][j] = spiller;
            let score = robot(board, depth + 1, true);
            board[i][j] = '';
            bestScore = min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }