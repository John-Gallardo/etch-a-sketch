/* HTML / CSS Logic */
const gridSize = 16;
const container = document.querySelector(".container");

function createGrid() {
    let squareDiv, row;
    for (let i = 0; i < gridSize; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            squareDiv = document.createElement("div");
            squareDiv.style["border"] = "solid black 2px";
            squareDiv.style["padding"] = "5px";
            row.appendChild(squareDiv);
        }
    }
}

createGrid();