var d = document.getElementById("dibujo");
var papel = d.getContext("2d");
var colores = document.getElementById("colores");
// var x = 250;
// var y = 250;
var body = document.getElementById("body");
d.width = window.innerWidth;
d.height = window.innerHeight;
var penAncho = 5;
var color = colores.value;

d.addEventListener("mousedown", dibujar);
d.addEventListener("mousemove", continuar);
d.addEventListener("mouseup", parar);

function dibujarLineas(xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.lineCap = "round";
    lienzo.lineWidth = penAncho;
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

// dibujarLineas("grey", 249, 249, 251, 251, papel);

// var teclas = {
//     UP: 38,
//     DOWN: 40,
//     LEFT: 37,
//     RIGHT: 39,
//     ENTER: 13
// };

// function dibujar (evento) {

// var grey = "brown";
// var movimiento = 10;
// console.log(evento)

//     switch (evento.keyCode) {
//         case teclas.DOWN:
//             dibujarLineas(grey, x, y, x, y + movimiento, papel);
//             y = y + movimiento;
//         break;

//         case teclas.UP:
//             dibujarLineas(grey, x, y, x, y - movimiento, papel);
//             y = y - movimiento;
//         break;

//         case teclas.LEFT:
//             dibujarLineas(grey, x, y, x - movimiento, y, papel);
//             x = x - movimiento;
//         break;

//         case teclas.RIGHT:
//             dibujarLineas(grey, x, y, x + movimiento, y, papel);
//             x = x + movimiento;
//         break;

//         case teclas.ENTER:
//             papel.clearRect(0, 0, d.width, d.height);
//             x = 250;
//             y = 250;
//             dibujarLineas("grey", 249, 249, 251, 251, papel);
//         break;

//         default:
//             console.log("otra tecla");
//         break;
//     }
// };
var pulsado;
var x, y, xf, yf;

function dibujar (evento) {
x = evento.layerX;
y = evento.layerY;
pulsado = true;
};

var headerPos = document.body.offsetWidth - 80;
var header = document.getElementById("header");

function continuar (event) {
    xf = event.layerX;
    yf = event.layerY;

    if (pulsado){
    dibujarLineas(x, y, xf, yf, papel);
    x = xf;
    y = yf;
    }
    if (event.layerX >= headerPos && pulsado){
        header.classList.add("colorSafari");
    } else {
        header.classList.remove("colorSafari");
    };
};

function parar (e) {
    pulsado = false;
};