// Write your JavaScript code here!

window.addEventListener("load", function() {

    /*
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });

*/


    // This code sets up the event listener for the form submission and handles the form data.
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission which reloads the page

        // Retrieve values from each input field in the form
        const pilotName = document.querySelector("input[name='pilotName']").value;
        const copilotName = document.querySelector("input[name='copilotName']").value;
        const fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        const cargoMass = document.querySelector("input[name='cargoMass']").value;

        // Call formSubmission() to handle validation and update the shuttle requirements
        formSubmission(document, null, pilotName, copilotName, fuelLevel, cargoMass);
    });
});

