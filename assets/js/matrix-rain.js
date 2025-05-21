// Matrix Rain Animation - Customized
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let animationColor = getComputedStyle(document.documentElement)
                        .getPropertyValue('--secondary-accent').trim() || '#00FF7F';
if (animationColor === "") { // Fix for Edge returning empty string if var not found
    animationColor = '#00FF7F';
}


// Characters to use
let chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789";
chars = chars.split('');

const fontSize = 12; // Adjusted font size
let columns = Math.floor(canvas.width / fontSize); // 'let' to allow recalculation

let drops = []; // 'let' to allow reinitialization
function initializeDrops() {
    drops = []; // Clear existing drops
    columns = Math.floor(canvas.width / fontSize); // Recalculate columns
    for (let x = 0; x < columns; x++) {
      drops[x] = 1 + Math.floor(Math.random() * (canvas.height / fontSize)); // Random start
    }
}
initializeDrops(); // Initial setup

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'; // Adjusted for longer trails
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Re-fetch color in draw loop in case it changes dynamically via CSS
  // This is more responsive than only at start/resize.
  const currentThemeColor = getComputedStyle(document.documentElement)
                        .getPropertyValue('--secondary-accent').trim();
  if (currentThemeColor && currentThemeColor !== "") {
      animationColor = currentThemeColor;
  } else if (animationColor === "") { // Fallback if it became empty
      animationColor = '#00FF7F';
  }


  ctx.fillStyle = animationColor;
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    if (!drops[i]) continue; // Skip if drop is undefined (e.g. during resize)
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) { // Adjusted reset condition
      drops[i] = 0;
    }
    drops[i]++;
  }
}

let animationFrameId = null;
function animate() {
  draw();
  animationFrameId = requestAnimationFrame(animate);
}

function startAnimation() {
    if (!animationFrameId) {
        animate();
    }
}

function stopAnimation() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
}

window.addEventListener('resize', () => {
  stopAnimation();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initializeDrops(); // Re-initialize drops for new dimensions
  startAnimation();
});

// Initial start
startAnimation();
