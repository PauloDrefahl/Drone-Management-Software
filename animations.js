function toggleAnimation() {
    var image = document.getElementById('movingImage');
    image.classList.toggle('animating');
    var image2 = document.getElementById('movingImage2')
    image2.classList.toggle('animating')
}

function ChangeStatus() {
    var statusElement = document.getElementById('status');
    var currentStatus = statusElement.innerText;

    if (currentStatus === 'ON') {
        statusElement.innerText = 'OFF';
    } else {
        statusElement.innerText = 'ON';
    }
}