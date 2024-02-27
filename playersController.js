let players = [];

function receivePlayerData(playerData) {
    // Validate player data
    if(playerData.id === undefined || playerData.fname === undefined || playerData.lname === undefined) {
        throw new Error('Invalid player data');
    }

    // Add player data to the players array
    players.push(playerData);

    //for testing
    console.log(players);
}

function getPlayers() {
    return players;
}

module.exports = {
    receivePlayerData,
    getPlayers
};