import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.post('/compute-box', (req, res) => {
  const { length, width, height } = req.body;

  const scaleFactor = 0.005;

  const scaledLength = length * scaleFactor;
  const scaledWidth = width * scaleFactor;
  const scaledHeight = height * scaleFactor;

  const vertices = [
    { x: 0, y: 0, z: 0 },
    { x: scaledLength, y: 0, z: 0 },
    { x: scaledLength, y: scaledHeight, z: 0 },
    { x: 0, y: scaledHeight, z: 0 },
    { x: 0, y: 0, z: scaledWidth },
    { x: scaledLength, y: 0, z: scaledWidth },
    { x: scaledLength, y: scaledHeight, z: scaledWidth },
    { x: 0, y: scaledHeight, z: scaledWidth },
    { x: 0, y: scaledHeight, z: 0 },
    { x: scaledLength, y: scaledHeight, z: 0 },
    { x: scaledLength, y: scaledHeight, z: scaledWidth },
    { x: 0, y: scaledHeight, z: scaledWidth },
    { x: 0, y: 0, z: 0 },
    { x: scaledLength, y: 0, z: 0 },
    { x: scaledLength, y: 0, z: scaledWidth },
    { x: 0, y: 0, z: scaledWidth },
    { x: scaledLength, y: 0, z: 0 },
    { x: scaledLength, y: scaledHeight, z: 0 },
    { x: scaledLength, y: scaledHeight, z: scaledWidth },
    { x: scaledLength, y: 0, z: scaledWidth },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: scaledHeight, z: 0 },
    { x: 0, y: scaledHeight, z: scaledWidth },
    { x: 0, y: 0, z: scaledWidth },
  ];

  const indices = [
    0, 1, 2, 2, 3, 0,
    4, 5, 6, 6, 7, 4,
    8, 9, 10, 10, 11, 8,
    12, 13, 14, 14, 15, 12,
    16, 17, 18, 18, 19, 16,
    20, 21, 22, 22, 23, 20,
  ];

  res.json({ vertices, indices });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});