const boton = document.getElementById('btn');
const textColor = document.querySelector('.color');

function randomRgb() {
    return Math.floor(Math.random() * 256);
}

boton.onclick = function () {
    let colorRgb = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;

    document.body.style.backgroundColor = colorRgb;
    textColor.innerText = colorRgb;
}