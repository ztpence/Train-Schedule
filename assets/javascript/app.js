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
$("#submit-Button").on("click", function(event) {
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
database.ref().on("child_added", function(childSnapshot, prevChildKey){
   
   // Need to store snapshot in variables
    var nameTrain = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;

    // log train information
    console.log("new train" + nameTrain);
    console.log("destination" + trainDestination);
    console.log("time" + trainTime);
    console.log("frequency" + trainFrequency);

$("#train-table > tbody").append("<tr><td>" + nameTrain + "</td><td>" + trainDestination + 
"</td><td>" + trainFrequency + "</td><td>" + trainTime + "</td></tr>");
    

});

// Need to create logic for train next train arrival

