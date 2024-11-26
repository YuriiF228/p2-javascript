let btn = document.querySelector(".verif-button"),
    btnControl = document.getElementById("control"),
    verifObj = document.getElementById("verifObj");
const bodyDoc = document.body; 

btn.onclick = () => {
    verifObj.style.display = "block";

}
btnControl.onclick = () => {
    age = document.getElementById("verif-input").value;


    if (isNaN(age) || age > 18) {
        // window.location.href = "https://www.youtube.com/watch?v=OE3hF9fMp94";
        var audio = new Audio('./audio.mp3');
        audio.play();
    }
    else {
        btn.style.display = "none";
        verifObj.style.display = "none";
        const fout = document.querySelector(".fout");
        fout.innerHTML = "<h1>Jij bent te jong!!!!</h1>";
        bodyDoc.style.background = "red";
    }
}