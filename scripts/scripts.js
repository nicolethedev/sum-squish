const grid = [];
const gridSize = 4;

// Initialize the grid
function initGame() {
  for (let i = 0; i < gridSize; i++) {
    grid[i] = Array(gridSize).fill(0);
  }
  addNewTile();
  addNewTile();
  renderGrid();
}

// Add a new tile to a random empty space
function addNewTile() {
  const emptySpaces = [];
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (grid[r][c] === 0) emptySpaces.push({ r, c });
    }
  }
  if (emptySpaces.length > 0) {
    const { r, c } = emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
    grid[r][c] = Math.random() < 0.9 ? 2 : 4;
  }
}

// Render the grid in the DOM
function renderGrid() {
  const container = document.getElementById('game-container');
  container.innerHTML = '';
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.textContent = grid[r][c] === 0 ? '' : grid[r][c];
      container.appendChild(tile);
    }
  }
}

// Listen for user input
document.addEventListener('keydown', handleInput);

function handleInput(event) {
  switch (event.key) {
    case 'ArrowUp':
      // Implement upward movement logic
      break;
    case 'ArrowDown':
      // Implement downward movement logic
      break;
    case 'ArrowLeft':
      // Implement leftward movement logic
      break;
    case 'ArrowRight':
      // Implement rightward movement logic
      break;
    default:
      return;
  }
  addNewTile();
  renderGrid();
}

initGame();
