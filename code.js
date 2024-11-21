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
      cellElement.addEventListener("click", () => handleCellClick(index)); //Adds event listener and calls handleCellClick with attrib. index when clicked

      boardContainer.appendChild(cellElement);
    });

  }

  let currentPlayer = "X"; // Start with player X

  function handleCellClick(index) {
    // If the cell is already filled, do nothing
    if (gameBoard[index] !== "") return;
  
    // Update the board with the current player's mark
    gameBoard[index] = currentPlayer;
  
    // Check for a win before switching the player
    if (checkWin()) {
      setTimeout(() => alert(`${currentPlayer} wins!`), 100); // Notify the winner
      resetGame(); // Restart the game
      return;
    }
  
    // Check for a draw
    if (checkDraw()) {
      setTimeout(() => alert(`It's a draw!`), 100); // Notify a draw
      resetGame(); // Restart the game
      return;
    }
  
    // Switch to the other player only after checks
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  
    // Re-render the board
    renderBoard();
  }
  
  
  
  
  renderBoard();

  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal (top-left to bottom-right)
    [2, 4, 6], // Diagonal (top-right to bottom-left)
  ];

  function checkWin() {
    return winningCombinations.some((combination) => {
      const [a, b, c] = combination; // Destructure indices of the combination
      return (
        gameBoard[a] !== "" && // Ensure the cell isn't empty
        gameBoard[a] === gameBoard[b] && // Check all three cells match
        gameBoard[a] === gameBoard[c]
      );
    });
  }
  

  function checkDraw() {
    return gameBoard.every((cell) => cell !== ""); // True if no empty cells
  }
  
  function resetGame() {
    gameBoard.fill(""); // Clear the game board
    currentPlayer = "X"; // Reset to Player X
    renderBoard(); // Re-render the board
  }
  