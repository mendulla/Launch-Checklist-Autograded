// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput.trim() === "") {
        return "Empty";
    }
    if (isNaN(Number(testInput))) {
        return "Not a Number";
    }
    return "Is a Number";
}



 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let allValid = true;

    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Not a Number") {
        document.getElementById('pilotStatus').innerHTML = "Pilot Name is Required and must be a string.";
        allValid = false;
    } else {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
    }

    if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Not a Number") {
        document.getElementById('copilotStatus').innerHTML = "Co-pilot Name is Required and must be a string.";
        allValid = false;
    } else {
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if (validateInput(fuelLevel) !== "Is a Number" || fuelLevel < 10000) {
        document.getElementById('fuelStatus').innerHTML = "There is not enough fuel for the journey.";
        allValid = false;
    } else {
        document.getElementById('fuelStatus').innerHTML = "Fuel level high enough for launch";
    }

    if (validateInput(cargoLevel) !== "Is a Number" || cargoLevel > 10000) {
        document.getElementById('cargoStatus').innerHTML = "There is too much mass for the shuttle to take off.";
        allValid = false;
    } else {
        document.getElementById('cargoStatus').innerHTML = "Cargo mass low enough for launch";
    }

    if (!allValid) {
        document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
        document.getElementById('launchStatus').style.color = 'red';
        document.getElementById('faultyItems').style.visibility = 'visible';
    } else {
        document.getElementById('launchStatus').innerHTML = "Shuttle is ready for launch";
        document.getElementById('launchStatus').style.color = 'green';
        document.getElementById('faultyItems').style.visibility = 'visible';
    }
}

 
 
 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;