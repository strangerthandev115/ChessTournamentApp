let players = [];
let samplePlayers = [
    {
        id: 10000001,
        fname: "John",
        lname: "Doe",
        rating: 1800
    },
    {
        id: 10000002,
        fname: "Jane",
        lname: "Smith",
        rating: 2000
    },
    {
        id: 10000003,
        fname: "Mike",
        lname: "Johnson",
        rating: 1700
    },
    {
        id: 10000004,
        fname: "Sarah",
        lname: "Williams",
        rating: 1900
    },
    {
        id: 10000005,
        fname: "David",
        lname: "Brown",
        rating: 1600
    },
    {
        id: 10000006,
        fname: "Emily",
        lname: "Taylor",
        rating: 2100
    },
    {
        id: 10000007,
        fname: "Michael",
        lname: "Anderson",
        rating: 1750
    },
    {
        id: 10000008,
        fname: "Jessica",
        lname: "Martinez",
        rating: 1850
    },
    {
        id: 10000009,
        fname: "Daniel",
        lname: "Thomas",
        rating: 1950
    },
    {
        id: 10000010,
        fname: "Olivia",
        lname: "Garcia",
        rating: 2050
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
    console.log(players);
}

function sendPlayerData() {
    return players;
}

function sendSamplePlayerData() {
    return samplePlayers;
}

module.exports = {
    receivePlayerData,
    sendSamplePlayerData,
    sendPlayerData
};