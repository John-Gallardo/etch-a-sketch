/* HTML / CSS Logic */
let gridSize = 16;
const container = document.querySelector(".container");
const button = document.querySelector("button");
const containerSize = container.clientWidth;

function createStartGrid() {
    let squareDiv;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            container.appendChild(squareDiv);
        }
    }
}

function createGrid() {
    gridSize = prompt("New Grid Size (1-100):");
    if (gridSize > 100 || gridSize < 1)
        alert("Error: Grid Size too big or too small");
    else {
        deleteGrid();
        pixelSize = containerSize / gridSize;
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                squareDiv = document.createElement("div");
                squareDiv.setAttribute("style", `width: ${pixelSize}px; height: ${pixelSize}px`);
                container.appendChild(squareDiv);
            }
        }
    }
}

function containerLogic(event) {
    let hoverTarget = event.target;
    if (hoverTarget != container)
        hoverTarget.classList.add("hovered");
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

/* Events */
container.addEventListener("mouseover", containerLogic);
button.addEventListener("click", createGrid);

/* Function Calls */

createStartGrid();