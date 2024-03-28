const express = require('express');
const app = express();
const path = require('path');
const playersController = require('./playersController');
const dbfController = require('./dbfController');


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
//app.get('/getSamplePlayers', (req, res) => {
//  const playerData = playersController.sendSamplePlayerData();
//  res.status(200).json(playerData);
//});

//route for data from playersController.js to be sent to the client
app.get('/getPlayers', (req, res) => {
  const playerData = playersController.sendPlayerData();
  res.status(200).json(playerData);
});

// Route to update player sections
app.post('/updatePlayerSections', (req, res) => {
  const updatedPlayerData = req.body;

  // Assuming updatedPlayerData is an array of objects with 'id' and 'section' properties
  updatedPlayerData.forEach(updatedPlayer => {
      playersController.updatePlayerSection(updatedPlayer.id, updatedPlayer.section);
  });

  res.status(200).send('Player sections updated successfully');
});

app.post('/updatePlayerScoreReports', (req, res) => {
  const updatedPlayerData = req.body;

  // Call the updatePlayerScoreReport function from playersController
  updatedPlayerData.forEach(updatedPlayer => {
    playersController.updatePlayerScoreReport(updatedPlayer.id, updatedPlayer.scoreReport);
});


  res.status(200).send('Player score reports updated successfully');
});

app.post('/dbfGenerator', async (req, res) => {
  try {
      dbfController.writeTS();
      res.status(200).send('DBF files created successfully');
  } catch (error) {
      console.error('Error creating DBF files:', error);
      res.status(500).send('Internal server error');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});