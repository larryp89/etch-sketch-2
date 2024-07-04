const GRID_WIDTH = 550;
const GRID_HEIGHT = 550;
const container = document.querySelector(".container");
const updateBtn = document.querySelector("#update-button");
const resetBtn = document.querySelector("#reset-button");
let gridSize = 16;

// generate grid with 16 squares to begin with
function generateGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "new-div");
    newDiv.style.width = `${GRID_WIDTH / size}px`;
    newDiv.style.height = `${GRID_WIDTH / size}px`;
    container.appendChild(newDiv);
  }
  addHover();
}

function getUserChoice() {
  let size;
  do {
    let input = prompt("Choose a grid size (e.g., 16 for a 16x16 grid): ");
    size = parseInt(input);
    if (isNaN(size) || size <= 0 || size > 100) {
      alert("Please enter a valid number between 1 and 100.");
    }
  } while (isNaN(size) || size <= 0 || size > 100);

  return size;
}

function updateGrid() {
  let newSize = getUserChoice();
  container.innerHTML = "";
  generateGrid(newSize);
}

function generateRandomColour() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

// add hover effect to all divs
function addHover() {
  newDivs = document.querySelectorAll(".new-div");
  for (const div of newDivs) {
    div.addEventListener("mouseover", function () {
      let randomColour = generateRandomColour();
      div.style.backgroundColor = `rgb(${randomColour.r}, ${randomColour.g}, ${randomColour.b})`;
    });
  }
}

function resetColour(){
    allDivs = document.querySelectorAll(".new-div")
    for (const div of allDivs) {
        div.style.backgroundColor = "white"}

}

generateGrid(gridSize);
updateBtn.addEventListener("click", updateGrid);
resetBtn.addEventListener("click", resetColour)

