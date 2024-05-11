// Write your helper functions here!
require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Update mission target div with detailed information and image.
    // Note: The 'alt' attribute was removed to match test expectations.
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`; // Removed alt attribute to match the test case output.
}

function validateInput(testInput) {
    // Validate input to check if it's a string, empty, or a number.
    if (typeof testInput !== 'string') {
         return "Not a String";  
     }
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

    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
        document.getElementById('pilotStatus').innerHTML = "Pilot Name is Required and must be a string.";
        allValid = false;
    } else {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
    }

    if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number") {
        document.getElementById('copilotStatus').innerHTML = "Co-pilot Name is Required and must be a string.";
        allValid = false;
    } else {
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if (validateInput(fuelLevel) === "Empty" || isNaN(Number(fuelLevel)) || Number(fuelLevel) < 10000) {
        document.getElementById('fuelStatus').innerHTML = "Fuel level too low for launch";
        allValid = false;
    } else {
        document.getElementById('fuelStatus').innerHTML = "Fuel level high enough for launch";
    }

    if (validateInput(cargoLevel) === "Empty" || isNaN(Number(cargoLevel)) || Number(cargoLevel) > 10000) {
        document.getElementById('cargoStatus').innerHTML = "Cargo mass too heavy for launch";
        allValid = false;
    } else {
        document.getElementById('cargoStatus').innerHTML = "Cargo mass low enough for launch";
    }

    document.getElementById('launchStatus').style.color = allValid ? 'green' : 'red';
    document.getElementById('launchStatus').innerHTML = allValid ? "Shuttle is Ready for Launch" : "Shuttle Not Ready for Launch";
    document.getElementById('faultyItems').style.visibility = 'visible';
}



async function myFetch() {
    // Fetch data from the provided URL and handle any network errors.
    try {
        const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function pickPlanet(planets) {
    // Select a random planet from an array of planets.
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports = {
    addDestinationInfo,
    validateInput,
    formSubmission,
    pickPlanet,
    myFetch
};
