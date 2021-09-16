var a = 0
var lista_boja = ["red", "brown", "gray", "purple", "blue", "green"]
function boja_ispune() {

    var cir = document.getElementById("c");
    cir.setAttribute("fill", lista_boja[a])
    a += 1;
    if (a == 6) {
        a = 0
    }

}