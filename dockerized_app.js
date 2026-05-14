const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Dockerized Node.js Application!</h1>
    <p>Created by Padamuthum Michael Joshua</p>
    <p>This is my second DevOps project.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});