// Creates the board array

const gameBoard = ["","","","","","","","",""]

// Grabs the board container

const boardContainer = document.getElementById('game-board');

// Function to render the grid
function renderBoard() {
    boardContainer.innerHTML = ""; // Clear the board
    gameBoard.forEach((cell, index) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.textContent = cell; // Populate the cell with current value
      cellElement.dataset.index = index; // Set data attribute for reference
      boardContainer.appendChild(cellElement);
    });
  }
  
  renderBoard();