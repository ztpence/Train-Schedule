// Get Firebase ready
var config = {
   apiKey: "",
   authDomain: "train-scheduler-ae73f.firebaseio.com",
   databaseURL: "https://train-scheduler-ae73f.firebaseio.com",
   projectID: "train-scheduler-ae73f",
   storageBucket: "train-scheduler-ae73f.appspot.com",
   messagingSenderID: "",
};

firebase.initializeApp(config);

var database = firbase.database();

//Add click event for button to add train
$("#submitButton").on("click", function(event) {
    event.preventDefault();
    console.log("working button")

//Need to pull users input
var trainName = $("#name").val().trim();
var destination = $("#destination").val().trim();
var trainTime = moment($("#time").val().trim(), "HH/mm").format("T");
var frequency = $("#frequency").val().trim();

//create a local or temproary object to contain train user info
var newTrain = {
    name: trainName,
    destination: destination,
    time: trainTime,
    frequency: frequency,
};

// Need to create a way to plug user info to firebase
database.ref().push(newTrain) 

//log this to console
console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.time);
console.log(newTrain.frequency);

//Need to clear all of the text box
$("#name").val("");
$("#destination").val("");
$("#time").val("");
$("#frequency").val("");

});

//Need to create event to add new info to database insert train info to html maybe childsnapshot


// Need to create logic for train next train arrival

