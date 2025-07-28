// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/api/combos', (req, res) => {
  fs.readFile('./combos.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Error reading data' });
    const combos = JSON.parse(data);
    res.json(combos);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
