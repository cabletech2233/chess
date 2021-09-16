
function boja_ispune() {

    var r = (Math.floor(Math.random() * 256)).toString();
    var b = (Math.floor(Math.random() * 256)).toString();
    var g = (Math.floor(Math.random() * 256)).toString();

    var cir = document.getElementById("c");
    cir.setAttribute("fill", "rgb(" + r + "," + g + "," + b + ")")

}
