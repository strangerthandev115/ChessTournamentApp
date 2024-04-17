// Get the button element from the HTML
const button = document.querySelector('#generateDBFs');

// Add a click event listener to the button
button.addEventListener('click', async () => {
    try {
        // Get the event ID from the input element
        const eventID = document.getElementById('eventid').value;

        // Validate the event ID
        if (eventID.length !== 9) {
            alert('Event ID must be exactly 9 characters long.');
            return; // Exit the function if event ID length is not 9
        }
        
        // Send a fetch request to dbfController.js
        const response = await fetch('/dbfGenerator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ eventID })
        });

        // Check if the request was successful
        if (response.ok) {
            console.log('DBF files created successfully!');
        } else {
            console.error('Failed to create DBF files');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});

function GetPlayerData(){
    let players = [];
    fetch('/getPlayers')
      .then(response => response.json())
      .then(data => {
        players = data;
        console.log(players);
    });
}