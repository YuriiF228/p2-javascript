function tafel() {
    let nummer = parseInt(document.getElementById("nummer").value);
    let res = '';

    for (let i = 1; i <= 10; i++) {
    res += i + " * " + nummer + " = " + (i * nummer) + "<br>";
    }
    document.getElementById("res").innerHTML = res;
}