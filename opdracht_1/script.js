var canvas = document.querySelector(".canvas"),
    btnAdd = document.querySelector(".btn");

const winkelmand = [];

function Canvas() {
    let content = `<h1>Er zitten ${winkelmand.length} producten in uw winkelmand</h1><br>`;
    content += `<h1>Uw producten zijn: ${winkelmand.join(", ")}</h1><br>`;

    if (winkelmand.length > 3) {
        content += `<h1>${winkelmand[3]}, staat op de vierde plek in uw winkelmand</h1><br>`;
    }

    if (winkelmand.length > 4) {
        content = `<h1>u heeft geen drop</h1>`;
        
    }

    canvas.innerHTML = content;
}

window.addEventListener('load', () => {
    if (winkelmand.length > 0) {
        Canvas();
    } else {
        canvas.innerHTML = `<p>U heeft nog geen producten toegevoegd.</p>`;
    }
});

btnAdd.addEventListener('click', function(event) {
    const productAdd = document.querySelector("#product-add");

    if (productAdd.value) {
        winkelmand.push(productAdd.value);
        productAdd.value = '';
        winkelmand.sort();
        Canvas();
    }
});
