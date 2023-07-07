const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const canvasNext = document.getElementById("next");
const ctxNext = canvasNext.getContext("2d");

let accountValues = {
  score: 0,
  level: 0,
  lines: 0,
};

function updateAccount(key, value) {
  let element = document.getElementById(key);
  if (element) {
    element.textContent = value;
  }
}

let account = new Proxy(accountValues, {
  set: (target, key, value) => {
    target[key] = value;
    updateAccount(key, value);
    return true;
  },
});

let requestId = null;
let time = null;

const moves = {
  [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1 }),
  [KEY.SPACE]: (p) => ({ ...p, y: p.y + 1 }),
  [KEY.UP]: (p) => board.rotate(p, ROTATION.RIGHT),
  [KEY.Q]: (p) => board.rotate(p, ROTATION.LEFT),
};

let board = new Board(ctx, ctxNext);

initNext();

function initNext() {
  // Calculate size of canvas from constants.
  ctxNext.canvas.width = 4 * BLOCK_SIZE;
  ctxNext.canvas.height = 4 * BLOCK_SIZE;
  ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
}

function addEventListener() {
  document.removeEventListener("keydown", handleKeyPress);
  document.addEventListener("keydown", handleKeyPress);
}

function listenForScrollDown() {
  document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      // Simula la pulsación de la tecla abajo
      handleKeyPress({ keyCode: KEY.DOWN, preventDefault: () => {} });
    }
  });
}

listenForScrollDown();

function handleKeyPress(event) {
  if (event.keyCode === KEY.P) {
    pause();
  }
  if (event.keyCode === KEY.ESC) {
    gameOver();
  } else if (moves[event.keyCode]) {
    event.preventDefault();
    // Get new state
    let p = moves[event.keyCode](board.piece);
    if (event.keyCode === KEY.SPACE) {
      // Hard drop
      if (document.querySelector("#pause-btn").style.display === "block") {
        dropSound.play();
      } else {
        return;
      }

      while (board.valid(p)) {
        account.score += POINTS.HARD_DROP;
        board.piece.move(p);
        p = moves[KEY.DOWN](board.piece);
      }
      board.piece.hardDrop();
    } else if (board.valid(p)) {
      if (document.querySelector("#pause-btn").style.display === "block") {
        movesSound.play();
      }
      board.piece.move(p);
      if (
        event.keyCode === KEY.DOWN &&
        document.querySelector("#pause-btn").style.display === "block"
      ) {
        account.score += POINTS.SOFT_DROP;
      }
    }
  }
}

function resetGame() {
  highScores();
  account.score = 0;
  account.lines = 0;
  account.level = 0;
  getInputLevel();
  board.reset();
  time = { start: performance.now(), elapsed: 0, level: LEVEL[account.level] };
}

function play() {
  addEventListener();
  if (document.querySelector("#play-btn").style.display == "") {
    resetGame();
  }

  // If we have an old game running then cancel it
  if (requestId) {
    cancelAnimationFrame(requestId);
  }

  animate();
  document.querySelector("#play-btn").style.display = "none";
  document.querySelector("#pause-btn").style.display = "block";
  backgroundSound.play();
}

function animate(now = 0) {
  time.elapsed = now - time.start;
  if (time.elapsed > time.level) {
    time.start = now;
    if (!board.drop()) {
      gameOver();
      return;
    }
  }

  // Clear board before drawing new state.
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  board.draw();
  requestId = requestAnimationFrame(animate);
}

function gameOver() {
  cancelAnimationFrame(requestId);

  ctx.fillStyle = "black";
  ctx.fillRect(1, 3, 8, 1.2);
  ctx.font = "1px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("GAME OVER", 1.8, 4);

  sound.pause();
  finishSound.play();

  document.querySelector("#pause-btn").style.display = "none";
  document.querySelector("#play-btn").style.display = "";
}

let select = document.querySelector("select");
select.addEventListener("change", pause);

function pause() {
  if (!requestId) {
    document.querySelector("#play-btn").style.display = "none";
    document.querySelector("#pause-btn").style.display = "block";
    animate();
    backgroundSound.play();
    return;
  }

  cancelAnimationFrame(requestId);
  requestId = null;

  let election = select.value;
  if (election === "light") {
    ctx.fillStyle = "black";
    ctx.fillRect(1, 3, 8, 1.2);
    ctx.font = "1px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("PAUSED", 3, 4);
    document.querySelector("#play-btn").style.display = "block";
    document.querySelector("#pause-btn").style.display = "none";
    sound.pause();
  } else {
    ctx.fillStyle = "#223c3e";
    ctx.fillRect(1, 3, 8, 1.2);
    ctx.font = "1px Arial";
    ctx.fillStyle = "#dde2c1";
    ctx.fillText("PAUSED", 3, 4);
    document.querySelector("#play-btn").style.display = "block";
    document.querySelector("#pause-btn").style.display = "none";
    sound.pause();
  }
}

var highScore = parseFloat(localStorage.getItem("highScore-2"));

function highScores() {
  highScore = highScore > account.score ? highScore : account.score;
  localStorage.setItem("highScore-2", highScore);
  return highScore;
}

document.getElementById("highScore-2").innerHTML = highScores();

function getInputLevel() {
  // Get the input element
  var input = document.getElementById("setLevel");

  // Get the value entered in the input field
  var inputValue = input.value;

  // You can now use the "inputValue" variable in your code to do whatever you want with it
  account.level = inputValue;

  // Adding a limit
  if (account.level < 1) account.level = 1;
  if (account.level > 20) account.level = 20;
}