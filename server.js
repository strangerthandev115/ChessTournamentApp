const express = require('express');
const app = express();
const path = require('path');

//routing for all the web pages

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

// Route for inputPlayers.html
app.get('/inputPlayers', (req, res) => {
  res.sendFile(path.join(__dirname, 'inputPlayers', 'inputPlayers.html'));
});

// Route for prizeMoney.html
app.get('/prizeMoney', (req, res) => {
  res.sendFile(path.join(__dirname, 'prizeMoney', 'prizeMoney.html'));
});

// Route for scoreReport.html
app.get('/scoreReport', (req, res) => {
  res.sendFile(path.join(__dirname, 'scoreReport', 'scoreReport.html'));
});

// Route for tournament.html
app.get('/tournament', (req, res) => {
  res.sendFile(path.join(__dirname, 'tournament', 'tournament.html'));
});

// Route for earchPlayer.html
app.get('/searchPlayer', (req, res) => {
  res.sendFile(path.join(__dirname, 'searchPlayer', 'searchPlayer.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
