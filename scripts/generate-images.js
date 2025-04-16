const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'retail-sales.jpg',
    title: 'Retail Sales Analytics',
    color: '#4A90E2'
  },
  {
    name: 'ecommerce.jpg',
    title: 'E-commerce Analytics',
    color: '#50E3C2'
  },
  {
    name: 'tableau.jpg',
    title: 'Tableau Visuals',
    color: '#5C6BC0'
  }
];

const width = 800;
const height = 600;

function generateImage(config) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = config.color;
  ctx.fillRect(0, 0, width, height);

  // Add some visual elements
  ctx.fillStyle = '#ffffff20';
  for (let i = 0; i < 5; i++) {
    const size = Math.random() * 200 + 100;
    const x = Math.random() * width;
    const y = Math.random() * height;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(config.title, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  const outputPath = path.join(__dirname, '..', 'src', 'assets', 'images', 'portfolio', config.name);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated ${config.name}`);
}

// Create directory if it doesn't exist
const portfolioDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'portfolio');
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

// Generate all images
images.forEach(generateImage);
