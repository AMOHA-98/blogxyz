// Pixel Growth Evo Background - With Evolution/Variation
const canvasPixelEvo = document.getElementById('matrix-canvas'); // Reusing the same canvas ID
const ctxPixelEvo = canvasPixelEvo.getContext('2d');

let gridWidth, gridHeight, cellSize, grid, nextGrid, ageGrid, nextAgeGrid;

// --- Cell States & Strains ---
const EMPTY = 0;
const STRAIN_0 = 1; // Represents actual strain 0
const STRAIN_1 = 2; // Represents actual strain 1
const STRAIN_2 = 3; // Represents actual strain 2
const NUM_STRAINS = 3; 

const strainColors = {
    [EMPTY]: '#000000', // Not directly drawn, background is cleared
    [STRAIN_0]: '#FFFFFF',
    [STRAIN_1]: '#E0E0E0',
    [STRAIN_2]: '#C0C0C0'
};

// --- Configuration ---
cellSize = 3; // Size of each cell/pixel cube in pixels
const updateInterval = 750; // Milliseconds between simulation updates
const maxAge = 30;         // Max simulation steps an ALIVE cell can live
const mutationRate = 0.01; // 5% chance of mutation

function initializeSimulation() {
    canvasPixelEvo.width = window.innerWidth;
    canvasPixelEvo.height = window.innerHeight;

    gridWidth = Math.floor(canvasPixelEvo.width / cellSize);
    gridHeight = Math.floor(canvasPixelEvo.height / cellSize);

    grid = createGrid(gridWidth, gridHeight, EMPTY);
    nextGrid = createGrid(gridWidth, gridHeight, EMPTY);
    ageGrid = createGrid(gridWidth, gridHeight, 0);
    nextAgeGrid = createGrid(gridWidth, gridHeight, 0);

    seedGrid(); // Start with a few more seeds
}

function createGrid(width, height, defaultValue) {
    let newGrid = [];
    for (let y = 0; y < height; y++) {
        newGrid[y] = [];
        for (let x = 0; x < width; x++) {
            newGrid[y][x] = defaultValue;
        }
    }
    return newGrid;
}

function seedGrid() { // Takes no arguments now
    const numSeedsToPlace = Math.max(1, Math.floor(gridHeight * 0.05)); // Seed ~5% of height, min 1
    const seedXPosition = 1; // Column index for seeding (0 is very edge, 1 is next to it)

    for (let i = 0; i < numSeedsToPlace; i++) {
        // Distribute seeds along the left edge.
        // This tries to pick somewhat random y positions within segments of the height.
        const ySegment = gridHeight / numSeedsToPlace;
        const y = Math.floor((i * ySegment) + (Math.random() * ySegment));
        
        const finalY = Math.min(gridHeight - 1, Math.max(0, y)); // Ensure y is within bounds

        if (grid[finalY] && grid[finalY][seedXPosition] !== undefined) {
            const initialStrain = Math.floor(Math.random() * NUM_STRAINS) + 1;
            grid[finalY][seedXPosition] = initialStrain;
            ageGrid[finalY][seedXPosition] = 0;
        }
    }
}

function getNeighborInfo(x, y) {
    let aliveCount = 0;
    let parentStrain = null; 
    const neighbors = [ // Von Neumann
        [0, -1], [0, 1], [-1, 0], [1, 0]
    ];

    for (const [dx, dy] of neighbors) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight) {
            if (grid[ny][nx] !== EMPTY) {
                aliveCount++;
                if (parentStrain === null) { 
                    parentStrain = grid[ny][nx]; // Get strain from first ALIVE neighbor found
                }
            }
        }
    }
    return { aliveCount, parentStrain };
}

