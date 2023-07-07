const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const spaceButton = document.getElementById("space");

upButton.addEventListener("click", () => {
  // "up"
  document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 38 }));
});

downButton.addEventListener("click", () => {
  // "down"
  document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 40 }));
});

leftButton.addEventListener("click", () => {
  // "left"
  document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 37 }));
});

rightButton.addEventListener("click", () => {
  // "right"
  document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 39 }));
});

spaceButton.addEventListener("click", () => {
  // "space"
  document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 32 }));
});