function printPlayerDetails() {
    // Get the value entered by the user
    var number = document.getElementById('number').value;

    // Add quotes around the number
    var quotedNumber = '"' + number + '"';

    // Read the CSV file
    fetch('DBFTOCSV.csv')
        .then(response => response.text())
        .then(data => {
            // Split CSV data into rows
            var rows = data.split('\n');

            // Search for the number in the MEM_ID column
            for (var i = 0; i < rows.length; i++) {
                var columns = rows[i].split(',');
                if (columns[0] === quotedNumber) { // Assuming MEM_ID is the first column
                    // Remove quotes from player's data
                    var playerData = rows[i].replace(/"/g, '');
                    
                    // Display the player details
                    var output = "Row: " + (i) + "<br>Row Data: " + playerData;
                    document.getElementById('playerDetailsOutput').innerHTML = output;
                    return; // Exit the loop if a match is found
                }
            }

            // If no match is found
            document.getElementById('playerDetailsOutput').innerHTML = "Player not found.";
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function displayFirstTenElements() {
    // Read the CSV file
    fetch('DBFTOCSV.csv')
        .then(response => response.text())
        .then(data => {
            // Split CSV data into rows
            var rows = data.split('\n').slice(0, 10); // Get the first ten rows

            // Display the first ten rows
            var output = "<h2>First Ten Elements:</h2><ul>";
            rows.forEach(row => {
                output += "<li>" + row + "</li>";
            });
            output += "</ul>";
            document.getElementById('playerDetailsOutput').innerHTML = output;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}