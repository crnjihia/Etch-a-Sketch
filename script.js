// Select the container div
const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");

// Function to generate a random RGB color
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

// Function to create the grid
function createGrid(numSquares) {
    // Clear existing grid
    container.innerHTML = '';

    // Calculate width of each grid square
    const squareSize = 960 / numSquares;

    for (let i = 0; i < numSquares * numSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;

        // Add hover effect with random RGB color
        gridSquare.addEventListener('mouseover', function() {
            gridSquare.style.backgroundColor = getRandomColor();
        });

        container.appendChild(gridSquare);
    }
}

// Initial grid creation
createGrid(16);

// Button click event listener
resetButton.addEventListener("click", function () {
  let numSquares = prompt("Enter number of squares per side (max 100):");
  numSquares = parseInt(numSquares);
  if (numSquares > 0 && numSquares <= 100) {
    createGrid(numSquares);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
