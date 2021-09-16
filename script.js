var a = 0
var lista_boja = ["red", "brown", "gray", "purple", "blue", "green"]
function boja_ispune() {

    var r = (Math.floor(Math.random() * 256)).toString();
    var b = (Math.floor(Math.random() * 256)).toString();
    var g = (Math.floor(Math.random() * 256)).toString();
    console.log(r, g, b)
    var cir = document.getElementById("c");
    cir.setAttribute("fill", "rgb(" + r + "," + g + "," + b + ")")
    a += 1;
    if (a == 6) {
        a = 0
    }

}
