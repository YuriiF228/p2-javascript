let movingDiv = document.getElementById("movingDiv");
let position = 0 ;

setInterval(function() {
    position += 1;
    movingDiv.style.transform = 'translateX(' + position + 'px)';
    if (position > posScherm) {
        position = 0; 
    }
}, 100);

movingDiv.addEventListener('click', () => {
    var colors = ['green', 'red', 'blue', 'yellow'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    movingDiv.style.background = randomColor;
});
