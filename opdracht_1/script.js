var canvas = document.querySelector(".canvas"),
    btnAdd = document.querySelector(".btn");

const winkelmand = [];
const spliced = winkelmand.toSpliced(0, 2);


function Canvas() {
    canvas.innerHTML = `
        <h1>Er zitten ${winkelmand.length} producten in uw winkelmand</h1><br>
        <h1>Uw producten zijn: ${winkelmand.join(" , ")}</h1><br>
        <h1>${winkelmand[3]}, staat op de vierde plek in uw winkelmand</h1><br>
    `;
    if (winkelmand.length > 4) {
        canvas.innerHTML = `<h1>u heeft geen drop</h1>`;
    }

}
window.addEventListener('load', () => {
    if (winkelmand.length > 0) {
        Canvas();
    } else {
        canvas.innerHTML = `<p>U heeft nog geen producten toegevoegd.</p>`;
    }
});

btnAdd.addEventListener("click", (event) => {
    const productAdd = document.querySelector("#product-add");
    
    if (productAdd.value) { 
        winkelmand.push(productAdd.value);
        productAdd.value = '';
        winkelmand.sort();
        Canvas();

    } 
});