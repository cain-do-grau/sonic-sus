canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

sh = 150;
sl = 100;

dh = 150;
dl = 100;

fC = "a.jpeg";
// faltou um ponto e virgula abaixo
s = "transferir.jpeg";
d = "brasileiro-cria-versao-de-legend-of-zelda-protagonizada-por-dollynho.jpg";

sy = 10;
sx = 10;

dy = 400;
dx = 600;






function add() {

    ni = new Image();
    ni.onload = ufc;
    ni.src = fC;

    ns = new Image();
    ns.onload = usc;
    ns.src = s;

    nd = new Image();
    nd.onload = udc;
    nd.src = d;


}

function ufc() {
    ctx.drawImage(ni, 0, 0, canvas.width, canvas.height);
}
function usc() {
    ctx.drawImage(ns, sx, sy, sl, sh);
}

function udc() {
    ctx.drawImage(nd, dx, dy, dl, dh);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    //e.keyCode, o k é minúsculo
    keyPressed = e.keyCode;
    if (keyPressed == '37') {
        left();
    }

    if (keyPressed == '38') {
        up();
    }
    if (keyPressed == '39') {
        right();
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if((dx==sx)&&(dy==sy)){
        dy = 800;
        dx =1000;
        document.getElementById("i").innerHTML = "você matou o dollynho"
    }
}

//adicionei o if para não sair da tela!
function left() {
    if (sx >= 0) {
        sx = sx - 10;
        ufc();
        usc();
        udc();
    }
}

function up() {
    if (sy >= 0) {
        sy = sy - 10;
        ufc();
        usc();
        udc();
    }
}

function right() {
    if (sx <= 700) {
        sx = sx + 10;
        ufc();
        usc();
        udc();
    }
}

function down() {
    if (sy <= 500) {
        sy = sy + 10;
        ufc();
        usc();
        udc();
    }
}

