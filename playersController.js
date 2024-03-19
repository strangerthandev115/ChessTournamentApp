let players = ["John", "Sally", "Joe", "Tim", "Gatlin", "Jordan", "Tommy", "Emily"];
let samplePlayers = [
    {
        id: 10000001,
        fname: "John",
        lname: "Doe",
        rating: 1800,
        section: '',
        matchInfo: ['10000010','10000009','10000008','10000007','10000006','10000005','10000004','10000003','10000002'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000002,
        fname: "Jane",
        lname: "Smith",
        rating: 2000,
        section: '1',
        matchInfo: ['10000009','10000007','10000005','10000003','10000010','10000008','10000006','10000004','10000001'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000003,
        fname: "Mike",
        lname: "Johnson",
        rating: 1700,
        section: '2',
        matchInfo: ['10000008','10000006','10000004','10000002','10000009','10000007','10000005','10000001','10000010'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000004,
        fname: "Sarah",
        lname: "Williams",
        rating: 1900,
        section: '3',
        matchInfo: ['10000007','10000005','10000003','10000010','10000008','10000006','10000001','10000002','10000009'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000005,
        fname: "David",
        lname: "Brown",
        rating: 1600,
        section: '3',
        matchInfo: ['10000006','10000004','10000002','10000009','10000007','10000001','10000003','10000010','10000008'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000006,
        fname: "Emily",
        lname: "Taylor",
        rating: 2100,
        section: '2',
        matchInfo: ['10000005','10000003','10000010','10000008','10000001','10000004','10000002','10000009','10000007'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000007,
        fname: "Michael",
        lname: "Anderson",
        rating: 1750,
        section: '',
        matchInfo: ['10000004','10000002','10000009','10000001','10000005','10000003','10000010','10000008','10000006'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000008,
        fname: "Jessica",
        lname: "Martinez",
        rating: 1850,
        section: '',
        matchInfo: ['10000003','10000010','10000001','10000006','10000004','10000002','10000009','10000007','10000005'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000009,
        fname: "Daniel",
        lname: "Thomas",
        rating: 9999,
        section: '',
        matchInfo: ['10000002','10000001','10000007','10000005','10000003','10000010','10000008','10000006','10000004'],
        scoreReport: [0,0,0,0,0,0,0,0,0]
    },
    {
        id: 10000010,
        fname: "Olivia",
        lname: "Garcia",
        rating: 2050,
        section: '',
        matchInfo: ['10000001','10000008','10000006','10000004','10000002','10000009','10000007','10000005','10000003'],
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

function updatePlayerScoreReport(playerID, newSecoreReport) {
    const playerIndex = samplePlayers.findIndex(samplePlayers => samplePlayers.id === playerID);
    if (playerIndex !== -1) {
        // Update the player's section
        samplePlayers[playerIndex].scoreReport = newSecoreReport;
    }

    console.log(samplePlayers);
}



module.exports = {
    receivePlayerData,
    sendSamplePlayerData,
    sendPlayerData,
    updatePlayerSection,
    updatePlayerScoreReport
};