var bars = document.getElementById("bars");
var nav = document.getElementById("nav");

bars.addEventListener("click", abrir)

function abrir () {
    nav.classList.toggle("abrirNav");
};


var chico = document.getElementById("chico");
var med = document.getElementById("med");
var big = document.getElementById("big");

chico.addEventListener("click", heightChico);
med.addEventListener("click", heightMed);
big.addEventListener("click", heightBig);


function heightChico() {
    if (isSafari) {
        color = color = "#" + coloresAlt.value;;
    } else {
        color = colores.value;
    };
    penAncho = 5;
    chico.classList.add("iSelected");
    med.classList.remove("iSelected");
    big.classList.remove("iSelected");
    eraser.classList.remove("iSelected");
    d.classList.remove("eraserCur");
};

function heightMed() {
    if (isSafari) {
        color = color = "#" + coloresAlt.value;;
    } else {
        color = colores.value;
    };
    penAncho = 15;
    chico.classList.remove("iSelected");
    med.classList.add("iSelected");
    big.classList.remove("iSelected");
    eraser.classList.remove("iSelected");
    d.classList.remove("eraserCur");
};

function heightBig() {
    if (isSafari) {
        color = color = "#" + coloresAlt.value;;
    } else {
        color = colores.value;
    };
    penAncho = 40;
    big.classList.add("iSelected");
    med.classList.remove("iSelected");
    chico.classList.remove("iSelected");
    eraser.classList.remove("iSelected");
    d.classList.remove("eraserCur");
};

var trash = document.getElementById("trash");
trash.addEventListener("click", borrarTodo);
function borrarTodo() {
    papel.clearRect(0, 0, d.width, d.height);
    nav.classList.toggle("abrirNav");
};

var eraser = document.getElementById("eraser");
eraser.addEventListener("click", goma);
function goma() {
    penAncho = 30;
    color = "#f3f9fb";
    eraser.classList.add("iSelected");
    big.classList.remove("iSelected");
    med.classList.remove("iSelected");
    chico.classList.remove("iSelected");
    d.classList.add("eraserCur");
};

colores.addEventListener("change", cambio);
function cambio() {
    color = colores.value;
    if (penAncho == 30) {
        penAncho = 5;
        chico.classList.add("iSelected");
        eraser.classList.remove("iSelected");
        d.classList.remove("eraserCur");
    };
};

window.addEventListener("resize", cambioVentana);
function cambioVentana() {
    d.width = window.innerWidth;
    d.height = window.innerHeight;
}

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
navigator.userAgent &&
navigator.userAgent.indexOf('CriOS') == -1 &&
navigator.userAgent.indexOf('FxiOS') == -1;

var h2 = document.getElementById("h2")
var coloresAlt = document.getElementById("coloresAlt");
if (isSafari) {
    colores.classList.add("colorSafari");
    h2.classList.add("enSafari");
} else {
    coloresAlt.classList.add("colorSafari");
    coloresAlt.classList.remove("jscolor");
};