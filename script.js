const container = document.querySelector("#container");
const btn = document.querySelector("button");
let containerDimension = 800;
let numberOfSquares = 20;
let gridSquare;

function generateDivs() {
  container.style.width = containerDimension + "px";
  container.style.height = containerDimension + "px";

  for (let i = 0; i < numberOfSquares ** 2; i++) {
    let gridSquareItem = document.createElement("div");
    gridSquareItem.classList.add("gridSquare");
    gridSquareItem.style.width = containerDimension / numberOfSquares + "px";
    gridSquareItem.style.height = containerDimension / numberOfSquares + "px";
    gridSquareItem.style.opacity = "0.0";
    container.appendChild(gridSquareItem);
  }

  gridSquare = document.querySelectorAll("#container > .gridSquare");

  gridSquare.forEach((grid) => {
    grid.addEventListener("mouseover", () => {

      grid.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      
        let gridOpacity = parseFloat(grid.style.opacity);

      if (gridOpacity < 1.0) {
        gridOpacity += 0.1;
        grid.style.opacity = String(gridOpacity);
      }
      
    });
  });
}

generateDivs();

function removeDivs() {
  gridSquare.forEach((grid) => {
    grid.remove();
  });
}

function squaresPrompt() {
  numberOfSquares = prompt(
    "Please enter the number of squares on each axis:",
    numberOfSquares
  );
  return numberOfSquares;
}

btn.addEventListener("click", () => {
  let squaresInput = squaresPrompt();
  while (squaresInput <= 0 || squaresInput > 100 || squaresInput % 1 != 0) {
    alert("Error: Enter a whole number between 1-100");
    squaresInput = squaresPrompt();
  }
  removeDivs();
  generateDivs();
});
