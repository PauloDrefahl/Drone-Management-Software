function toggleAnimation() {
    var image = document.getElementById('movingImage');
    image.classList.toggle('animating');
    var image2 = document.getElementById('movingImage2')
    image2.classList.toggle('animating')
    var image3 = document.getElementById('movingImage3')
    image3.classList.toggle('animating')
    var image4 = document.getElementById('movingImage4')
    image4.classList.toggle('animating')
}

function ChangeStatus() {
    var statusElement = document.getElementById('status');
    var currentStatus = statusElement.innerText;

    if (currentStatus === 'ON') {
        statusElement.innerText = 'OFF';
        statusElement.style.color = 'red';
    } else {
        statusElement.innerText = 'ON';
        statusElement.style.color = 'white'
    }
}