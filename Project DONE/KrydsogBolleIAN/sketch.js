let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
//let spiligang = true;
let w; // = width / 3;
let h; // = height / 3;

let ai = 'X';
let spiller = 'O';
let currentPlayer = spiller;

function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
  bestMove();
  /*genstartKnap = createButton('Genstart');
  genstartKnap.position(100,20);
  genstartKnap.mousePressed(restart);
  genstartKnap.hide();*/
  //align.board(CENTER, CENTER)
}

function equals3(a, b, c) {
  return a == b && b == c && a != '';
}

function checkWinner() {
  let winner = null;

  // horisontalt
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertikalt
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonalt
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots == 0) {
    return 'tie';
  } else {
    return winner;
  }
}

function draw() {
  background(255);
  strokeWeight(4);
//if (spilIgang == true) {
  
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == spiller) {
        noFill();
        ellipse(x, y, r * 2);
      } else if (spot == ai) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }
//}

  let result = checkWinner();
  if (result != null) {
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');
    if (result == 'tie') {
      resultP.html('Uafgjort');
      //spilIgang = false;
            //genstartKnap.show();
    } else {
      resultP.html(`${result} vandt`);
      //spilIgang = false;
            //genstartKnap.show();
    }
    //running = false;
  }
}

/*function restart() {
  spilIgang = true;
  genstartKnap.hide();
  //running = true;
}

function nytspil() {

}*/

function mousePressed() {
  //if (currentPlayer == spiller && running) {
    // spiller tager en tur
    let i = Number(floor(mouseX / w));
    let j = Number(floor(mouseY / h));
    console.log(i);
    console.log(j);
    // Ai tager en tur
    if (board[i][j] == '') {
      board[i][j] = spiller;
      currentPlayer = ai;
      bestMove();
    }
   //} 
} 