// let movingDiv = document.getElementById("movingDiv");
// let currentLeft = parseInt(movingDiv.style.left) || 0;
// movingDiv.addEventListener('click', () => {
//     var colors = ['green', 'red', 'blue', 'yellow'];
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     movingDiv.style.background = randomColor;
// });

// movingDiv.addEventListener('keydown', (event) => {
//     if(event.key == 'd') {
//         movingDiv.style.left = (currentLeft + 10) + 'px';
//     }
// });
// movingDiv.tabIndex = 0;
// movingDiv.focus();



let movingDiv = document.getElementById("movingDiv");
movingDiv.addEventListener('click', () => {
    var colors = ['green', 'red', 'blue', 'yellow'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    movingDiv.style.background = randomColor;
});

movingDiv.addEventListener('keydown', (event) => {
    if(event.key == 'd') {
        let currentLeft = parseInt(movingDiv.style.left) || 0;        
        movingDiv.style.left = (currentLeft + 10) + 'px';
    }
    else{
        console.log("error")
    }

    if(event.key == 'a') {
        let currentLeft = parseInt(movingDiv.style.left) || 0;        
        movingDiv.style.left = (currentLeft - 10) + 'px';
    }
    else{
        console.log("error")
    }

    if(event.key == 's') {
        let currentTop = parseInt(movingDiv.style.top) || 0;        
        movingDiv.style.top = (currentTop + 10) + 'px';
    }

    else{
        console.log("error")
    }
    
    if(event.key == 'w') {
        let currentTop = parseInt(movingDiv.style.top) || 0;        
        movingDiv.style.top = (currentTop - 10) + 'px';
    }
    else{
        console.log("error")
    }
});
movingDiv.tabIndex = 0;
movingDiv.focus();
