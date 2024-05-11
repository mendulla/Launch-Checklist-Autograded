// Write your JavaScript code here!
window.addEventListener("load", function() {
    // Fetch and display planetary data upon initial page load.
    myFetch().then(planets => {
        let listedPlanets = planets;  // Store the fetched planets data.
        console.log(listedPlanets);  // Debugging: Log the fetched planets data to the console.

        // Pick a random planet from the list and update the mission target.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    }).catch(error => {
        console.error("Failed to load planets:", error);  // Error handling if the fetch fails.
    });

    // Event listener for form submission.
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission which reloads the page.

        // Retrieve values from each input field in the form.
        const pilotName = document.querySelector("input[name='pilotName']").value;
        const copilotName = document.querySelector("input[name='copilotName']").value;
        const fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        const cargoMass = document.querySelector("input[name='cargoMass']").value;

        // Check if all fields are filled and if the data types are correct.
        if (!pilotName.trim() || !copilotName.trim() || !fuelLevel.trim() || !cargoMass.trim()) {
            alert("All fields are required!");
            return;
        }

        if (!isNaN(pilotName) || !isNaN(copilotName)) {
            alert("Pilot and Co-pilot names must be strings!");
            return;
        }

        if (isNaN(fuelLevel) || isNaN(cargoMass)) {
            alert("Fuel level and cargo mass must be numbers!");
            return;
        }

        // Call formSubmission() to handle validation and update the shuttle requirements.
        formSubmission(document, null, pilotName, copilotName, fuelLevel, cargoMass);
    });
});
