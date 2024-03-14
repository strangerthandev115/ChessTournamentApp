let players = [];
let samplePlayers = [
    {
        id: 10000001,
        fname: "John",
        lname: "Doe",
        rating: 1800,
        section: '',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000002,
        fname: "Jane",
        lname: "Smith",
        rating: 2000,
        section: '1',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000003,
        fname: "Mike",
        lname: "Johnson",
        rating: 1700,
        section: '2',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000004,
        fname: "Sarah",
        lname: "Williams",
        rating: 1900,
        section: '3',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000005,
        fname: "David",
        lname: "Brown",
        rating: 1600,
        section: '',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000006,
        fname: "Emily",
        lname: "Taylor",
        rating: 2100,
        section: '',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000007,
        fname: "Michael",
        lname: "Anderson",
        rating: 1750,
        section: '',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000008,
        fname: "Jessica",
        lname: "Martinez",
        rating: 1850,
        section: '',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000009,
        fname: "Daniel",
        lname: "Thomas",
        rating: 9999,
        section: '',
        matchInfo: [],
        scoreReport: []
    },
    {
        id: 10000010,
        fname: "Olivia",
        lname: "Garcia",
        rating: 2050,
        section: '',
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
    samplePlayers.push(playerData);

    //for testing
    console.log(samplePlayers);
}

function sendPlayerData() {
    return players;
}

function sendSamplePlayerData() {
    return samplePlayers;
}

// Function to update player section
function updatePlayerSection(playerId, newSection) {
    // Find the player with the given ID
    const playerIndex = samplePlayers.findIndex(samplePlayers => samplePlayers.id === playerId);
    if (playerIndex !== -1) {
        // Update the player's section
        samplePlayers[playerIndex].section = newSection;
    }

    console.log(samplePlayers);
}

module.exports = {
    receivePlayerData,
    sendSamplePlayerData,
    sendPlayerData,
    updatePlayerSection
};