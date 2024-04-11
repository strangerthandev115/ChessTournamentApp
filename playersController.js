let players = [
   /* {
        id: 10000001,
        fname: "John",
        lname: "Doe",
        quickRating: 1800,
        rapidRating: 1000,
        section: 1,
        matchInfo: [],
        scoreReport: [0,0]
    },
    {
        id: 10000002,
        fname: "Jane",
        lname: "Smith",
        quickRating: '9999',
        rapidRating: 9999,
        section: 1,
        matchInfo: [],
        scoreReport: [0,0]
    },
    {
        id: 10000003,
        fname: "Josh",
        lname: "Striker",
        quickRating: 9999,
        rapidRating: 9999,
        section: '1',
        matchInfo: [],
        scoreReport: [0,1,]
    }*/
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


function deletePlayerData(playerData) {
    if(playerData.id === undefined || playerData.fname === undefined || playerData.lname === undefined) {
        throw new Error('Invalid player data');
    }
    const playerIndex = players.findIndex(player => player.id === playerData.id);

    if (playerIndex !== -1) {
        // Remove the player from the players array
        players.splice(playerIndex, 1);
        console.log("Player successfully deleted");
        console.log(players); // Log the updated players array
    } else {
        console.log("Player not found");
    }
}

module.exports = {
    receivePlayerData,
    deletePlayerData,
    sendPlayerData,
    updatePlayerSection,
    updatePlayerScoreReport
};