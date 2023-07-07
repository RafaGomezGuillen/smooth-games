class Piece {
  constructor(ctx) {
    this.ctx = ctx;
    this.spawn();
  }

  spawn() {
    this.typeId = this.randomizeTetrominoType(COLORS.length - 1);
    this.shape = SHAPES[this.typeId];
    this.color = COLORS[this.typeId];
    this.x = 0;
    this.y = 0;
    this.hardDropped = false;
  }

  // modificada
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 0.05;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
          this.ctx.strokeRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  // nueva
  drawGhost() {
    // Calculamos la posición final de la pieza si se deja caer hasta el fondo del tablero
    let x = this.x;
    let y = this.y;
    while (board.valid(moves[KEY.DOWN]({ ...this, x, y }))) {
      y++;
    }
  
    // Dibujamos la pieza con un color más claro y con bordes negros
    this.ctx.fillStyle = this.color.replace("rgb", "rgba").replace(")", ", 0.2)");
    this.ctx.strokeStyle = "black";
    this.shape.forEach((row, dy) => {
      row.forEach((value, dx) => {
        if (value > 0) {
          this.ctx.fillRect(x + dx, y + dy, 1, 1);
          this.ctx.strokeRect(x + dx, y + dy, 1, 1);
        }
      });
    });
  }
  

  move(p) {
    if (!this.hardDropped) {
      this.x = p.x;
      this.y = p.y;
    }
    this.shape = p.shape;
  }

  hardDrop() {
    this.hardDropped = true;
  }

  setStartingPosition() {
    this.x = this.typeId === 4 ? 4 : 3;
  }

  randomizeTetrominoType(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes + 1);
  }
}