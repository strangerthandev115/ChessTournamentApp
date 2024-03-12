function printPlayerDetails() {
    // Get the value entered by the user
    var number = document.getElementById('number').value;

    // Guard clause
    if (number === "") {
        document.getElementById('playerDetailsOutput').innerHTML = "Please enter a number.";
        return;
    }

    // Read the text file
    fetch('output.txt')
        .then(response => response.text())
        .then(data => {
            // Split text data into rows
            var rows = data.split('\n');

            // Search for the number in the first column (MEM_ID)
            for (var i = 0; i < rows.length; i++) {
                var columns = rows[i].split('\t'); // Split row using tabs
                if (columns[0].trim() === number.trim()) { // Assuming MEM_ID is the first column
                    // Construct the output with each column on a separate line
                    output = "<br>";
                    var output = "Row: " + (i + 1) + "<br>";
                    columns.forEach(column => {
                        output += column + "<br>";
                    });
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
