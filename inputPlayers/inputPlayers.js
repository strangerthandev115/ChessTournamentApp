function lookup() {
    //this function takes the input from the user in the inputPlayers file
    //and looks up the player in the dbf file

    //get the input from the user
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    //open the dbf file
    var dbf = new ActiveXObject("TARATSUP.DBF");

    //search for the player in the dbf file
    var player = dbf.lookup(fname, lname);
    
    //if player is found, check expiration date
    var message = "Player is not found!";
    if (player) {
        if (player.expirationDate < new Date()) {
            var message = "Player is expired!";
            document.getElementById("playerStatus").innerHTML = message;
        }
    }

    document.getElementById("playerStatus").innerHTML = message;

}