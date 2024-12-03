let trafficLight = document.getElementById('traffic-light');
trafficLight.src = "./trafficLightRed.png";

trafficLight.addEventListener('click', () => {
    if (trafficLight.src.includes("Red")) {
        trafficLight.src = "./trafficLightYellow.png";
    } else if (trafficLight.src.includes("Yellow")) {
        trafficLight.src = "./trafficLightGreen.png";
    } else {
        trafficLight.src = "./trafficLightRed.png";
    }
});
