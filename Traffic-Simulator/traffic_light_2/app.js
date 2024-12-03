
let trafficLight = document.getElementById('traffic-light');
const trafficBtnRed = document.getElementById("trafficBtnRed"),
      trafficBtnYellow = document.getElementById("trafficBtnYellow"),
      trafficBtnGreen = document.getElementById("trafficBtnGreen"),
      trafficBtnOff = document.getElementById("trafficBtnOff");  

trafficLight.src = "./img/shutOff.png"; 


trafficBtnRed.addEventListener('click', function() {
    trafficLight.src = "./img/trafficLightRed.png";
});

trafficBtnYellow.addEventListener('click', function() {
    trafficLight.src = "./img/trafficLightYellow.png";
});

trafficBtnGreen.addEventListener('click', function() {
    trafficLight.src = "./img/trafficLightGreen.png";
});

trafficBtnOff.addEventListener('click', function() {
    trafficLight.src = "./img/shutOff.png";
});
