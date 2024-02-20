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

//function to add a row to the inputPlayers table
function addPlayer() {
    //add a row to the inputPlayers table
    var div = document.getElementById('InputPlayersForm');
    var newElement = document.createElement('div');
    newElement.className = 'row';
    newElement.id = 'row' + rows;
    newElement.style = 'margin-top: 5px; margin-bottom: 5px';

    newElement.innerHTML = '<div class="col">' +
    '<input type="text" class="form-control" placeholder="First name" aria-label="First name" id="fname"></div>' +
    '<div class="col"><input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="lname"></div>' +
    '<div class="col"><input type="text" class="form-control" placeholder="id" aria-label="id" id="id"></div>';

    div.appendChild(newElement);

    rows++;
}

function deleteRow() {
    //delete a row from the inputPlayers table
    var div = document.getElementById('InputPlayersForm');
    var row = document.getElementById('row' + (rows - 1));
    div.removeChild(row);
    rows--;
}
