let movingDiv = document.getElementById('movingDiv');
let position = 0;
let posScherm = innerWidth;

setInterval(function() {
    position += 2;
    movingDiv.style.transform = 'translateX(' + position + 'px)';
    if (position > posScherm) {
        position = 0; 
    }
}, 100);
