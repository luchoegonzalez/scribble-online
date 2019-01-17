// var ruta = window.location;
// var body = document.body;
// console.log(body);
// console.log(console);
// document.write("Estás en: " + ruta.port)

var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;
console.log(lienzo);


function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

// dibujarLineas("grey", 0, 0, 10, 500);
// dibujarLineas("grey", 0, 10, 20, 500);
// dibujarLineas("grey", 0, 20, 30, 500);

var j = 500;
var lineas2 = 0;

// while(l < lineas && j > lineas2) {
//     dibujarLineas("grey", 0, l, l+10, 500);
//     l = l + 10;
//     j = j - 10;
//     dibujarLineas("blue", l, 0, 500, l);
//     dibujarLineas("green", l, 500, 500, j+10);
//     dibujarLineas("black", l, 0, 0, j+10);
// }

// si le pongo parentesis a la funcion en el addevent se ejecuta de una, no hay que ponerle para que asi funcione el event listener click

var texto = document.getElementById("año");
var enviar = document.getElementById("enviar");

enviar.addEventListener("click", actual);

function actual () {
    var lineas = parseInt(texto.value);
    var l = 0;
    var espacio = ancho / lineas;
    var yi, xf;

    for(l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLineas("grey", 0, yi, xf, 500);
    console.log(l);
}

};