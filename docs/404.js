
var ml = 0;
var mt = 0;


var header404 = document.createElement("h1");

header404.textContent = "OH NO! 404!";
header404.style.color = "crimson";
header404.style.position = "absolute";
header404.style.left = "50px";
header404.style.top = "50px";


document.body.appendChild( header404 );

var div = document.getElementById( "a" );
div.style.color = "rgb(0, 255, 255)";
div.style.display = "inline-block";
div.style.postion = "absolute";

var canvas;

function setup() {

    canvas = createCanvas( 400, 400 );

    canvas.style( 'position', 'absolute' );
    canvas.style( 'left', '2%' );
    canvas.style( 'z-index', '-1' );

    background( 50 );

}

function draw() {

    ml = ( sin( millis() * 0.004 ) * 100 ) + 100;
    mt = ( sin( millis() * 0.0035 ) * 150 ) + 150;


    div.style.marginLeft = String( ml ) + "px";
    div.style.marginTop = String( mt ) + "px";

    fill( 255, 0, 50 );
    ellipse( mouseX, mouseY, 5, 5 );

}
