// Element Grabs
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.getElementById("random");

// hex values for colours
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Default values
color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`;

// FUNCTIONS

// setting the new gradient and dislaying the choice on the screen
let setGradient = function () {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
};

// get random value from the hex array
let newRandomNumber = function () {
  return Math.floor(Math.random() * hex.length);
};

// getting a random hex and sets the new colours in the colour pickers
let randomColor = function () {
  let hexColor1 = "#";
  let hexColor2 = "#";

  for (let i = 0; i < 6; i++) {
    hexColor1 += hex[newRandomNumber()];
    hexColor2 += hex[newRandomNumber()];
  }

  body.style.background =
    "linear-gradient(to right," +
    (color1.value = hexColor1) +
    ", " +
    (color2.value = hexColor2) +
    ")";

  css.textContent = body.style.background + ";";
};

// listen for changes on colour pickers
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// listen for click on Random Color button
randomBtn.addEventListener("click", randomColor);
