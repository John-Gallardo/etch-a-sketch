/* HTML / CSS Logic */
const gridSize = 16;
const container = document.querySelector(".container");

function createGrid() {
    let squareDiv;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            container.appendChild(squareDiv);
        }
    }
}

function containerLogic(event) {
    let hoverTarget = event.target;
    if (hoverTarget != container)
        hoverTarget.classList.add("hovered");
}


container.addEventListener("mouseover", containerLogic);

/* Function Calls */

createGrid();