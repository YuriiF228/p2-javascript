const output = document.getElementById("output"),
    input = document.getElementById("input");
var shop = [];

function add_product() {
    let product = input.value;
    if (product) {
        shop.push(product);
        console.log(shop);
        output.textContent = `Products in kard: ${shop.join(", ")}`;
    }
}