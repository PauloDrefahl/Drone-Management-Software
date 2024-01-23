// generateData.js
var NumOfPings = 0;
var maxUpdates = 5; // Set your desired limit here

document.addEventListener("DOMContentLoaded", function () {
    // Get the terminal list
    var terminalList = document.getElementById("terminal-list");

    // Function to generate random drone data
    function generateDroneData() {
        var DroneNum = Math.floor(Math.random() * 4);
        var droneID = "XYZ" + Math.floor(Math.random() * 1000);
        var connectionStatus = "Connected";
        var battery = Math.floor(Math.random() * 101); // Random battery level (0-100%)
        var altitude = Math.floor(Math.random() * 201); // Random altitude (0-200m)
        var speed = Math.floor(Math.random() * 31); // Random speed (0-30 m/s)

        return `
            <li class="command">Connecting to Drone...${DroneNum}</li>
            <li class="output">Drone ID: ${droneID}</li>
            <li class="output">Connection Status: ${connectionStatus}</li>
            <li class="output">Battery: ${battery}%</li>
            <li class="output">Altitude: ${altitude}m</li>
            <li class="output">Speed: ${speed} m/s</li>
            <li>-----------------------------------</li>
        `;
    }

    // Function to add drone data to the terminal list
    function addToTerminalList(data) {
        // Create a new list item
        var listItem = document.createElement("li");
        listItem.innerHTML = data;

        // Append the new item to the terminal list
        terminalList.appendChild(listItem);
    }

    var updateCounter = 0;

    // Generate and add new drone data every 5 seconds
    function updateData() {
        if (updateCounter < maxUpdates) {
            var newData = generateDroneData();
            addToTerminalList(newData);
            updateCounter++;

            // If the limit is reached, you can stop further updates
            if (updateCounter === maxUpdates) {
                clearInterval(updateInterval);
            }
        }
    }


    updateData();
    var updateInterval = setInterval(updateData, 10000);
    // Update data initially
    // Update data every 5 seconds
});

function showBox(boxId) { 
    // Reset all boxes to default state
    document.querySelectorAll('.box').forEach(box => {
        box.style.animation = 'none';
    });

    // Apply animation to the selected box
    const selectedBox = document.getElementById(boxId);
    selectedBox.style.animation = 'boxAnimation 2s ease-in-out, borderColorChange 2s ease-in-out';
}