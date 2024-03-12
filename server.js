const express = require('express');
const app = express();
const path = require('path');
const playersController = require('./playersController');


app.use(express.json());
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

// Route for inputPlayers.html
app.get('/addSection', (req, res) => {
  res.sendFile(path.join(__dirname, 'addSection', 'addSection.html'));
});

// Route for scoreReport.html
app.get('/scoreReport', (req, res) => {
  res.sendFile(path.join(__dirname, 'scoreReport', 'scoreReport.html'));
});

// Route for dbfGenerator.html
app.get('/dbfGenerator', (req, res) => {
  res.sendFile(path.join(__dirname, 'dbfGenerator', 'dbfGenerator.html'));
});

// Route for tournament.html
app.get('/tournament', (req, res) => {
  res.sendFile(path.join(__dirname, 'tournament', 'tournament.html'));
});

// Route for searchPlayer.html
app.get('/searchPlayer', (req, res) => {
  res.sendFile(path.join(__dirname, 'searchPlayer', 'searchPlayer.html'));
});

//route for data from searchPlayer.js to be sent to the server
app.post('/searchPlayer', (req, res) => {
  const playerData = req.body;
  playersController.receivePlayerData(playerData);
  res.status(200).send('Player data received successfully');
});

//route for data from playersController.js to be sent to the client
app.get('/getSamplePlayers', (req, res) => {
  const playerData = playersController.sendSamplePlayerData();
  res.status(200).json(playerData);
});

//route for data from playersController.js to be sent to the client
app.get('/getPlayers', (req, res) => {
  const playerData = playersController.sendPlayerData();
  res.status(200).json(playerData);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});