d.addEventListener("touchstart", empezar);
d.addEventListener("touchmove", seguir);
d.addEventListener("touchend", freno);
d.addEventListener("touchleave", freno);

var apretado = false;
var touch;

function empezar (e) {
    e.preventDefault();
    touch = e.touches[0];

    x = touch.clientX;
    y = touch.clientY;
    apretado = true;
};

function seguir (e) {
    e.preventDefault();
    touch = e.touches[0];

    xf = touch.clientX;
    yf = touch.clientY;

    if(apretado) {
    dibujarLineas(x, y, xf, yf, papel);
    x = xf;
    y = yf;
    };
};

function freno (e) {
    e.preventDefault();
    apretado = false;
};


//-------------------------------------------------------

coloresAlt.addEventListener("change", update);
function update() {
    color = '#' + coloresAlt.value;
    if (penAncho == 30) {
        penAncho = 5;
        chico.classList.add("iSelected");
        eraser.classList.remove("iSelected");
        d.classList.remove("eraserCur");
    };
};