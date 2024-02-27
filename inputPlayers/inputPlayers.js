var rows = 1;

function deleteRow() {
    //delete a row from the inputPlayers table
    var parent = document.getElementById('InputPlayersSection');
    var child = document.getElementById('InputPlayersForm' + (rows - 1));
    parent.removeChild(child);
    rows--;
}


//function to add a row to the inputPlayers table
function addRow() {
    //add a row to the inputPlayers table
    var div = document.getElementById('InputPlayersSection');
    var newFormElement = document.createElement('form');

    //element is named based on which row it will occupy
    newFormElement.id = 'InputPlayersForm' + rows;

    //create div element to hold the input fields
    var newDivElement = document.createElement('div');

    //styling for the div element
    newDivElement.className = 'row';
    newDivElement.style = 'margin-top: 5px; margin-bottom: 5px';

    //create input fields for the first name, last name, and id
    newDivElement.innerHTML = '<div class="col">' +
    '<input type="text" class="form-control" placeholder="First name" aria-label="First name" id="fname' + rows + '"></div>' +
    '<div class="col"><input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="lname' + rows + '"></div>' +
    '<div class="col"><input type="text" class="form-control" placeholder="id" aria-label="id" id="id' + rows + '"></div>';
    
    //add the div element (input fields) to the form element
    newFormElement.appendChild(newDivElement);
    //add the form element to the div element
    div.appendChild(newFormElement);
    //increment the number of rows
    rows++;
}

//function to submit player data to the server
function submitPlayers() {
    //create strings to hold the id of the input fields
    let fnameString = "fname";
    let lnameString = "lname";
    let idString = "id";

    //create array of json objects to send to the server
    var playersData = [];
    
    //loop through the input fields and add the data to the array
    for(var i = 0; i < rows; i++) {
        var tempfname = fnameString + i;
        var templname = lnameString + i;
        var tempid = idString + i;
        
        //get the data from the input fields
        var fname = document.getElementById(tempfname).value;
        var lname = document.getElementById(templname).value;
        var id = document.getElementById(tempid).value;

        //create a json object to hold the data
        var results = {
            "fname": fname,
            "lname": lname,
            "id": id
        };

        //add the json object to the array
        playersData[i] = results;

        checkId = playersData[i].id;
        //call checkPlayer function to check if players ID is in the database
        checkPlayer(checkId, i);
    }
}

function checkPlayer(checkId, i) {
    // Get the value entered by the user
    var number = checkId;

    //guard clause
    if (number === "") {
        document.getElementById('feedback').innerHTML = "Please enter a player ID.";
        return;
    }

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