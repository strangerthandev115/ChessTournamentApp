function printPlayerDetails() {
    // Get the value entered by the user
    var number = document.getElementById('number').value;

    //guard clause
    if(number === ""){
        document.getElementById('playerDetailsOutput').innerHTML = "Please enter a number.";
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

                    //parse id, fname, lname, and expDate out of the row
                    var id = playerData.split(',')[0];
                    var lname = playerData.split(',')[1];
                    var fname = playerData.split(',')[2];
                    var rating = playerData.split(',')[8];
                    var expDate = playerData.split(',')[3];
                    var rating = playerData.split(',')[8];

                    //guard clause
                    if(lname == "INACTIVE ID") {
                        document.getElementById('playerDetailsOutput').innerHTML = "Inactive ID. Please enter an active ID.";
                        return; 
                    }

                    //addPlayer if the date is not expired
                    if(expired(expDate)) {
                        // TODO cant get this to work, will fix later
                        // //if player is alr in list, do not add player
                        // if(searchExistingPlayer(id)) {
                        //     document.getElementById('playerDetailsOutput').innerHTML = "Player already in list.";
                        //     return;
                        // }

                        //add player to the list
                        addPlayer(id, fname, lname, rating);
                        var output = "ID: " + id + "<br>Last Name: " + lname + "<br>First Name: " + fname + "<br>Rating: " + rating + "<br>Expiration Date: " + expDate + "<br>" + "Player added successfully!";
                        document.getElementById('playerDetailsOutput').innerHTML = output;

                        return;
                    }

                    // if date is expired, display the player details and do not add the player
                    var output = "ID: " + id + "<br>Last Name: " + lname + "<br>First Name: " + fname + "<br>Rating: " + rating + "<br>Expiration Date: " + expDate + "<br>" + "Player not added. ID is expired.";
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

//function to check the expiration date of the player
function expired(date) {
    if(date < yyyymmdd()) {
        return false;
    } else {
        return true;
    }
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

function addPlayer(id, fname, lname, rating) {
    // Create a JSON object to hold the data
    var results = {
        "id": id,
        "fname": fname,
        "lname": lname,
        "rating": rating
    };

    console.log(results);

    fetch('http://localhost:3000/searchPlayer', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(results)
})
.then(response => response.text())
.then(data => {
    console.log(data),
    console.log("Player Added Successfully!");
})
.catch(error => console.error('Error:', error));
}

//function from stack overflow to get current date in yyyymmdd format
function yyyymmdd() {
    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = y + m + d;
    return yyyymmdd;
}

function searchExistingPlayer(id) {
    found = false;
    fetch('http://localhost:3000/getPlayers')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        found = searchList(data, id);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    return found;
}

function searchList(data, id) {
    for(var i = 0; i < data.length; i++) {
        if(data[i].id == id) {
            return true;
        }
    }
    return false;
}