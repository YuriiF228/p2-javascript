let btn = document.querySelector(".verif-button"),
    btnControl = document.getElementById("control"),
    verifObj = document.getElementById("verifObj"),
    age = document.getElementById("verif-input").value;

btn.onclick = () => {
    verifObj.style.display = "block";
}
// btnControl.onclick = () => {
//     if (age <= 18) {
//         window.location.href = "";
//     }
//     else (age => 18) {
//         window.write = "helaas je bent te jong";
//     }
// }