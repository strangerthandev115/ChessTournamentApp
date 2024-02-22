var rows = 1;

function lookup() {
    //this function takes the input from the user in the inputPlayers file
    //and looks up the player in the dbf file

    for(var i = 0; i < rows; i++)
    {
        //get the input from the user
        var fname = document.getElementById("row" + i).getElementById("fname").value;
        var lname = document.getElementById("row" + i).getElementById("lname").value;
        var id = document.getElementById("row" + i).getElementById("id").value;
        var results = fname + " " + lname + " " + id;

        var div = document.getElementById('lookupOutput');
        var newElement = document.createElement('div');

        newElement.textContent= results;
        //return search results to the html file
        div.appendChild(newElement);
    }
}

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

    newFormElement.id = 'InputPlayersForm' + rows;

    var newDivElement = document.createElement('div');

    newDivElement.className = 'row';
    newDivElement.style = 'margin-top: 5px; margin-bottom: 5px';

    newDivElement.innerHTML = '<div class="col">' +
    '<input type="text" class="form-control" placeholder="First name" aria-label="First name" id="fname' + rows + '"></div>' +
    '<div class="col"><input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="lname' + rows + '"></div>' +
    '<div class="col"><input type="text" class="form-control" placeholder="id" aria-label="id" id="id' + rows + '"></div>';
    
    newFormElement.appendChild(newDivElement);
    div.appendChild(newFormElement);
    rows++;
    console.log('row added. Total Rows: ' + rows);
}

//function to submit player data to the server
function submitPlayers() {
    let fnameString = "fname";
    let lnameString = "lname";
    let idString = "id";
    console.log('submitting players:');

    //create JSON object of players data 
    var playersData = {};
    
    for(var i = 0; i < rows; i++) {
        var tempfname = fnameString + i;
        var templname = lnameString + i;
        var tempid = idString + i;
        console.log(tempfname + " " + templname + " " + tempid);
        
        var fname = document.getElementById(tempfname).value;
        var lname = document.getElementById(templname).value;
        var id = document.getElementById(tempid).value;
        var results = fname + " " + lname + " " + id;
        playersData[i] = results;
    }
    //send PlayersData to the console
    console.log(playersData);
}
