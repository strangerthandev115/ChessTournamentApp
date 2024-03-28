let players = [
    {
        id: 10000001,
        fname: "John",
        lname: "Doe",
        quickRating: 1800,
        rapidRating: 1000,
        section: '',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000002,
        fname: "Jane",
        lname: "Smith",
        quickRating: 9999,
        rapidRating: 9999,
        section: '1',
        matchInfo: [],
        scoreReport: []
    }
];

function receivePlayerData(playerData) {
    // Validate player data
    if(playerData.id === undefined || playerData.fname === undefined || playerData.lname === undefined) {
        throw new Error('Invalid player data');
    }

    // Add player data to the players array
    players.push(playerData);

    //for testing
    console.log('Player data received successfully');
    console.log(players);
}

function sendPlayerData() {
    return players;
}

//function sendSamplePlayerData() {
//    return samplePlayers;
//}

// Function to update player section
function updatePlayerSection(playerId, newSection) {
    // Find the player with the given ID
    const playerIndex = players.findIndex(players => players.id === playerId);
    if (playerIndex !== -1) {
        // Update the player's section
        players[playerIndex].section = newSection;
    }

    console.log("updatePlayerSection");
    console.log(players);
}

function updatePlayerScoreReport(playerID, newSecoreReport) {
    const playerIndex = players.findIndex(players => players.id === playerID);
    if (playerIndex !== -1) {
        // Update the player's section
        players[playerIndex].scoreReport = newSecoreReport;
    }
    console.log("updatePlayerScoreReport");
    console.log(players);
}



module.exports = {
    receivePlayerData,
    //sendSamplePlayerData,
    sendPlayerData,
    updatePlayerSection,
    updatePlayerScoreReport
};