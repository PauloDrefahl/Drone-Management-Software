document.addEventListener("DOMContentLoaded", function () {
    // Get the terminal list
    var terminalList = document.getElementById("terminal-list");

    // Drone data
    var droneID = "XYZ123";
    var connectionStatus = "Connected";
    var battery = Math.floor(Math.random() * 101); // Random battery level (0-100%)
    var altitude = Math.floor(Math.random() * 201); // Random altitude (0-200m)
    var speed = Math.floor(Math.random() * 31); // Random speed (0-30 m/s)

    // Update the terminal list
    terminalList.innerHTML = `
        <li class="command">Connecting to Drone...</li>
        <li class="output">Drone ID: ${droneID}</li>
        <li class="output">Connection Status: ${connectionStatus}</li>
        <li class="output">Battery: ${battery}%</li>
        <li class="output">Altitude: ${altitude}m</li>
        <li class="output">Speed: ${speed} m/s</li>
    `;
});