function updateGridLogic() {
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) { // Corrected: width should be gridWidth
            const cellState = grid[y][x];
            const cellAge = ageGrid[y][x];
            const { aliveCount, parentStrain } = getNeighborInfo(x, y);

            nextGrid[y][x] = EMPTY; // Default to EMPTY for next state
            nextAgeGrid[y][x] = 0;  // Default age for next state

            if (cellState === EMPTY) {
                // Birth Rule: Empty cell with 1 or 2 ALIVE neighbors, and a valid parent strain
                if (aliveCount >= 1 && aliveCount <= 2 && parentStrain !== null) {
                    let newStrain = parentStrain;
                    // Mutation: 
                    if (Math.random() < mutationRate) {
                        const mutationDirection = Math.random() < 0.5 ? -1 : 1;
                        // Strains are 1-indexed (STRAIN_0 = 1, etc.)
                        // (current_strain_value - 1 + direction + total_strains) % total_strains gives 0-indexed new strain
                        // Then add 1 to make it 1-indexed again.
                        newStrain = ((parentStrain - 1 + mutationDirection + NUM_STRAINS) % NUM_STRAINS) + 1;
                    }
                    nextGrid[y][x] = newStrain;
                    nextAgeGrid[y][x] = 0; // Newborn cell has age 0
                }
            } else { // Cell is ALIVE (some strain)
                // Survival/Death conditions for ALIVE cells
                if (aliveCount === 0 || aliveCount >= 4) { // Dies if 0 neighbors (isolation) or 4+ neighbors (overcrowding)
                    // Becomes EMPTY, age resets via default nextAgeGrid[y][x] = 0 (already set before this block);
                }
                // Death by Old Age (applies only if not already dead by neighbor count)
                else if (cellAge >= maxAge) {
                    // Becomes EMPTY, age resets via default nextAgeGrid[y][x] = 0;
                }
                // Survival (1, 2, or 3 neighbors and not too old)
                else {
                    nextGrid[y][x] = cellState;       // Stays alive with current strain
                    nextAgeGrid[y][x] = cellAge + 1;  // Increment age
                }
            }
        }
    }

    // Swap grid buffers
    let tempGrid = grid;
    grid = nextGrid;
    nextGrid = tempGrid;

    let tempAgeGrid = ageGrid;
    ageGrid = nextAgeGrid;
    nextAgeGrid = tempAgeGrid;
}

function drawGrid() {
    ctxPixelEvo.fillStyle = '#000000';
    ctxPixelEvo.fillRect(0, 0, canvasPixelEvo.width, canvasPixelEvo.height);

    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) { // Corrected: width should be gridWidth
            const cellState = grid[y][x];
            if (cellState !== EMPTY) {
                ctxPixelEvo.fillStyle = strainColors[cellState] || '#FF00FF'; // Fallback color if strain undefined
                ctxPixelEvo.fillRect(x * cellSize, y * cellSize, cellSize, cellSize); // -1 for grid line
            }
        }
    }
}

// --- Animation Loop & Control ---
let lastUpdateTime = 0;
let animationFrameIdPixelEvo = null;

function gameLoop(timestamp) {
    if (timestamp - lastUpdateTime >= updateInterval) {
        updateGridLogic();
        drawGrid();
        lastUpdateTime = timestamp;
    }
    animationFrameIdPixelEvo = requestAnimationFrame(gameLoop);
}

function startPixelEvoAnimation() {
    if (animationFrameIdPixelEvo) {
        cancelAnimationFrame(animationFrameIdPixelEvo);
    }
    initializeSimulation();
    lastUpdateTime = performance.now();
    gameLoop(lastUpdateTime);
}

function stopPixelEvoAnimation() {
    if (animationFrameIdPixelEvo) {
        cancelAnimationFrame(animationFrameIdPixelEvo);
        animationFrameIdPixelEvo = null;
    }
}

let resizeTimeoutPixelEvo;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeoutPixelEvo);
    resizeTimeoutPixelEvo = setTimeout(() => {
        stopPixelEvoAnimation();
        startPixelEvoAnimation(); // This will re-initialize everything
    }, 250);
});

// Auto-start the animation
startPixelEvoAnimation();
