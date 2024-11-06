let btn = document.querySelector(".verif-button"),
    btnControl = document.getElementById("control"),
    verifObj = document.getElementById("verifObj");

btn.onclick = () => {
    verifObj.style.display = "block";

}
btnControl.onclick = () => {
    age = document.getElementById("verif-input").value;


    if (isNaN(age) || age > 18) {
        window.location.href = "https://www.techniekcollegerotterdam.nl/locaties/schiedamseweg";
    }
    else {
        verifObj.style.display = "block";
        const fout = document.querySelector(".fout");
        fout.innerHTML = "<h1>Jij bent te jong!!!!</h1>";
    }
}